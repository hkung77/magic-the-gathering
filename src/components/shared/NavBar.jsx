import React from 'react';
import auth from '../../utils/auth';

const NavBar = () => {
  const handleLogoutPress = () => {
    auth.logout();
  }

  return (
  <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <button onClick={handleLogoutPress}>
      Logout
    </button>
  </nav>
  )
}

export default NavBar;