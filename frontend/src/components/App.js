import React, { lazy } from "react";
import { HashRouter as Router } from "react-router-dom";
import AuthState from "../context/auth/AuthState";
import AlertState from "../context/alert/AlertState";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Cookies from "js-cookie";
const Navbar = lazy(() => import("./layout/Navbar"));
const Alert = lazy(() => import("./layout/Alert"));
const Routes = lazy(() => import("./Routing/Routes"));

const client = new ApolloClient({
  uri: "/api/",
  cache: new InMemoryCache(),
  connectToDevTools: true,
  credentials: "same-origin",
  headers: {
    "X-CSRFToken": Cookies.get("csrftoken"),
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AlertState>
        <AuthState>
          <Router>
            <Navbar />

            <main className="app" id="main">
              <Alert />
              <Routes />
            </main>
            <footer>
              <a
                style={{
                  opacity: 0,
                }}
                className="skip-link"
                href="#main"
              >
                Skip to main
              </a>
            </footer>
          </Router>
        </AuthState>
      </AlertState>
    </ApolloProvider>
  );
}

export default App;
