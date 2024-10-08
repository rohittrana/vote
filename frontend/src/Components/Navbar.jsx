import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth(); // Destructure from AuthContext

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 flex flex-wrap justify-between items-center">
      <ul className="flex flex-wrap space-x-4">
        <li className="text-white p-2 hover:bg-purple-700 rounded">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white p-2 hover:bg-purple-700 rounded">
          <Link to="/about">About</Link>
        </li>
        <li className="text-white p-2 hover:bg-purple-700 rounded">
          <Link to="/working">Working</Link>
        </li>
        <li className="text-white p-2 hover:bg-purple-700 rounded">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="text-white p-2 hover:bg-purple-700 rounded">
          <Link to="/candidates">Candidates</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded text-black"
        />

        {/* Conditionally render buttons based on login status */}
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="bg-white text-purple-800 p-2 rounded hover:bg-gray-200">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-purple-800 p-2 rounded hover:bg-gray-200">
                Signup
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="bg-white text-red-800 p-2 rounded hover:bg-gray-200"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
