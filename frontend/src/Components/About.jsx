import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative overflow-hidden"> {/* Container with overflow hidden to keep the background inside */}
      {/* Animated Background */}
      <div className="animated-background">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 flex flex-wrap justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
        <ul className="flex flex-wrap space-x-4 animate-fade-in-down">
          <li className="text-white p-2 hover:bg-purple-700 rounded transition-transform duration-300 transform hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white p-2 hover:bg-purple-700 rounded transition-transform duration-300 transform hover:scale-105">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white p-2 hover:bg-purple-700 rounded transition-transform duration-300 transform hover:scale-105">
            <Link to="/working">Working</Link>
          </li>
          <li className="text-white p-2 hover:bg-purple-700 rounded transition-transform duration-300 transform hover:scale-105">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-white p-2 hover:bg-purple-700 rounded transition-transform duration-300 transform hover:scale-105">
            <Link to="/candidate">Candidates</Link>
          </li>
        </ul>
      </nav>

      {/* Main Container */}
      <div className="mt-16 relative z-10"> {/* Adjusted margin */}
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-8 text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            We are committed to empowering voters and ensuring that every voice is heard in the democratic process.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="py-12 px-8 bg-white text-gray-800 transition-colors duration-300 hover:bg-gray-100 animate-fade-in-up text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              Our platform was created with the mission to make voting more accessible, transparent, and efficient.
            </p>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
              We are a team of dedicated professionals with expertise in technology, law, and public policy.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-12 px-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-800 transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-300 hover:to-gray-200 animate-slide-left text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
            <div className="md:flex md:justify-center md:space-x-12">
              {/* Mission */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg md:text-xl mb-4">
                  To enhance the voting process by providing a secure, transparent, and easy-to-use platform.
                </p>
              </div>
              {/* Vision */}
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg md:text-xl mb-4">
                  To be the leading platform for digital voting, recognized for its innovation and security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 px-8 bg-white text-gray-800 transition-colors duration-300 hover:bg-gray-100 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Team</h2>
            <div className="flex flex-wrap justify-center items-center animate-fade-in">
              {['John Doe', 'Jane Smith', 'Emily Johnson'].map((name, index) => (
                <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform hover:scale-110 hover:bg-gray-200 transition-all duration-300">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <h4 className="text-xl font-bold mb-2">{name}</h4>
                    <p className="text-gray-700">
                      {index === 0 ? 'CEO & Founder' : index === 1 ? 'CTO' : 'COO'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Call to Action */}
        <section className="py-12 px-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:via-pink-500 hover:to-purple-600 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Have any questions or want to learn more about our platform? Reach out to us, and we'll be happy to help.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-800 p-3 rounded-lg hover:bg-gray-200 inline-block transition-colors duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </section>
      </div> {/* End of Main Content */}

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start animate-fade-in-up">
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

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition-all duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400 transition-all duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400 transition-all duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400 transition-all duration-200">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
