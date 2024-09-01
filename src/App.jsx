import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './Components/Landing';
import About from './Components/About';
import {Signup} from './Components/Signup';
import {Login} from './Components/Login';
import {Working} from './Components/Working';
import {Contact} from './Components/Contact';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/working" element={<Working />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
