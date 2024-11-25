import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav
      className="p-4 shadow-lg"
      style={{
        background: "linear-gradient(180deg, #F3F5F6 58%, #FFFFFF 84.5%)",
      }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-black font-extrabold text-2xl tracking-wider">
          <Link to="/">VOTEHUB</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li className="text-gray-700 font-medium hover:text-black transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition duration-300">
            <Link to="/working">Working</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-gray-700 font-medium hover:text-black transition duration-300">
            <Link to="/candidates">Candidates</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-200 hover:text-black px-4 py-2 rounded transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-black transition duration-300">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
