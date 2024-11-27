import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#c4c2c1] text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">About Us</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto animate-fade-in-up">
          We are a group of passionate students striving to make voting more accessible, secure, and efficient for everyone.
        </p>
      </div>

      {/* Introduction Section */}
      <section className="py-12 px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in-down">Who We Are</h2>
          <p className="text-lg md:text-xl mb-6 text-center max-w-3xl mx-auto animate-fade-in-up">
            We are a team of students dedicated to leveraging technology for societal impact. Our mission is to create a user-friendly and secure voting platform for modern democracies.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12 px-8 bg-gray-100 text-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl mb-4">
              To create innovative solutions that simplify voting processes, ensuring accessibility and trust for all users.
            </p>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg md:text-xl mb-4">
              To empower citizens worldwide with secure digital voting tools that uphold democratic values and inclusivity.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in-down">Meet the Team</h2>
          <div className="flex flex-wrap justify-center items-center">
            {/* Student 1 */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 hover:bg-gray-200 transition-all duration-300">
                <img
                  src="/images/student1.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mx-auto object-cover mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Rohit Rana</h4>
                <p className="text-gray-700">Frontend Developer</p>
                <p className="text-gray-600 mt-2">
                  Passionate about crafting beautiful and responsive user interfaces for seamless user experiences.
                </p>
              </div>
            </div>

            {/* Student 2 */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 hover:bg-gray-200 transition-all duration-300">
                <img
                  src="/images/student2.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mx-auto object-cover mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Kirti Jirati</h4>
                <p className="text-gray-700">Backend Developer</p>
                <p className="text-gray-600 mt-2">
                  Ensures secure and efficient data handling for a smooth voting experience.
                </p>
              </div>
            </div>

            {/* Student 3 */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 hover:bg-gray-200 transition-all duration-300">
                <img
                  src="/images/student3.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mx-auto object-cover mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Ayush Sharma</h4>
                <p className="text-gray-700">Blockchain Enthusiast</p>
                <p className="text-gray-600 mt-2">
                  Exploring innovative blockchain technologies to ensure transparency in digital voting.
                </p>
              </div>
            </div>

            {/* Student 4 */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 hover:bg-gray-200 transition-all duration-300">
                <img
                  src="/images/student4.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mx-auto object-cover mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Pookie Baba </h4>
                <p className="text-gray-700">UI/UX Designer</p>
                <p className="text-gray-600 mt-2">
                  Designs intuitive user flows and engaging visuals for the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-12 px-8 bg-[#e7e6ea] text-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto animate-fade-in-up">
          Have any questions or want to learn more about our platform? Reach out to us, and we'll be happy to help.
        </p>
        <Link
          to="/contact"
          className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 inline-block transition-colors duration-300"
        >
          Contact Us
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
              <Link to="/" className="hover:underline transition-all duration-200">
                Home
              </Link>
              <Link to="/about" className="hover:underline transition-all duration-200">
                About
              </Link>
              <Link to="/working" className="hover:underline transition-all duration-200">
                Working
              </Link>
              <Link to="/contact" className="hover:underline transition-all duration-200">
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
            <a href="#" className="hover:text-blue-500 transition-colors duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors duration-200">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <p className="text-center mt-4">&copy; 2024 SecureVote. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
