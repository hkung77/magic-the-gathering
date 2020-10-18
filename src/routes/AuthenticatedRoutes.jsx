import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Cards from "../components/pages/Cards";
import NavBar from "../components/shared/NavBar";

const AuthenticatedRoutes = () => {
  const queryCache = new QueryCache();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Switch>
        <Route
          exact
          path="/cards"
          render={() => (
            <>
              <NavBar />
              <Cards />
            </>
          )}
        />
        <Route path="/" render={() => <Redirect to="/cards" />} />
      </Switch>
    </ReactQueryCacheProvider>
  );
};

export default AuthenticatedRoutes;
