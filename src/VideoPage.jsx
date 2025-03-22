import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { test } from "./assets"; // Import your video file

const VideoPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling

    const completed = localStorage.getItem("videoCompleted");
    if (completed === "true") {
      navigate("/home"); // Redirect if video was already completed
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
      document.body.style.overflow = "auto"; // Re-enable scrolling
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.removeEventListener("seeking", preventSeeking);
      }
    };
  }, [navigate]);

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

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem("videoProgress", videoRef.current.currentTime);
    }
  };

  const handleVideoEnd = () => {
    localStorage.setItem("videoCompleted", "true");
    localStorage.removeItem("videoProgress");
    setVideoCompleted(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-video text-white px-4">
      <div className="w-full max-w-2xl text-center flex flex-col items-center">
        <h2 className="text-lg font-semibold noto mb-4">
          Please watch the complete video to activate Homepage
        </h2>

        {showWarning && (
          <div className="absolute top-4  bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
            ⚠️ No skipping allowed!
          </div>
        )}

        {loading ? (
          <div className="text-lg font-semibold">Loading video...</div>
        ) : (
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full rounded-lg shadow-lg"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnd}
              preload="none"
              disablePictureInPicture
              controlsList="nodownload nofullscreen noplaybackrate"
            >
              <source src={test} type="video/mp4" />
            </video>

            {/* Custom Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-md"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        )}

        <p className="text-sm mt-5 px-2 noto p-2">
          Homepage button only activates if you watch the complete Webinar without skipping
        </p>

        <button
          className={`mt-6 px-6 py-2 text-lg rounded-[24px] transition-all ${
            videoCompleted ? "bg-gold text-black hover:bg-white" : "bg-gray-500 cursor-not-allowed"
          }`}
          onClick={() => navigate("/home")}
          disabled={!videoCompleted}
        >
          Proceed to Homepage
        </button>
      </div>
    </div>
  );
};

export default VideoPage;
