import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Components/style.css';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 120, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      x: '100vw',
      transition: { ease: 'easeInOut' },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgba(255,255,255,0.8)',
      boxShadow: '0px 0px 8px rgba(0,0,0,0.2)',
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
      setSuccessMessage('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.error("Signup Error:", err.response ? err.response.data : err.message);
      setErrorMessage(err.response?.data?.message || 'Signup failed! Please try again.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-800 text-white">
      {/* Left Side (Form) */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full max-w-md p-8 bg-purple-900 rounded-lg shadow-lg">
          <motion.h2
            className="text-3xl font-semibold text-center mb-6 text-pink-400"
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            Sign Up
          </motion.h2>
          {errorMessage && <div className="text-red-400 mb-4">{errorMessage}</div>}
          {successMessage && <div className="text-green-400 mb-4">{successMessage}</div>}
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full p-2 bg-purple-800 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full p-2 bg-purple-800 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 block w-full p-2 bg-purple-800 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-200"
              variants={buttonVariants}
              whileHover="hover"
            >
              Sign Up
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
          src="/Images/votesignup.jpg"
          alt="Signup Illustration"
          className="max-w-full h-auto rounded-lg shadow-lg mr-8 transform hover:scale-105 transition-all duration-300"
        />
      </motion.div>
    </div>
  );
};

export default Signup;
