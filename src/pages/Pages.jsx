import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../home/Home";
import Works from "../home/works/Works";
import Footer from "../home/Footer";
import Offer from "../offer/Offer";
import Giveaway from "../home/giveaway/Giveaway";
import Forms from "../forms/Forms";
import VideoPage from "../VideoPage";
import ScrollTop from "../ScrollTop";
import styles from "../style";
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
import Reviews from "../home/reviews/Reviews";
import Zoom from "../offer/Zoom";
import Meetings from "../offer/Meetings";


import VideooPage from "../home/VideooPage";
import Group from "../home/groups/Group";

// Protected Route Logic
const ProtectedRoute = ({ element }) => {
  const videoCompleted = localStorage.getItem("videooCompleted") === "true";
  return videoCompleted ? element : <Navigate to="/" />;
};

const Pages = () => {
  return (
    <Router>
      <div className="w-full top-20">
        <Navbar />
      </div>

      <Routes>
        {/* Start with SallyVideo (Zoho Form) as the landing page */}
        <Route path="/" element={<VideooPage />} />

        {/* VideooPage is now shown only if the form is completed */}
        

        {/* Home and other pages are protected behind video completion */}
        <Route path="/video" element={<ProtectedRoute element={<VideoPage />} />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
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
        <Route path="/gldaccount" element={<ProtectedRoute element={<Goldacct />} />} />
        <Route path="/gldform" element={<ProtectedRoute element={<Goldform />} />} />
        <Route path="/platinum" element={<ProtectedRoute element={<Platnacct />} />} />
        <Route path="/platform" element={<ProtectedRoute element={<Platform />} />} />
        <Route path="/elite" element={<ProtectedRoute element={<Eliteacct />} />} />
        <Route path="/elitform" element={<ProtectedRoute element={<Elitform />} />} />
        <Route path="/zoom" element={<ProtectedRoute element={<Zoom />} />} />
        <Route path="/meet" element={<ProtectedRoute element={<Meetings />} />} />
        <Route path="/group" element={<ProtectedRoute element={<Group />} />} />
      </Routes>

      <div className={`${styles.boxWidth}`}>
        <ScrollTop />
      </div>  

      <div className="bottom-0 bg-blue">
        <Footer />
      </div>
    </Router>
  );
};

export default Pages;
