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
import ScrollTop from "../ScrollTop";
import styles from "../style";
import Account from "../forms/Account";
import ZohoForm from "../forms/Silverform";
import Sampleacct from "../sample/Sampleacct";
import Sampleform from "../sample/Sampleform";
import Accessacct from "../access/Accessacct";
import AccessForm from "../access/AccessForm";
import Silveracct from "../silver/Silveracct";
import Silverform from "../silver/Silverform";
import Goldacct from "../gold/Goldacct";
import Goldform from "../gold/Goldform";
import Platnacct from "../platinium/Platnacct";
import Eliteacct from "../elite/Eliteacct";
import Platform from "../platinium/Platform";
import Elitform from "../elite/Elitform";


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
        <Route path="/saccount" element={<ProtectedRoute element={<Sampleacct />} />} />
        <Route path="/samform" element={<ProtectedRoute element={<Sampleform />} />} />
        <Route path="/accform" element={<ProtectedRoute element={<AccessForm />} />} />
        <Route path="/asaccount" element={<ProtectedRoute element={<Accessacct />} />} />
        <Route path="/slvaccount" element={<ProtectedRoute element={<Silveracct />} />} />
        <Route path="/slvform" element={<ProtectedRoute element={<Silverform />} />} />
        <Route path="/gldaccount" element={<ProtectedRoute element={<Goldacct/>} />} />
        <Route path="/gldform" element={<ProtectedRoute element={<Goldform/>} />} />
        <Route path="/platinum" element={<ProtectedRoute element={<Platnacct/>} />} />
        <Route path="/platform" element={<ProtectedRoute element={<Platform/>} />} />
        <Route path="/elite" element={<ProtectedRoute element={<Eliteacct/>} />} />
        <Route path="/elitform" element={<ProtectedRoute element={<Elitform/>} />} />
      </Routes>
      <div className={`${styles.boxWidth} `}>
            < ScrollTop />
           </div>  

      <div className="bottom-0 h-[50vh] bg-blue">
        <Footer />
      </div>
    </Router>
  );
};

export default Pages;
