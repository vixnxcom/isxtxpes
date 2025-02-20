import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../home/Home';
import Works from '../home/works/Works';

const Pages = () => {
  return (
    <Router>
      <div className="w-full top-20">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/works" element={<Works />} />
      </Routes>


    </Router>
  );
};

export default Pages;
