import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
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