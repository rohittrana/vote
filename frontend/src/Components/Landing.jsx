import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useAuth } from "../AuthContext";
export const Landing = () => {
  const { isLoggedIn, logout } = useAuth(); // Destructure from AuthContext

  return (
    <div>
      {/* Navigation Bar */}
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

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            src="./Images/vote.jpg"
            alt="Voting Image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8 bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">Make Your Vote Count</h1>
          <p className="text-lg mb-4">
            Voting is the foundation of a democratic society. Every vote matters, and your voice deserves to be heard.
          </p>
          <p className="text-lg mb-4">
            By participating in elections, you contribute to shaping the future of your community and country. Your vote is your voice.
          </p>
          <a
            href="#learn-more"
            className="text-purple-800 hover:underline mb-4"
          >
            Learn more about how you can participate
          </a>

          <hr className="my-8 border-purple-500" />

          {/* Additional Scrollable Information Section */}
          <div className="overflow-y-auto h-64 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Why Voting Matters</h2>
            <p className="mb-4">
              Voting gives you the power to influence important decisions that affect your life, such as healthcare, education, and employment. It's a civic duty and an opportunity to make your opinions count.
            </p>
            <h2 className="text-2xl font-semibold mb-4">How to Register to Vote</h2>
            <p className="mb-4">
              Registering to vote is simple. You can do it online, by mail, or in person at your local registration office. Make sure to check the deadlines and requirements in your state.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Where to Vote</h2>
            <p className="mb-4">
              On election day, you can vote at your assigned polling place or by mail. Ensure you know the location and hours of your polling place, and bring any necessary identification.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
              <Link to="/" className="hover:underline transition-all duration-200">Home</Link>
              <Link to="/about" className="hover:underline transition-all duration-200">About</Link>
              <Link to="/working" className="hover:underline transition-all duration-200">How it Works</Link>
              <Link to="/contact" className="hover:underline transition-all duration-200">Contact Us</Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col mb-6 md:mb-0 md:mr-8">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-blue-600 hover:text-blue-400 transition-colors duration-200"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-pink-600 hover:text-pink-400 transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-blue-700 hover:text-blue-500 transition-colors duration-200"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Voting Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
