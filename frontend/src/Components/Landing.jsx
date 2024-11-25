import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./landing.css"; // Import the custom CSS file

export const Landing = () => {
  return (
    <div className="landing-page bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="hero-section relative bg-gradient-to-r from-gray-700 to-gray-500 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center py-16 px-4 md:px-8 relative z-10">
          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <img
              src="./Images/vote.jpg"
              alt="Voting"
              className="rounded-lg shadow-md mb-4"
            />



          </div>

          {/* Content */}
          <div className="md:w-1/2 w-full text-center md:text-left md:pl-8">
            <h1 className="text-5xl font-bold mb-4 leading-snug animate-fade-in-down">
              Make Your Vote <span className="text-yellow-400">Count</span>
            </h1>
            <p className="text-lg mb-6 animate-fade-in-up">
              Your vote is your voice. Participate in shaping the future with secure and accessible digital voting platforms.
            </p>
            <a
              href="#additional-info"
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-300 animate-fade-in-up"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <section id="additional-info" className="additional-info-section py-12 px-4 md:px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in-down">
            Why Voting Matters
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* First Content Block */}
            <div className="md:w-1/2 p-4 animate-slide-in-left">
              <img
                src="./Images/votetwo.jpg"
                alt="Election"
                className="rounded-lg shadow-md mb-4 w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold mb-2">Empower Democracy</h3>
              <p>
                Voting empowers individuals to influence policies and leadership. It's a fundamental right that ensures representation and accountability in governance.
              </p>
            </div>

            {/* Second Content Block */}
            <div className="md:w-1/2 p-4 animate-slide-in-right">
              <img
                src="./Images/votethree.jpg"
                alt="Participate"
                className="rounded-lg shadow-md mb-4 w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold mb-2">Increase Participation</h3>
              <p>
                Digital voting platforms make it easier for everyone to participate in elections, reducing barriers and encouraging higher voter turnout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-12 px-4 md:px-8 bg-gray-100 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in-down">
            Benefits of Online Voting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">Convenience</h3>
              <p>
                Cast your vote from anywhere, anytime, making participation effortless and accessible.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <p>
                Advanced encryption and blockchain technology ensure your vote is secure and tamper-proof.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p>
                All voting data is publicly verifiable, ensuring transparency and trust in the electoral process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
              <Link to="/" className="hover:underline transition-all duration-200">
                Home
              </Link>
              <Link to="/about" className="hover:underline transition-all duration-200">
                About
              </Link>
              <Link to="/working" className="hover:underline transition-all duration-200">
                How It Works
              </Link>
              <Link to="/contact" className="hover:underline transition-all duration-200">
                Contact
              </Link>
              <Link to="/candidates" className="hover:underline transition-all duration-200">
                Candidates
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition-colors duration-200"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <p className="text-center mt-4">&copy; {new Date().getFullYear()} SecureVote. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
