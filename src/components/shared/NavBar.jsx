import React, { useContext } from "react";
import { ApplicationContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { setAuthenticated } = useContext(ApplicationContext);
  const handleLogoutPress = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-700 h-20 w-screen px-5 fixed">
      <div className="flex flex-row flex-1 h-full items-center">
        <Link className="w-none flex items-center justify-center h-20 md:w-32 px-5 hover:bg-blue-500 " to="/cards">
          <span className="text-white">Cards</span>
        </Link>
        <Link className="w-none md:w-32 flex items-center justify-center h-20 px-5 hover:bg-blue-500" to="/myDeck">
          <span className="text-white">My Decks</span>
        </Link>
      </div>
      <button
        onClick={handleLogoutPress}
        className="hover:bg-gray-500 bg-blue-700 shadow px-5 py-2 rounded text-white"
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
