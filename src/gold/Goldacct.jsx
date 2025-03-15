import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from '../style';
import { copyicon } from '../assets';


const Goldacct = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Function to copy text to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert(`Copied: ${text}`))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <section className="md:mt-40 mt-28 mb-20 bg-white borderr w-[92vw] mx-auto rounded-[24px]" id="gold">
      <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col items-center`}>
        
        {/* Head Section */}
        <div className={`${styles.heading7} coal mt-5`}>Bank Details</div>
        <div className="mx-auto">
          <p className="noto text-center xs:text-[20px] text-[16px] coal tracking-wide">
            Make payments into any of the accounts
          </p>
        </div>

        {/* Zenith Bank Details */}
        <div className={`${styles.heading7} text-lilac mt-5`}>Zenith Bank</div>
        <div className={`${styles.flexStart} flex flex-col`}>
          <p className="coal mt-2 mb-2 aeon-bold">Account Name</p>
          <p className="noto text-center xs:text-[20px] text-[16px] coal tracking-wide">
            Alliance in Motion Global Nig-Ltd
          </p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <p className="coal mt-2 mb-2 aeon-bold">Account Number</p>
          <div className="flex items-center gap-2">
            <p className="noto text-center xs:text-[20px] text-[16px] coal tracking-wide">
              1219409844
            </p>
            <button onClick={() => handleCopy("1219409844")}>
              <img src={copyicon} alt="Copy" className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </button>
          </div>
        </div>

        {/* Access Bank Details */}
        <div className={`${styles.heading7} text-lilac mt-5`}>Access Bank</div>
        <div className={`${styles.flexStart} flex flex-col`}>
          <p className="coal mt-2 mb-2 aeon-bold">Account Name</p>
          <p className="noto text-center xs:text-[20px] text-[16px] coal tracking-wide">
            Aim Global Abuja-Nigeria
          </p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <p className="coal mt-2 mb-2 aeon-bold">Account Number</p>
          <div className="flex items-center gap-2">
            <p className="noto text-center xs:text-[20px] text-[16px] coal tracking-wide">
              0689695216
            </p>
            <button onClick={() => handleCopy("0689695216")}>
              <img src={copyicon} alt="Copy" className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </button>
          </div>
        </div>

        {/* Amount Section */}
        <div className={`${styles.heading7} text-lilac mt-5`}>Amount</div>
        <div className={`${styles.flexStart} flex flex-col`}>
          <p className="coal mt-2 mb-2 aeon-bold">Account to pay</p>
          <div className="flex items-center gap-2">
            <p className="noto text-center xs:text-[20px] text-[16px] coal tracking-wide">
              ₦330,000
            </p>
            <button onClick={() => handleCopy("₦330,000")}>
              <img src={copyicon} alt="Copy" className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </button>
          </div>
        </div>

        {/* Button to Navigate to Payment Form */}
        <div className="flex justify-center w-full mb-10 mt-10">
          <button
            onClick={() => navigate('/gldform')}
            className="px-6 py-3 border-blue text-black rounded-xl shadow-lg hover:bg-gold transition duration-300"
          >
            Yes, I've Sent the Money
          </button>
        </div>
      </div>
    </section>
  );
};

export default Goldacct;
