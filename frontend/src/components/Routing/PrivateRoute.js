import React, { useContext, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import { ImpulseSpinner as Spinner } from "react-spinners-kit";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading || isAuthenticated == null)
          return (
            <div className="main">
              <div className="spinner">
                <Spinner size={68} />
              </div>
            </div>
          );
        else if (!isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return (
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
              <div className="main">
                <Component {...props} />
              </div>
            </Suspense>
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
