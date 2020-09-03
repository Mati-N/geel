import React, { useContext, useEffect, lazy, Suspense } from "react";
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
const Account = lazy(() => import("../pages/Account"));
const NewPost = lazy(() => import("../pages/NewPost"));
const ChangePassword = lazy(() => import("../pages/ChangePassword"));
const Login = lazy(() => import("../auth/Login"));
const Register = lazy(() => import("../auth/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));
const User = lazy(() => import("../pages/User"));

const Routes = () => {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
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

  useEffect(() => {
    loggedIn();
  }, []);
  return (
    <React.Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={`${key}anim`} style={props} className="container">
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

                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/add-post" component={NewPost} />
                <PrivateRoute exact path="/account" component={Account} />
                <PrivateRoute exact path="/user/:id" component={User} />
                <PrivateRoute exact path="/post/:id" component={Post} />
                <PrivateRoute
                  exact
                  path="/password"
                  component={ChangePassword}
                />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </animated.div>
      ))}
    </React.Fragment>
  );
};

export default Routes;
