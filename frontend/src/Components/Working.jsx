import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../Components/working.css";

export const Working = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-gray-800 py-20 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          How It Works
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto animate-fade-in-up">
          Learn about the process behind our voting platform and how it ensures
          security and transparency in every vote.
        </p>
      </div>

      {/* Step-by-Step Section */}
      <section className="py-12 px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in-down">
            Our Process
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-start">
            {/* Step 1 */}
            <div className="md:w-1/3 p-4 mb-8 md:mb-0 animate-slide-in-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 1: Register</h3>
              <p className="text-lg md:text-xl mb-4">
                Sign up on our platform with your personal details. Make sure to
                provide accurate information for a smooth registration process.
              </p>
            </div>

            {/* Step 2 */}
            <div className="md:w-1/3 p-4 mb-8 md:mb-0 animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 2: Verify</h3>
              <p className="text-lg md:text-xl mb-4">
                After registration, verify your identity through our secure
                verification process. This step is crucial to ensure the
                integrity of each vote.
              </p>
            </div>

            {/* Step 3 */}
            <div className="md:w-1/3 p-4 animate-slide-in-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Step 3: Vote</h3>
              <p className="text-lg md:text-xl mb-4">
                Once verified, you can cast your vote in any ongoing elections.
                Your vote will be securely recorded and counted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Transparency Section */}
      <section className="py-12 px-8 bg-gray-200 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in-down">
            Security and Transparency
          </h2>
          <div className="text-lg md:text-xl mb-6 text-center max-w-3xl mx-auto animate-fade-in-up">
            <p>
              Our platform utilizes the latest technology to ensure that each vote
              is secure, anonymous, and accurately counted. We believe in full
              transparency, and all voting data is available for public review
              after the election.
            </p>
          </div>
          {/* New Features */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-6">
            {/* Feature 1: Stats Counter */}
            <div className="text-center animate-slide-in-left">
              <h3 className="text-4xl font-bold text-blue-600">500,000+</h3>
              <p className="text-lg mt-2">Votes Secured</p>
            </div>
            <div className="text-center animate-fade-in-up">
              <h3 className="text-4xl font-bold text-blue-600">99.99%</h3>
              <p className="text-lg mt-2">System Uptime</p>
            </div>
            <div className="text-center animate-slide-in-right">
              <h3 className="text-4xl font-bold text-blue-600">100%</h3>
              <p className="text-lg mt-2">Transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100 text-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">
          Have Questions?
        </h2>
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            <details className="bg-white border rounded-lg p-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-800">
                How is my vote secured?
              </summary>
              <p className="mt-2 text-gray-600">
                We use blockchain technology to ensure your vote is anonymous and tamper-proof.
              </p>
            </details>
            <details className="bg-white border rounded-lg p-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-800">
                Can I verify my vote after submission?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, our platform provides a unique code for you to verify your vote post-election.
              </p>
            </details>
            <details className="bg-white border rounded-lg p-4">
              <summary className="cursor-pointer text-lg font-semibold text-gray-800">
                Is the platform audited?
              </summary>
              <p className="mt-2 text-gray-600">
                Absolutely! Independent security firms audit our platform regularly.
              </p>
            </details>
          </div>
        </div>
        {/* Enhanced Call-to-Action Button */}
        <a
          href="#Contact"
          className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-transform"
        >
          Contact Us
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
              <Link
                to="/"
                className="hover:underline transition-all duration-200 animate-fade-in-left"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:underline transition-all duration-200 animate-fade-in-left"
              >
                About
              </Link>
              <Link
                to="/working"
                className="hover:underline transition-all duration-200 animate-fade-in-left"
              >
                Working
              </Link>
              <Link
                to="/contact"
                className="hover:underline transition-all duration-200 animate-fade-in-left"
              >
                Contact
              </Link>
              <Link
                to="/candidates"
                className="hover:underline transition-all duration-200"
              >
                Candidates
              </Link>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200 animate-slide-in-up"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200 animate-slide-in-up"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200 animate-slide-in-up"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition-colors duration-200 animate-slide-in-up"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <p className="text-center mt-4 animate-fade-in-up">
          &copy; 2024 SecureVote. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Working;
