import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SallyVideo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const formCompleted = localStorage.getItem("zohoFormCompleted");
    if (formCompleted === "true") {
      navigate("/videoo"); // Redirect if form is already completed
    }
  }, [navigate]);

  // Attempt to detect form submission automatically (Zoho must support postMessage)
  useEffect(() => {
    const handleMessage = (event) => {
      console.log("Received event from:", event.origin);
      if (event.origin.includes("maillist-manage.com")) {
        localStorage.setItem("zohoFormCompleted", "true");
        navigate("/videoo"); // Redirect after form completion
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);

  const handleFormCompletion = () => {
    localStorage.setItem("zohoFormCompleted", "true");
    navigate("/videoo"); // Redirect manually
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black p-4">
      <h1 className="text-3xl font-bold mb-4">Fill Out the Form to Proceed</h1>
      <iframe
        src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6849059b&n=11699f74eaeef84&sD=113ef142f684905ee"
        className="w-full max-w-3xl h-[600px] border border-gray-300 shadow-lg"
        title="Zoho Form"
      ></iframe>

      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mt-4"
        onClick={handleFormCompletion}
      >
        I Have Submitted the Form
      </button>
    </div>
  );
};

export default SallyVideo;
