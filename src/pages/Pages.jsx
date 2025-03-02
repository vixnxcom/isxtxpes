import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../home/Home';
import Works from '../home/works/Works';
import Footer from '../home/Footer';
import Offer from '../offer/Offer';
import Giveaway from '../home/giveaway/Giveaway';
import Reg from '../registration/Reg';

const Pages = () => {
  return (
    <Router>
      <div className="w-full top-20">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/offer" element={<Offer />} />
        <Route exact path="/giveaway" element={<Giveaway />} />
        <Route exact path="/register" element={<Reg />} />
      </Routes>

      <div className="bottom-0 h-[50vh] bg-blue">
        <Footer />
      </div>
    </Router>
  );
};

export default Pages;
