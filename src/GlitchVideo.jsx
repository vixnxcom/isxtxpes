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

//   const handleFormCompletion = () => {
//     localStorage.setItem("formCompleted", "true");
//     setFormCompleted(true);
//   };

  const handleFormCompletion = () => {
    localStorage.setItem("formCompleted", "true");
    setFormCompleted(true);
    window.scrollTo(0, 0); // Scrolls to the top
  };

  const handleVideoEnd = () => {
    localStorage.setItem("videooCompleted", "true"); // ✅ Use "videooCompleted" key
    setVideoCompleted(true);
    navigate("/video"); // ✅ Redirect to /video instead of /home
  };

  return (
    <div className="videoo-page bg-video" id="sally">
      {!formCompleted ? (

        
        // form
        <div className="form-popup p-4">
            {/* writings */}
            <div className="bg-video ">
                <div className="md:h-[240px] h-[90px]"></div>
            <h2 className="text-[24px]  aeon-bold text-center mb-4 gold shadowy">
              GAIN PRIVATE ACCESS TO 2025’s FASTEST CASHFLOW SHORTCUT!
            </h2>
            <h2 className="text-[16px] mt-1 aeon-bold text-center mb-2 text-white">
              Make your first <span className="gold">₦1,000,000</span> fast with full assistance!
            </h2>
            <p className="noto mt-1 font-normal text-white md:text-[12px] text-[14px] text-center mx-auto">
              No struggle – We guide you
            </p>
            <p className="noto mt-1 font-normal text-white md:text-[12px] text-[14px] text-center mx-auto">
              No complexity – Anyone can win
            </p>
            <p className="noto font-normal text-white md:text-[12px] text-[14px] mt-1 text-center mx-auto">
              Zero risk – Nothing to lose
            </p>

            <h2 className="text-[16px] aeon-bold text-center  mt-4 text-white">
              Enter your details correctly or miss out!
            </h2> 
            <p className="noto font-normal text-white md:text-[12px] text-[14px] mt-2 text-center mx-auto">
              50 Spots – 43 Already Taken!
            </p>
            <p className="noto font-normal mb-5 text-white md:text-[12px] text-[14px] mt-2 text-center mx-auto">
             Fill Form to activate Homepage
            </p>

            
            </div>
            {/* writings */}
           
         
          <iframe
        src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6849059b&n=11699f74eaeef84&sD=113ef142f684905bd"
            width="100%"
            height="280px"
            frameBorder="0"
          ></iframe>


         <div className="h-[200px]"></div>
          <button onClick={handleFormCompletion} 
                  className="mt-40 px-6 py-2 bg-gold text-black aeon-bold rounded-[12px] hover:bg-blue-700 transition  w-full">
             I Have Submitted this Form
          </button>
          <div className="h-[80px]"></div>
        </div>
        //form



        // video
      ) : (

        <div className="video-container md:mt-40 mt-20 ">

            <div className="bg-white">

            <div className="h-[20px]"></div>
            <p className="text-[16px]  noto text-center  coal">
          Once video is completed without skipping the <br /> Webinar automatically activates
            </p>
            <div className="h-[20px]"></div>
            </div>
            
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

