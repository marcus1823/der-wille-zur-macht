import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/contact" element={<Contact />} />

  </Routes>
);

export default AppRoutes;
