import React from 'react';
import styles from '../../style';
import {
  cart,
  int,
  paper, 
  plans,
  tele,
  tick,
  time,
  vid,
  walle
} from '../../assets';

const WrkSteps = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`} id="join">
      <div className="h-[160px]">
        {/* <img src={hand} alt="" className=''/> */}
      </div>

      {/* Heading section */}
      <div className={`${styles.heading5} gold shadoww`}>
        How to Register & Become a Partner
      </div>
      
      <div className="md:w-[25%] w-[75%] p-2">
        <img src={time} alt="Time icon" />
      </div>

      {/* Step 1 */}
      <div className={`${styles.paragraphy} ${styles.paddingX} mt-10 coal bg-white max-w-[90vw] rounded-[24px] borderr mx-auto`}>
        <div className="w-12 mt-5">
          <img src={vid} alt="Video icon" />
        </div>
        <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Watch the complete video on our default page. The homepage will only be activated after watching the full video without skipping.
        </p>
      </div>

      {/* Step 2 */}
      <div className={`${styles.paragraphy} ${styles.paddingX} mt-5 coal bg-white max-w-[90vw] rounded-[24px] borderr mx-auto`}>
        <div className="w-12 mt-5">
          <img src={plans} alt="Plans icon" />
        </div>
        <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Click on any of the <span className="aeon-bold blue">"Become a Partner"</span> buttons on the website.
        </p>
      </div>

      {/* Step 3 */}
      <div className={`${styles.paragraphy} ${styles.paddingX} mt-5 coal bg-white max-w-[90vw] rounded-[24px] borderr mx-auto`}>
        <div className="w-12 mt-5">
          <img src={cart} alt="Cart icon" />
        </div>
        <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Select a suitable plan from our package options and make a payment.
        </p>
      </div>

      {/* Step 4 */}
      <div className={`${styles.paragraphy} ${styles.paddingX} mt-5 coal bg-white max-w-[90vw] rounded-[24px] borderr mx-auto`}>
        <div className="w-12 mt-5">
          <img src={walle} alt="Wallet icon" />
        </div>
        <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          After making a payment to any of our bank accounts, click on the <span className="aeon-bold blue">'Yes, I've sent the money'</span> button at the bottom.
        </p>
      </div>

      {/* Step 5 */}
      <div className={`${styles.paragraphy} ${styles.paddingX} mt-5 coal bg-white max-w-[90vw] rounded-[24px] borderr mx-auto`}>
        <div className="w-12 mt-5">
          <img src={int} alt="Interest form icon" />
        </div>
        <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          You will be redirected to the Interest Form. Fill out the form and upload a copy of your payment receipt.
        </p>
      </div>

      {/* Step 6 */}
      <div className={`${styles.paragraphy} ${styles.paddingX} mt-5 coal bg-white max-w-[90vw] rounded-[24px] borderr mx-auto`}>
        <div className="w-12 mt-5">
          <img src={tele} alt="Telegram icon" />
        </div>
        <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Click on the <span className="aeon-bold blue">"Submit"</span> button and wait a few seconds to be redirected to a page containing our Telegram and WhatsApp group links.
        </p>
      </div>

      {/* Step 7 */}
      <div className={`${styles.paragraphy} ${styles.paddingX} mt-5 coal bg-white max-w-[90vw] rounded-[24px] borderr mx-auto`}>
        <div className="w-12 mt-5">
          <img src={paper} alt="PDF icon" />
        </div>
        <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          A <span className='aeon-bold blue'>PDF</span> containing your registration details will be sent to your email. You can print or save it as an image on your phone.
          This serves as proof of payment and should be submitted to the WhatsApp contact provided or brought to our office if you are in Abuja.
        </p>
      </div>
    </section>
  );
};

export default WrkSteps;
