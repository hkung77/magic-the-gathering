import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route exact path="login" />
    <Route exactpath="signup" />
    <Redirect path="login" />
  </Switch>
);

export default UnauthenticatedRoutes;
