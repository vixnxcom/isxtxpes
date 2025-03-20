import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { test, vlogo } from "./assets"; // Import your video file

const VideoPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const completed = localStorage.getItem("videoCompleted");
    if (completed === "true") {
      navigate("/home"); // Redirect to the homepage if video was already completed
    } else {
      const lastTime = localStorage.getItem("videoProgress") || "0";
      if (videoRef.current) {
        videoRef.current.currentTime = parseFloat(lastTime);
        videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.addEventListener("seeking", preventSeeking);
      }
      setLoading(false);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.removeEventListener("seeking", preventSeeking);
      }
    };
  }, [navigate]);

  // Prevent skipping ahead
  const preventSeeking = () => {
    if (videoRef.current) {
      const lastTime = parseFloat(localStorage.getItem("videoProgress") || "0");
      if (videoRef.current.currentTime > lastTime + 0.1) {
        videoRef.current.currentTime = lastTime;
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 2000);
      }
    }
  };

  // Save video progress
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem("videoProgress", videoRef.current.currentTime);
    }
  };

  // When video ends, allow homepage access
  const handleVideoEnd = () => {
    localStorage.setItem("videoCompleted", "true");
    localStorage.removeItem("videoProgress");
    setVideoCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center md:mt-40 mt-20  bg-video text-white">

       <div className="mt-5" >
       <h2 className="text-[16px]  noto text-center mb-5 text-white">
           Please watch complete video to activate <br /> Homepage
            </h2>
         </div>


      {showWarning && (
        <div className="absolute top-0 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg
         animate-pulse">
          ⚠️ No skipping allowed!
        </div>
      )}

      {loading ? (
        <div className="text-center text-[24px] font-semibold">Loading video...</div>
      ) : (
        <>
          <video
            ref={videoRef}
             width="100%"
            height="auto"
            className="w-full max-w-2xl  shadow-lg "
            controls
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
            preload="none"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noplaybackrate"
          >
            <source src={test} type="video/mp4" />
          </video>
        </>
      )}
      <h1 className="text-[16px] mx-auto text-center noto mb-4 mt-5 p-2">
        Homepage Button only activates if you watch the complete Webinar without skipping
      </h1>

      {/* Proceed to Homepage Button */}
      <button
        className={`mt-4 px-6 py-2 text-lg aeon-bold rounded-[24px] transition-all ${
          videoCompleted ? "bg-gold text-black hover:bg-white" : "bg-gray-500 cursor-not-allowed"
        }`}
        onClick={() => navigate("/home")}
        disabled={!videoCompleted}
      >
        Proceed to Homepage
      </button>

      <div className="h-[80px]"></div>
    </div>
 
  );
};

export default VideoPage;


