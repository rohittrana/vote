import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Working from "./Components/Working";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar"; 
import { AuthProvider } from "./AuthContext";
import CandidateInfo from "./Components/CandidateInfo";
import Admin from '../Pages/Admin'; // Adjust path if necessary

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Navbar stays here to be visible on all pages */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/working" element={<Working />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/candidates" element={<CandidateInfo />} />
          <Route path="/admin/*" element={<Admin />} /> {/* Admin Routes */}
          <Route path="*" element={<Landing />} /> {/* Catch-all route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
