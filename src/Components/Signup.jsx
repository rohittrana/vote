import React from 'react';
import { motion } from 'framer-motion';
import '../Components/style.css'; 

export const Signup = () => {
  // Animation variants for different elements
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
      boxShadow: '0px 0px 8px rgba(255,255,255,0.8)',
      transition: {
        duration: 0.3,
        yoyo: Infinity, // Makes the animation loop back and forth
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Sign Up
        </motion.h2>
        <form>
          {/* Example form fields */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Sign Up
          </button>
          {/* Uncomment when adding social login functionality */}
          {/* <div className="flex justify-center mt-6">
            <motion.button
              onClick={signInWithGoogle}
              type="button"
              className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-colors duration-200"
              variants={buttonVariants}
              whileHover="hover"
            >
              <i className="fab fa-google mr-2"></i> Sign up with Google
            </motion.button>
            <motion.button
              onClick={signInWithFacebook}
              type="button"
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 ml-4"
              variants={buttonVariants}
              whileHover="hover"
            >
              <i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook
            </motion.button>
          </div> */}
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
