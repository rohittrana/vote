import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const About = () => {
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
          <li className="text-white p-2 hover:bg-purple-700 rounded">
            <Link to="/candidate">Candidates</Link> {/* New Candidate Link */}
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-8 text-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">About Us</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto animate-fade-in-up">
          We are committed to empowering voters and ensuring that every voice is heard in the democratic process.
        </p>
      </div>

      {/* Introduction Section */}
      <section className="py-12 px-8 bg-white text-gray-800 transition-colors duration-300 hover:bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in-down">Who We Are</h2>
          <p className="text-lg md:text-xl mb-6 text-center max-w-3xl mx-auto animate-fade-in-up">
            Our platform was created with the mission to make voting more accessible, transparent, and efficient. We believe that technology can be a powerful tool in promoting democracy and ensuring that every vote counts.
          </p>
          <p className="text-lg md:text-xl mb-6 text-center max-w-3xl mx-auto animate-fade-in-up">
            We are a team of dedicated professionals with expertise in technology, law, and public policy. Our goal is to provide a secure and user-friendly voting platform that meets the needs of all citizens.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12 px-8 bg-gray-100 text-gray-800 transition-colors duration-300 hover:bg-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Mission */}
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl mb-4">
              To enhance the voting process by providing a platform that is secure, transparent, and easy to use. We aim to increase voter participation and trust in the electoral system.
            </p>
          </div>
          {/* Vision */}
          <div className="md:w-1/2 animate-fade-in-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg md:text-xl mb-4">
              To be the leading platform for digital voting, recognized for its innovation, security, and commitment to democracy. We envision a world where every citizen can vote with confidence and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-8 bg-white text-gray-800 transition-colors duration-300 hover:bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in-down">Meet the Team</h2>
          <div className="flex flex-wrap justify-center items-center">
            {/* Team Member Card */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 hover:bg-gray-200 transition-all duration-300">
                {/* Image Placeholder */}
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-bold mb-2">John Doe</h4>
                <p className="text-gray-700">CEO & Founder</p>
              </div>
            </div>

            {/* Additional Team Members */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 hover:bg-gray-200 transition-all duration-300">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
                <p className="text-gray-700">CTO</p>
              </div>
            </div>

            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 hover:bg-gray-200 transition-all duration-300">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-bold mb-2">Emily Johnson</h4>
                <p className="text-gray-700">COO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Placeholder Section */}
      <section className="py-12 px-8 bg-gray-100 text-gray-800 transition-colors duration-300 hover:bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">Our Journey</h2>
          <p className="text-lg md:text-xl mb-6 animate-fade-in-up">
            From a small startup to a trusted platform used by millions, our journey has been fueled by innovation, dedication, and the support of our amazing users.
          </p>
          {/* Placeholder for Image */}
          <div className="w-full h-64 bg-gray-300 rounded-lg mx-auto transform hover:scale-105 hover:bg-gray-400 transition-all duration-300"></div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="py-12 px-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:via-pink-500 hover:to-purple-600">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto animate-fade-in-up">
          Have any questions or want to learn more about our platform? Reach out to us, and we'll be happy to help.
        </p>
        <Link to="/contact" className="bg-white text-purple-800 p-3 rounded-lg hover:bg-gray-200 inline-block transition-colors duration-300">
          Contact Us
        </Link>
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

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition-all duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition-all duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition-all duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition-all duration-200">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
