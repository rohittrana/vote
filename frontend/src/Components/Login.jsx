import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Components/style.css";
import { AuthContext } from "../AuthContext";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: "-100vw" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.2 },
  },
  exit: {
    opacity: 0,
    y: "100vw",
    transition: { ease: "easeInOut" },
  },
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      login(response.data.token);

      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/landing");
      }, 3000);
    } catch (err) {
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 text-gray-900">
      {/* Left Side (Image) */}
      <div className="flex-1 flex items-center justify-center p-8">
        <img
          src="./Images/votelogin.jpg"
          alt="Login Illustration"
          className="max-w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right Side (Form) */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full max-w-md p-8 bg-gradient-to-b from-gray-600 to-gray-500 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-100">
            Login
          </h2>
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              Login
            </button>
          </form>
          <ToastContainer />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
