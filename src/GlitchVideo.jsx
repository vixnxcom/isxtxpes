import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { chinasa } from "./assets";

const GlitchVideo = () => {
  const navigate = useNavigate();
  const [formCompleted, setFormCompleted] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);

  useEffect(() => {
    const formDone = localStorage.getItem("formCompleted") === "true";
    const videoDone = localStorage.getItem("videooCompleted") === "true"; // Use "videooCompleted" for this page

    setFormCompleted(formDone);
    setVideoCompleted(videoDone);

    if (videoDone) {
      navigate("/video"); // ✅ Redirect to /video if already completed
    }
  }, [navigate]);

  const handleFormCompletion = () => {
    localStorage.setItem("formCompleted", "true");
    setFormCompleted(true);
  };

  const handleVideoEnd = () => {
    localStorage.setItem("videooCompleted", "true"); // ✅ Use "videooCompleted" key
    setVideoCompleted(true);
    navigate("/video"); // ✅ Redirect to /video instead of /home
  };

  return (
    <div className="videoo-page">
      {!formCompleted ? (
        <div className="form-popup">
          <h2>Complete This Form Before Watching</h2>
          <iframe
        src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6849059b&n=11699f74eaeef84&sD=113ef142f684905bd"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
          <button onClick={handleFormCompletion} className="btn-submit">
            Submit & Continue
          </button>
        </div>
      ) : (
        <div className="video-container fixed inset-0">
          <video
            width="100%"
            height="auto"
            controls
            onEnded={handleVideoEnd}
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            <source src={chinasa} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default GlitchVideo;

