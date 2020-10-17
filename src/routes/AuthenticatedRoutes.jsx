import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Cards from "../components/pages/Cards";

const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/cards" render={() => <Cards />} />
    <Route path="/" render={() => <Redirect to="/cards" />} />
  </Switch>
);

export default AuthenticatedRoutes;
