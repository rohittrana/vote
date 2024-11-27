import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Components/style.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
      boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      navigate("/login"); // Redirect immediately after successful signup
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Signup failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 text-gray-900">
      {/* Left Side (Form) */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full max-w-md p-8 bg-gradient-to-b from-gray-600 to-gray-500 rounded-lg shadow-lg">
          <motion.h2
            className="text-3xl font-semibold text-center mb-6 text-gray-100"
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            Sign Up
          </motion.h2>
          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
              variants={buttonVariants}
              whileHover="hover"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Right Side (Image) */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.img
          src="./Images/votelogin.jpg"
          alt="Signup Illustration"
          className="max-w-full h-auto rounded-lg shadow-lg object-cover transform hover:scale-105 transition-all duration-300"
        />
      </motion.div>
    </div>
  );
};

export default Signup;
