import React, { useContext, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import { ImpulseSpinner as Spinner } from "react-spinners-kit";

const AuthenticationRoute = ({ component: Component, auth, ...rest }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading || isAuthenticated == null)
          return (
            <div className="spinner">
              <Spinner size={60} style={{}} />
            </div>
          );
        else if (isAuthenticated) {
          return <Redirect to="/" />;
        } else {
          return (
            <Suspense
              fallback={
                <div className="spinner">
                  <Spinner
                    size={50}
                    style={{
                      margin: "auto",
                    }}
                  />
                </div>
              }
            >
              <Component {...props} />
            </Suspense>
          );
        }
      }}
    />
  );
};

export default AuthenticationRoute;
