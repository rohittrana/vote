import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 md:items-center w-full md:w-auto space-y-4 md:space-y-0`}
        >
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
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center space-y-4 md:space-y-0 md:space-x-4`}
        >
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
