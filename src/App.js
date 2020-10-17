import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";

import ApplicationContextProvider from './components/contexts/AppContext';

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <ApplicationContextProvider>
          <Routes />
        </ApplicationContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
