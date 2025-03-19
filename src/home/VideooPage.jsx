import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { chinasa } from "../assets";

const VideooPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const formStatus = localStorage.getItem("zohoFormCompleted");
    const videoStatus = localStorage.getItem("videooCompleted");

    if (formStatus === "true") {
      setFormCompleted(true);
      setShowForm(false); // Hide form if already completed
    }

    if (videoStatus === "true") {
      navigate("/video"); // Redirect if video already completed
    }
  }, [navigate]);

  const handleFormCompletion = () => {
    localStorage.setItem("zohoFormCompleted", "true");
    setFormCompleted(true);
    setShowForm(false); // Hide the form modal
  };

  const handleVideoEnd = () => {
    localStorage.setItem("videooCompleted", "true");
    setVideoCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Popup Form (Only if not completed) */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <h2 className="text-xl font-bold text-center mb-4 text-black">
              Fill Out the Form to Proceedff
            </h2>
            <iframe
     src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6849059b&n=11699f74eaeef84&sD=113ef142f684905ee"
              className="w-full h-[500px] border border-gray-300 shadow-lg"
              title="Zoho Form"
            ></iframe>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
              onClick={handleFormCompletion}
            >
              I Have Submitted the Form
            </button>
          </div>
        </div>
      )}

      {/* Video Section (Only if form is completed) */}
      {formCompleted && (
        <>
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
        </>
      )}
    </div>
  );
};

export default VideooPage;

