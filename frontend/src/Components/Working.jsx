import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../Components/style.css";

export const Working = () => {
  return (
    <div>
      {/* Static Navigation Bar with Animation */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 flex flex-wrap justify-between items-center shadow-lg z-50 transition-all duration-300 transform hover:shadow-2xl">
        <ul className="flex flex-wrap space-x-4">
          <li className="text-white p-2 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white p-2 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105 rounded">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white p-2 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105 rounded">
            <Link to="/working">Working</Link>
          </li>
          <li className="text-white p-2 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105 rounded">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-white p-2 hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105 rounded">
            <Link to="/candidate">Candidates</Link>
          </li>
        </ul>
      </nav>

      {/* Add margin top to prevent content from hiding under the navbar */}
      <div className="mt-20"></div>

      {/* Hero Section with Animations */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-8 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-1000">How It Works</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-500">
          Learn about the process behind our voting platform and how it ensures security and transparency in every vote.
        </p>
      </div>

      {/* Step-by-Step Section with Hover Effects */}
      <section className="py-12 px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-around items-start">
            {/* Step 1 */}
            <div className="md:w-1/3 p-4 mb-8 md:mb-0 transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 1: Register</h3>
              <p className="text-lg md:text-xl mb-4">
                Sign up on our platform with your personal details. Make sure to provide accurate information for a smooth registration process.
              </p>
            </div>

            {/* Step 2 */}
            <div className="md:w-1/3 p-4 mb-8 md:mb-0 transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 2: Verify</h3>
              <p className="text-lg md:text-xl mb-4">
                After registration, verify your identity through our secure verification process. This step is crucial to ensure the integrity of each vote.
              </p>
            </div>

            {/* Step 3 */}
            <div className="md:w-1/3 p-4 transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 3: Vote</h3>
              <p className="text-lg md:text-xl mb-4">
                Once verified, you can cast your vote in any ongoing elections. Your vote will be securely recorded and counted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Transparency Section */}
      <section className="py-12 px-8 bg-gray-100 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Security and Transparency</h2>
          <p className="text-lg md:text-xl mb-6 text-center max-w-3xl mx-auto opacity-0 animate-fade-in-up">
            Our platform utilizes the latest technology to ensure that each vote is secure, anonymous, and accurately counted.
          </p>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="py-12 px-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-500">
          If you have any questions or concerns about our voting process, don't hesitate to reach out to us.
        </p>
        <a
          href="#Contact"
          className="bg-white text-purple-800 p-3 rounded-lg hover:bg-gray-200 inline-block transition-transform duration-300 transform hover:scale-105"
        >
          Contact Us
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
              <Link to="/" className="hover:underline transition-all duration-200">Home</Link>
              <Link to="/about" className="hover:underline transition-all duration-200">About</Link>
              <Link to="/working" className="hover:underline transition-all duration-200">Working</Link>
              <Link to="/candidate" className="hover:underline transition-all duration-200">Candidate</Link>
              <Link to="/contact" className="hover:underline transition-all duration-200">Contact</Link>
            </div>
          </div>

          {/* Social Media Icons with Hover Effects */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors duration-300 transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Working;
