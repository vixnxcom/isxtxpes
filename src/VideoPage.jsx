import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { test } from "./assets";

const VideoPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem("videoCompleted");
    if (completed === "true") {
      navigate("/"); // Redirect if video was already completed
    } else {
      const lastTime = localStorage.getItem("videoProgress") || "0";
      if (videoRef.current) {
        videoRef.current.src = test; // Dynamically set video src
        videoRef.current.currentTime = parseFloat(lastTime);
        videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.addEventListener("seeking", preventSeeking);
        setVideoLoaded(true);
      }
      setLoading(false); // Hide loader once progress is restored
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.removeEventListener("seeking", preventSeeking);
      }
    };
  }, [navigate]);

  const preventSeeking = () => {
    if (videoRef.current) {
      const lastTime = parseFloat(localStorage.getItem("videoProgress") || "0");
      if (videoRef.current.currentTime > lastTime + 0.1) { // Restrict seeking ahead
        videoRef.current.currentTime = lastTime;
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 2000);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem("videoProgress", videoRef.current.currentTime);
    }
  };

  const handleVideoEnd = () => {
    localStorage.setItem("videoCompleted", "true");
    localStorage.removeItem("videoProgress"); // Reset progress after completion
    setVideoCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue text-white relative min-h-screen">
      <h1 className="text-2xl font-bold mb-4 mt-40">Watch the Video to Proceed</h1>
      <h1 className="text-[16px] mx-auto text-center noto mb-4 mt-5">
        Home Button only activates if you watch the complete video without skipping
      </h1>

      {showWarning && (
        <div className="absolute top-40 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
          ⚠️ No skipping allowed!
        </div>
      )}

      {loading ? (
        <div className="text-center text-lg font-semibold">Loading video...</div>
      ) : (
        <video
          ref={videoRef}
          className="w-full max-w-2xl rounded-lg shadow-lg"
          controls
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnd}
          preload="none"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noplaybackrate"
        >
          <source src={test} type="video/mp4" />
        </video>
      )}

      <button
        className={`mt-4 px-6 py-2 text-lg font-semibold rounded-lg transition-all ${videoCompleted ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 cursor-not-allowed"}`}
        onClick={() => navigate("/")}
        disabled={!videoCompleted}
      >
        Proceed to Homepage
      </button>
    </div>
  );
};

export default VideoPage;