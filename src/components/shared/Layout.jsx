import React from 'react';
import PropTypes from 'react';
import NavBar from './NavBar';

const propTypes = {
  children: PropTypes.func,
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <NavBar />
      {children}
    </div>
  )
}

Layout.propTypes = propTypes;
export default Layout;