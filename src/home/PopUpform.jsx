import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopUpForm = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // ✅ If already submitted, redirect to video
    if (localStorage.getItem("formSubmitted") === "true") {
      navigate("/video", { replace: true });
    }

    // ✅ Listen for messages from Zoho form submission
    const handleMessage = (event) => {
      if (event.data === "zohoFormSubmitted") {
        localStorage.setItem("formSubmitted", "true");
        setFormSubmitted(true);
        navigate("/video");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg text-center">
        <h2 className="text-xl font-bold mb-4">Complete This Form</h2>

        {/* 🔹 Zoho Form Embed */}
        <iframe
          src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6848abb1&n=11699f74f52d466&sD=113ef142f6848abc9"
          width="100%"
          height="500px"
          frameBorder="0"
        ></iframe>

        {/* ⛔ No closing until submitted */}
        {!formSubmitted && <p className="text-red-500 mt-4">Please complete the form to proceed.</p>}
      </div>
    </div>
  );
};

export default PopUpForm;
