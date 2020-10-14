import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route exact path="/login" render={() => <Login />} />
    <Route exact path="/signup" render={() => <Signup />}/>
    <Route path="/" render={() => <Redirect to="/login" />} />
  </Switch>
);

export default UnauthenticatedRoutes;
