import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { test, vlogo } from "./assets"; // Import your video file

const VideoPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(true); // Show form by default

  useEffect(() => {
    const completed = localStorage.getItem("videoCompleted");
    const formSubmitted = localStorage.getItem("formSubmitted");

    if (completed === "true") {
      navigate("/");
    } else {
      const lastTime = localStorage.getItem("videoProgress") || "0";
      if (videoRef.current) {
        videoRef.current.currentTime = parseFloat(lastTime);
        videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.addEventListener("seeking", preventSeeking);
      }
      setLoading(false);
    }

    // Hide form if already submitted
    if (formSubmitted === "true") {
      setShowForm(false);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.removeEventListener("seeking", preventSeeking);
      }
    };
  }, [navigate]);

  const handleFormSubmission = () => {
    localStorage.setItem("formSubmitted", "true");
    setShowForm(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-video text-white relative min-h-screen z-60">
      <img src={vlogo} alt="" className="mx-auto max-w-16 mt-5 mb-2 shadowx" />
      <h1 className="text-[44px] gold shadoww aeon-bold mb-4 mx-auto text-center ">The Diamond Project</h1>
      <h1 className="text-2xl font-bold mb-4 mt-5">Watch the Video to Proceed</h1>
      <h1 className="text-[16px] mx-auto text-center noto mb-4 mt-5">
        Home Button only activates if you watch the complete video without skipping
      </h1>

      {loading ? (
        <div className="text-center text-lg font-semibold">Loading video...</div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="w-full max-w-2xl rounded-lg shadow-lg"
            controls
            preload="none"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noplaybackrate"
          >
            <source src={test} type="video/mp4" />
          </video>
        </>
      )}

      {/* 🔹 Show Form Popup */}
      {showForm && (
        <div className="fixed flex flex-col inset-0 flex items-center justify-center bg-video bg-opacity-50">
          <div className="flex flex-row gap-4">
          <img src={vlogo} alt="" className="mx-auto w-20  mb-10 shadowx" />
          <h1 className="text-[24px] gold shadoww aeon-bold  mx-auto text-center mb-16">The Diamond Project</h1>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="aeon-bold text-center font-bold mb-4 text-black">Be One of the lucky ones</h2>
            <iframe
src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&tD=113ef142f684807a9&sD=113ef142f6848abe1"     
              width="100%"
              height="300"
              frameBorder="0"
            ></iframe>
            <button
              onClick={handleFormSubmission}
              className="mt-4 px-6 py-2 bg-white borderr blue noto rounded-lg  text-center mx-auto hover:bg-blue-700 w-full"
            >
              I Have Already Submitted
            </button>
          </div>
        </div>
      )}

      {/* Proceed Button */}
      <button
        className={`mt-4 px-6 py-2 text-lg aeon-bold rounded-[24px] transition-all ${
          videoCompleted ? "bg-gold text-black hover:bg-white" : "bg-gray-500 cursor-not-allowed"
        }`}
        onClick={() => navigate("/")}
        disabled={!videoCompleted}
      >
        Proceed to Homepage
      </button>
    </div>
  );
};

export default VideoPage;
