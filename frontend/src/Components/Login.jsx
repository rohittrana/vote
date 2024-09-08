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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Use the login function from AuthContext

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Use the login function from context
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
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Login
          </button>
        </form>
        <ToastContainer />
      </motion.div>
    </div>
  );
};

export default Login;
