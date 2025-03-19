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
    if (formStatus === "true") {
      setFormCompleted(true);
      setShowForm(false); // Hide form if already completed
    }

    const completed = localStorage.getItem("videooCompleted");
    if (completed === "true") {
      setVideoCompleted(true);
      setTimeout(() => navigate("/video"), 1000); // Delayed redirect for smooth UX
    }
  }, [navigate]);

  // Listen for form submission from Zoho
  useEffect(() => {
    const checkFormCompletion = (event) => {
      console.log("Received event from:", event.origin);
      if (event.origin === "https://msknovj-cmpzourl.maillist-manage.com") { 
        localStorage.setItem("zohoFormCompleted", "true");
        setFormCompleted(true);
        setShowForm(false); // Hide the form
      }
    };

    window.addEventListener("message", checkFormCompletion);
    return () => window.removeEventListener("message", checkFormCompletion);
  }, []);

  const handleManualFormCompletion = () => {
    localStorage.setItem("zohoFormCompleted", "true");
    setFormCompleted(true);
    setShowForm(false);
  };

  const handleVideoEnd = () => {
    localStorage.setItem("videooCompleted", "true");
    setVideoCompleted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <h2 className="text-xl font-bold text-center mb-4 text-black">
              Fill Out the Form to Proceed
            </h2>
            <iframe
              src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6849059b&n=11699f74eaeef84&sD=113ef142f684905a9"
              className="w-full h-[400px] border border-gray-300 shadow-lg"
              title="Zoho Form"
            ></iframe>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
              onClick={handleManualFormCompletion}
            >
              I Have Submitted the Form
            </button>
          </div>
        </div>
      )}

      {/* Video Section */}
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