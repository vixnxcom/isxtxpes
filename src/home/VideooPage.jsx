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
      setVideoCompleted(true);
      setTimeout(() => navigate("/video"), 1000); // Delayed redirect for smooth UX
    }
  }, [navigate]);

  const handleVideoEnd = () => {
    localStorage.setItem("videooCompleted", "true");
    setVideoCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="md:h-[80px]"></div>
      <h1 className="text-3xl font-bold mb-4">Watch this Short Video</h1>

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
        className={`mt-4 px-6 py-2 text-lg font-bold rounded-lg transition-all ${
          videoCompleted
            ? "bg-gold text-black hover:bg-white"
            : "bg-gray-500 cursor-not-allowed"
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
