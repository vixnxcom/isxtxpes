import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { chinasa, vlogo } from "../assets";

const VideooPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const formStatus = localStorage.getItem("zohoFormCompleted") === "true";
    const videoStatus = localStorage.getItem("videooCompleted") === "true";

    setFormCompleted(formStatus);
    setShowForm(!formStatus);

    if (videoStatus) {
      setVideoCompleted(true);
      setTimeout(() => navigate("/video"), 50); // Prevents flickering  
    }
    
    setLoading(false);
  }, [navigate]);

  const handleFormCompletion = () => {
    localStorage.setItem("zohoFormCompleted", "true");
    setFormCompleted(true);
    setShowForm(false);
    window.location.reload(); // Instant effect without flickering
  };

  const handleVideoEnd = () => {
    localStorage.setItem("videooCompleted", "true");
    setVideoCompleted(true);
  };

  if (loading) return null; // Prevents flickering during state updates

  return (
    <div className="flex flex-col items-center justify-center bg-video min-h-screen text-white p-4">
      {/* Form Popup */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-video bg-opacity-75 z-50">
          <div className="py-12 px-6 max-w-3xl w-full">
            <h2 className="text-[20px] aeon-bold text-center mb-4 text-white">
              GAIN PRIVATE ACCESS TO 2025’s FASTEST CASHFLOW SHORTCUT!
            </h2>
            <h2 className="text-[16px] aeon-bold text-center mb-2 text-white">
              Make your first <span className="gold">₦1,000,000</span> fast with full assistance!
            </h2>
            <p className="noto font-normal text-white md:text-[12px] text-[14px] text-center mx-auto">
              No struggle – We guide you
            </p>
            <p className="noto font-normal text-white md:text-[12px] text-[14px] text-center mx-auto">
              No complexity – Anyone can win
            </p>
            <p className="noto font-normal text-white md:text-[12px] text-[14px] text-center mx-auto">
              Zero risk – Nothing to lose
            </p>

            <h2 className="text-[16px] aeon-bold text-center mb-4 mt-2 text-white">
              Enter your details correctly or miss out!
            </h2>

            <iframe
          src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6849059b&n=11699f74eaeef84&sD=113ef142f684905bd"
              className="w-full h-[280px]"
              title="Zoho Form"
            ></iframe>

            <p className="noto font-normal text-white md:text-[12px] text-[14px] mt-4 text-center mx-auto">
              50 Spots – 43 Already Taken!
            </p>

            <button
              className="mt-5 px-6 py-2 bg-gold text-black aeon-bold rounded-[24px] hover:bg-blue-700 transition w-full"
              onClick={handleFormCompletion}
            >
              I Have Submitted this Form
            </button>
          </div>
        </div>
      )}

      {/* Video Section */}
      {formCompleted && !showForm && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-video bg-opacity-75 z-50">
          <div className="flex flex-col gap-4">
            <img src={vlogo} alt="" className="mx-auto w-20 md:mb-2 mb-2 shadowx" />
            <h1 className="text-[24px] gold shadoww aeon-bold mx-auto text-center md:mb-2 mb-16">
              The Diamond Project
            </h1>
          </div>

          <h1 className="text-[20px] aeon-bold mb-5 p-2">Watch this Short Video</h1>

          <video
            ref={videoRef}
            className="w-[96vw] max-w-2xl rounded-lg shadow-lg"
            controls
            onEnded={handleVideoEnd}
            preload="none"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noplaybackrate"
          >
            <source src={chinasa} type="video/mp4" />
          </video>

          <p className="text-[16px] mx-auto text-center noto mb-4 mt-5 p-2">
            Webinar button only activates if you watch this complete video without skipping
          </p>

          <button
            className={`mt-4 px-6 py-2 text-[24px] aeon-bold rounded-[24px] transition-all ${
              videoCompleted ? "bg-gold text-black hover:bg-white" : "bg-gray-500 cursor-not-allowed"
            }`}
            onClick={() => navigate("/video")}
            disabled={!videoCompleted}
          >
            Proceed to Webinar
          </button>
        </div>
      )}
    </div>
  );
};

export default VideooPage;
