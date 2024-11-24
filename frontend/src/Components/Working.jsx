import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import '../Components/style.css';

export const Working = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-gray-800 py-20 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">How It Works</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">
          Learn about the process behind our voting platform and how it ensures security and transparency in every vote.
        </p>
      </div>

      {/* Step-by-Step Section */}
      <section className="py-12 px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-around items-start">
            {/* Step 1 */}
            <div className="md:w-1/3 p-4 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 1: Register</h3>
              <p className="text-lg md:text-xl mb-4">
                Sign up on our platform with your personal details. Make sure to provide accurate information for a smooth registration process.
              </p>
            </div>

            {/* Step 2 */}
            <div className="md:w-1/3 p-4 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 2: Verify</h3>
              <p className="text-lg md:text-xl mb-4">
                After registration, verify your identity through our secure verification process. This step is crucial to ensure the integrity of each vote.
              </p>
            </div>

            {/* Step 3 */}
            <div className="md:w-1/3 p-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 3: Vote</h3>
              <p className="text-lg md:text-xl mb-4">
                Once verified, you can cast your vote in any ongoing elections. Your vote will be securely recorded and counted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Transparency Section */}
      <section className="py-12 px-8 bg-gray-200 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Security and Transparency</h2>
          <p className="text-lg md:text-xl mb-6 text-center max-w-3xl mx-auto">
            Our platform utilizes the latest technology to ensure that each vote is secure, anonymous, and accurately counted. We believe in full transparency, and all voting data is available for public review after the election.
          </p>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="py-12 px-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 text-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          If you have any questions or concerns about our voting process, don't hesitate to reach out to us.
        </p>
        <a href="#Contact" className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600 inline-block">
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
              <Link to="/contact" className="hover:underline transition-all duration-200">Contact</Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-500 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-500 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-gray-500 transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-500 transition-colors duration-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Working;
