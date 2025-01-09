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

// Admin Pages
import Admin from "./Pages/Admin";
// import ManageCandidates from "./Pages/ManageCandidates";
import Analytics from "./Pages/Analytics";
import Candidates from "./Pages/Candidates";
import Logs from "./Pages/Logs";
import Settings from "./Pages/Settings";
import UserManagement from "./Pages/UserManagement";
import Users from "./Pages/Users";
import Votes from "./Pages/Votes";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/working" element={<Working />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/candidates" element={<CandidateInfo />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />}>
            
            <Route path="analytics" element={<Analytics />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="logs" element={<Logs />} />
            <Route path="settings" element={<Settings />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="users" element={<Users />} />
            <Route path="votes" element={<Votes />} />
          </Route>

          {/* Catch-all Route */}
          <Route path="*" element={<Landing />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
