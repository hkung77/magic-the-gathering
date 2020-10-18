import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  QueryCache,
  ReactQueryCacheProvider,
} from "react-query";
import Cards from "../components/pages/Cards";

const AuthenticatedRoutes = () => {
  const queryCache = new QueryCache();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Switch>
        <Route exact path="/cards" render={() => <Cards />} />
        <Route path="/" render={() => <Redirect to="/cards" />} />
      </Switch>
    </ReactQueryCacheProvider>
  );
};

export default AuthenticatedRoutes;
