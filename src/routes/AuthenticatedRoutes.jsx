import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Cards from "../components/pages/Cards";
import Layout from "../components/shared/Layout";
import MyDeck from "../components/pages/MyDeck";

const AuthenticatedRoutes = () => {
  const queryCache = new QueryCache();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Switch>
        <Route
          exact
          path="/cards"
          render={() => (
            <Layout>
              <Cards />
            </Layout>
          )}
        />
        <Route
          exact
          path="/myDeck"
          render={() => (
            <Layout>
              <MyDeck />
            </Layout>
          )}
        />
        <Route path="/" render={() => <Redirect to="/cards" />} />
      </Switch>
    </ReactQueryCacheProvider>
  );
};

export default AuthenticatedRoutes;
