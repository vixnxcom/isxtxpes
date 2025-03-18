import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SallyVideo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const formCompleted = localStorage.getItem("zohoFormCompleted");

    if (formCompleted === "true") {
      navigate("/videoo"); // If the form is already completed, move to /videoo
    }
  }, [navigate]);

  const handleFormCompletion = () => {
    localStorage.setItem("zohoFormCompleted", "true");
    navigate("/videoo"); // Navigate to /videoo after form completion
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black p-4">
      <h1 className="text-3xl font-bold mb-4">Fill Out the Form to Proceed</h1>
      <iframe
        src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&tD=113ef142f684807a9&sD=113ef142f6848abe1"     
        className="w-full max-w-3xl h-[600px] border border-gray-300 shadow-lg"
        title="Zoho Form"
      ></iframe>

      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={handleFormCompletion}
      >
        I Have Submitted the Form
      </button>
    </div>
  );
};

export default SallyVideo;
