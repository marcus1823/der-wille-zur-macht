import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />

  </Routes>
);

export default AppRoutes;
