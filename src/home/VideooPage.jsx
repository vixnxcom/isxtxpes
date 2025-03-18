import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { chinasa } from "../assets";

const VideooPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoCompleted, setVideoCompleted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem("videooCompleted");
    if (completed === "true") {
      navigate("/video"); // If videoo is already completed, move to /video
    }
  }, [navigate]);

  const handleVideoEnd = () => {
    localStorage.setItem("videooCompleted", "true");
    setVideoCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">

         <div className="flex flex-col mt-20">
             <img src={vlogo} alt="" className="mx-auto w-20 h-18  mb-10 shadowx" />
             <h1 className="text-[24px] gold shadoww aeon-bold  mx-auto text-center mb-16">The Diamond Project</h1>
             </div>
       <h1 className="text-2xl font-bold mb-4 mt-5">Watch the Video to Proceed</h1>
      <h1 className="text-[16px] mx-auto text-center noto mb-4 mt-5">
        Webinar only activates if you watch the complete video without skipping </h1>

      <video
        ref={videoRef}
        className="w-full max-w-2xl rounded-lg shadow-lg"
        controls
        onEnded={handleVideoEnd}
        preload="none"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate"
      >
        <source src={chinasa} type="video/mp4" />
      </video>

      <button
        className={`mt-4 px-6 py-2 text-lg aeon-bold rounded-[24px] transition-all ${
          videoCompleted ? "bg-gold text-black hover:bg-white" : "bg-gray-500 cursor-not-allowed"
        }`}
        onClick={() => navigate("/video")}
        disabled={!videoCompleted}
      >
        Proceed to Webinar
      </button>
    </div>
  );
};

export default VideooPage;
