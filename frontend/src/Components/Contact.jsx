import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../Components/style.css';

export const Contact = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white p-2 hover:bg-purple-700 rounded">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white p-2 hover:bg-purple-700 rounded">About</Link>
          </li>
          <li>
            <Link to="/working" className="text-white p-2 hover:bg-purple-700 rounded">Working</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white p-2 hover:bg-purple-700 rounded">Contact</Link>
          </li>
          <li>
          <Link to="/candidates" className="hover:underline transition-all duration-200">Candidates</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">
          We'd love to hear from you! Please fill out the form below to reach out to us.
        </p>
      </div>

      {/* Contact Form Section */}
      <section className="py-12 px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your message"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Address and Contact Details Section */}
      <section className="py-12 px-8 bg-gray-100 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Address</h2>
          <p className="text-lg md:text-xl mb-4 text-center">
            VIT BHOPAL ,SEHORE
          </p>
          <p className="text-lg md:text-xl mb-4 text-center">
            Email: Kirti@gmail.com
          </p>
          <p className="text-lg md:text-xl mb-4 text-center">
            Phone: +91 8872241006
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Find Us Here</h2>
          <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* Placeholder for map */}
            <p className="text-center py-24 text-lg text-gray-700">
              [Map Placeholder]
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          {/* Quick Links */}
          <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
            <Link to="/" className="hover:underline transition-all duration-200">Home</Link>
            <Link to="/about" className="hover:underline transition-all duration-200">About</Link>
            <Link to="/working" className="hover:underline transition-all duration-200">Working</Link>
            <Link to="/contact" className="hover:underline transition-all duration-200">Contact</Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-blue-600 transition-colors duration-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
