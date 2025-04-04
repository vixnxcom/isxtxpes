import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { best, chinasa, sally, sallyt } from "./assets";
import styles from "./style";


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
             Fill Form to activate<span className="gold aeon-bold border-b-[1px]"> Homepage </span>
            </p>

            
            </div>
            {/* writings */}
           
         
          <iframe className=""
        src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6849059b&n=11699f74eaeef84&sD=113ef142f684905bd"
            width="100%"
            height="280px"
            frameBorder="0"
          ></iframe>


         <div className="h-[240px]"></div>
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
            <p className={` ${styles.paddingX} py-2 text-[16px] text-center tracking-wide noto coal `}>
          Once video is completed the Webinar <br />  automatically activates
            </p>
            <div className="h-[20px]"></div>
            </div>
            
          <video  
            width="100%"
            height="auto"
            controls
            onEnded={handleVideoEnd}
            controlsList="nodownload nofullscreen noremoteplayback"  poster={sallyt}
           className="w-full"
          >
            <source src={sally} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="text-center flex flex-col justify-center items-center bg-white min-h-[400px]">

            {/* text */}
          <p className="text-[16px]  aeon-bold text-center mb-5 mt-10 blue tracking-wide">
            How I Made  <span className="gold shadowy">₦1,000,000</span> in 30 Days with <br /> a Simple Proven Business System -Even as a <br />Complete Beginner!

            </p>
            <p className={` ${styles.paddingX} p-2 text-[16px] tracking-wide text-center noto coal mt-5`}>
           Inside This <span className="aeon-bold  blue">FREE Webinar</span>, You’ll Discover
            
            </p>
            {/* <p className="text-[16px]  noto text-center  coal flex flex-row gap-2"> */}
            <p className={`${styles.paragraph} ${styles.paddingX} text-start gap-2 flex flex-row coal mt-5`}>
         <span><img src={best} className="max-w-6 mt-2" /></span>A proven system that pays you daily even if you're busy or have
         a 9–5.
            
            </p>
            <p className={`${styles.paragraph} ${styles.paddingX} text-start gap-2 flex flex-row coal mt-2`}>
         <span><img src={best} className="max-w-6 mt-2" /></span>How to build real wealth while traveling or  working from anywhere.
            </p>
            <p className={`${styles.paragraph} ${styles.paddingX} text-start gap-2 flex flex-row coal mt-2`}>
         <span><img src={best} className="max-w-6 mt-2" /></span>Why thousands of Nigerians are already using this to escape financial struggles.
            </p>
            <p className={`${styles.paragraph} ${styles.paddingX} text-start gap-2 flex flex-row coal mt-2`}>
         <span><img src={best} className="max-w-6 mt-2" /></span>A step-by-step blueprint for getting paid daily, even while learning.

            </p>

            <p className={` ${styles.paddingX} py-2 text-[16px] tracking-wide text-center noto coal mt-5`}>
            After watching this short training, you’ll see exactly how it works and how you can start using it today.           
            </p>
            <p className={` ${styles.paddingX} py-2 text-[16px] tracking-wide text-center noto coal mt-5`}>
           No experience? No problem. If I did it, so can you!<span className="aeon-bold  blue"> Watch now</span>  and start your journey to financial freedom.           
            </p>
           {/* text */}


          <button
              className="px-6 py-2 mt-10 mb-20 text-lg aeon-bold rounded-[24px] bg-white borderr
                text-black hover:bg-white transition-all"
                  onClick={handleVideoEnd} 
                    >
              Proceed to Webinar
             </button>
     
        </div>
        </div>

   
      )}
    </div>
  );
};

export default GlitchVideo;

