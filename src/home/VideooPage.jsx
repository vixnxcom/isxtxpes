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
    <div className="flex flex-col items-center justify-center bg-video text-white p-4">
      {/* Popup Form (Only if not completed) */}
      <div className="md:h-[40px]"></div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-video bg-opacity-75 z-50">
   
          <div className="bg-white p-6  max-w-3xl w-[92vw] rounded-[24px]">

            <h2 className="text-[24px] aeon-bold text-center mb-4 blue">
            GAIN PRIVATE ACCESS TO 2025’s FASTEST CASHFLOW SHORTCUT!
            </h2>
            
            <h2 className="text-[20px] aeon-bold text-center mb-4 blue">
            Make your first <span className="gold">₦1,000,000 </span> fast with full assistance!
            </h2>
            <p className="noto font-normal coal md:text-[12px] text-[14px] text-center mx-auto"> 
             No struggle – We guide you</p>
            <p className="noto font-normal coal md:text-[12px] text-[14px] text-center mx-auto"> 
              No complexity – Anyone can win</p>
            <p className="noto font-normal coal md:text-[12px] text-[14px] text-center mx-auto"> 
          Zero risk – Nothing to lose</p>

          <h2 className="text-[20px] aeon-bold text-center mb-4 mt-4 blue">
          Enter your details correctly or miss out!
            </h2>

            <iframe
     src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6849059b&n=11699f74eaeef84&sD=113ef142f684905ee"
              className="w-full h-[280px] border "
              title="Zoho Form"
            ></iframe>

  <p className="noto font-normal coal md:text-[12px] text-[14px] text-center mx-auto"> 
  50 Spots – 43 Already Taken!</p>

         <h2 className="text-[20px] aeon-bold text-center mb-2 mt-2 blue">
           ️ Once spots are gone, this page disappears
            </h2>

            <button
              className="mt-4 px-6 py-2 bg-gold text-white rounded-[24px] hover:bg-blue-700 transition w-full"
              onClick={handleFormCompletion}
            >
              I Have Submitted this Form
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

