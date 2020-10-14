import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/unauth" render={() => <Login />} />
    <Route exact path="/forgotPassword" render={() => <ForgotPassword/>} />
    <Route path="/" render={() => <Redirect to="/unauth" />} />
  </Switch>
);

export default UnauthenticatedRoutes;
