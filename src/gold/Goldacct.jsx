import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from '../style';



const Goldacct = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <section className='mt-40 mb-40 bg-white borderr w-[92vw] mx-auto rounded-[24px]'>
    <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col items-center`}>
    
      {/* Head Section */}
      <div className={`${styles.heading7} coal mt-10`}>Bank Details</div>
      <div className="mx-auto">
        <p className={`${styles.subHeadingxy} tracking-wide coal mt-2 mb-2`}>
          Make payments into any of the accounts
        </p>
      </div>

      {/* Zenith Bank Details */}
      <div className={`${styles.heading7} text-lilac mt-5`}>Zenith Bank</div>
      <div className={`${styles.flexStart} flex flex-col`}>
        <p className="coal mt-2 mb-2 aeon-bold">Account Name</p>
        <p className="noto text-center xs:text-[24px] text-[20px] coal mt-2 tracking-wide">
          Alliance in Motion Global Abuja
        </p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <p className="coal mt-2 mb-2 aeon-bold">Account Number</p>
        <p className="noto text-center xs:text-[24px] text-[20px] coal mt-2 tracking-wide">
          1219490884
        </p>
      </div>
      {/* Access Bank Details */}
      <div className={`${styles.heading7} text-lilac mt-5`}>Access Bank</div>
      <div className={`${styles.flexStart} flex flex-col`}>
        <p className="coal mt-2 mb-2 aeon-bold">Account Name</p>
        <p className="noto text-center xs:text-[24px] text-[20px] coal mt-2 tracking-wide">
     Aim Global Abuja Nigeria
        </p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <p className="coal mt-2 mb-2 aeon-bold">Account Number</p>
        <p className="noto text-center xs:text-[24px] text-[20px] coal mt-2 tracking-wide">
        0686956216
        </p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <p className="coal mt-2 mb-2 aeon-bold">Account Number</p>
        <p className="noto text-center xs:text-[24px] text-[20px] coal mt-2 tracking-wide">
          1219490884
        </p>
      </div>
      {/* Access Bank Details */}
      <div className={`${styles.heading7} text-lilac mt-5`}>Amount</div>
      <div className={`${styles.flexStart} flex flex-col`}>
        <p className="coal mt-2 mb-2 aeon-bold">Account to pay</p>
        <p className="noto text-center xs:text-[24px] text-[20px] coal mt-2 tracking-wide">
        ₦330,000
        </p>
      </div>
     

      {/* Centered Button That Navigates to the Payment Form Page */}
      <div className="flex justify-center w-full mt-10">
        <button
          onClick={() => navigate('/gldform')} // Navigate to PaymentForm page
          className="px-6 py-3 mb-10 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Yes, I've Sent the Money
        </button>
      </div>
    </div>
    </section>
  );
};

export default Goldacct;
