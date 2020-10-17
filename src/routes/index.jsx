import React, { useContext } from "react";
import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";
import { ApplicationContext } from "../components/contexts/AppContext";

const Routes = () => {
  const { authenticated }= useContext(ApplicationContext);
  return authenticated ? <AuthenticatedRoutes/> : <UnauthenticatedRoutes />;
};

export default Routes;
