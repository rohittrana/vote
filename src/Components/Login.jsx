import React from 'react';
import { motion } from 'framer-motion';
import '../Components/style.css';

export const Login = () => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      y: '100vh',
      transition: { ease: 'easeInOut' },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgba(255,255,255,0.8)',
      boxShadow: '0px 0px 8px rgba(255,255,255,0.8)',
      transition: {
        duration: 0.3,
        yoyo: Infinity, // Makes the animation loop back and forth
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 overflow-hidden">
      <div className="animated-background"></div>
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            variants={buttonVariants}
            whileHover="hover"
          >
            Login
          </motion.button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <a href="/signup" className="text-purple-600 hover:underline">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
