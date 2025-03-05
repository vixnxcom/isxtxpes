import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../home/Home";
import Works from "../home/works/Works";
import Footer from "../home/Footer";
import Offer from "../offer/Offer";
import Giveaway from "../home/giveaway/Giveaway";
import Reg from "../registration/Reg";
import Forms from "../forms/Forms";
import VideoPage from "../VideoPage";


const ProtectedRoute = ({ element }) => {
  const videoCompleted = localStorage.getItem("videoCompleted") === "true";
  return videoCompleted ? element : <Navigate to="/video" />;
};

const Pages = () => {
  return (
    <Router>
      <div className="w-full top-20">
        <Navbar />
      </div>

      <Routes>
        <Route path="/video" element={<VideoPage />} />
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/works" element={<ProtectedRoute element={<Works />} />} />
        <Route path="/offer" element={<ProtectedRoute element={<Offer />} />} />
        <Route path="/giveaway" element={<ProtectedRoute element={<Giveaway />} />} />
        <Route path="/register" element={<ProtectedRoute element={<Forms />} />} />
      </Routes>

      <div className="bottom-0 h-[50vh] bg-blue">
        <Footer />
      </div>
    </Router>
  );
};

export default Pages;
