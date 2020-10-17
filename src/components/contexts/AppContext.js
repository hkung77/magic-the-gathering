import React, { useState, useEffect } from "react";

export const ApplicationContext = React.createContext({
  authenticated: false,
  setAuthenticated: () => {},
});

const ApplicationContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  const [authenticated, setAuthenticated] = useState(!!token);
  useEffect(() => {
    setAuthenticated(!!token);
  }, [token]);

  return (
    <ApplicationContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
