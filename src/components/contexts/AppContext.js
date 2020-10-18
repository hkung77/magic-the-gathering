import React, { useState, useEffect } from "react";

export const ApplicationContext = React.createContext({
  authenticated: false,
  setAuthenticated: () => {},
});

const ApplicationContextProvider = ({ children }) => {
  const hasToken = !!localStorage.getItem("token");
  const [authenticated, setAuthenticated] = useState(hasToken);

  useEffect(() => {
    const tokenCheck = () => {
      const token = localStorage.getItem("token");
      setAuthenticated(!!token);
    };

    window.addEventListener("storage", tokenCheck);

    return () => {
      window.removeEventListener("storage", tokenCheck);
    };
  }, []);

  return (
    <ApplicationContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
