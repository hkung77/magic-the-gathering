import React, { useState } from "react";

export const ApplicationContext = React.createContext({
  authenticated: false,
  setAuthenticated: () => {},
});

const ApplicationContextProvider = ({ children }) => {
  const hasToken = !!localStorage.getItem("token");
  const [authenticated, setAuthenticated] = useState(hasToken);

  return (
    <ApplicationContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
