import React, { useContext, lazy, Suspense, useRef, useState } from "react";
import { Switch, useLocation, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthenticationRoute from "./AuthenticationRoute";
import { useTransition, animated, config } from "react-spring";
import AuthContext from "../../context/auth/AuthContext";
import { ImpulseSpinner as Spinner } from "react-spinners-kit";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../layout/Error";

const Post = lazy(() => import("../post/Post"));
const Home = lazy(() => import("../pages/Home"));
const FollowingPosts = lazy(() => import("../pages/FollowingPosts"));
const Account = lazy(() => import("../pages/Account"));
const NewPost = lazy(() => import("../pages/NewPost"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const ChangeUsername = lazy(() => import("../pages/ChangeUsername"));
const Login = lazy(() => import("../auth/Login"));
const Register = lazy(() => import("../auth/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));
const User = lazy(() => import("../pages/User"));
const Notifications = lazy(() => import("../pages/Notifications"));

const Routes = ({ main }) => {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  const [height, setHeight] = useState(0);
  const page = useRef(null);

  setInterval(() => {
    if (main != null && page != null) {
      const Page = page.current;
      try {
        if (height != Page.offsetHeight) {
          main.current.style.height = Page.offsetHeight + "px";
          setHeight(Page.offsetHeight);
        }
      } catch {}
    }
  }, 180);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: "scale(0.6) translateX(-100%)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1) translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: "scale(0.6) translateX(70%)",
    },
    config: config.stiff,
  });

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          className="transition-page"
          key={`${key}anim`}
          style={props}
        >
          <div
            className="page"
            ref={page}
            onLoad={(e) => {
              setHeight(e.target.offsetHeight);
            }}
          >
            <ErrorBoundary FallbackComponent={Error}>
              <Suspense
                fallback={
                  <div className="main">
                    <div className="spinner">
                      <Spinner
                        size={50}
                        style={{
                          margin: "auto",
                        }}
                      />
                    </div>
                  </div>
                }
              >
                <Switch location={item}>
                  <AuthenticationRoute exact path="/login" component={Login} />
                  <AuthenticationRoute
                    exact
                    path="/register"
                    component={Register}
                  />

                  <PrivateRoute exact path="/all" component={Home} />
                  <PrivateRoute exact path="/" component={FollowingPosts} />
                  <PrivateRoute exact path="/add-post" component={NewPost} />
                  <PrivateRoute exact path="/account" component={Account} />
                  <PrivateRoute exact path="/user/:id" component={User} />
                  <PrivateRoute exact path="/post/:id" component={Post} />
                  <PrivateRoute
                    exact
                    path="/password"
                    component={ChangePassword}
                  />
                  <PrivateRoute
                    exact
                    path="/username"
                    component={ChangeUsername}
                  />
                  <PrivateRoute
                    exact
                    path="/notifications"
                    component={Notifications}
                  />
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </div>
        </animated.div>
      ))}
    </>
  );
};

export default Routes;
