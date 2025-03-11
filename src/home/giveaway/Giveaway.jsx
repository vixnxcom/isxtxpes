import React from 'react'
import Title from './Title'
import styles from '../../style'
import Chance from './Chance'
import Enter from './Enter'
import Clock from './Clock'
import Details from './Details'
import Warning from './Warning'
import Step from './Step'
import Free from './Free'
import Inside from './Inside'
import FormGiveway from './FormGiveway'

const Giveaway = () => {
  return (
    <section className='bg-blue w-full'>

    <div className={`${styles.flexCenter} `}>
    <div className={`${styles.boxWidth}`}>
   <Title />
   
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-20`}>
    <div className={`${styles.boxWidth}`}>
   <Chance/>
   
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-10 bg-white w-[92vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Enter/>
   
   </div>
   </div>
    <div className={`${styles.flexCenter} p-4`}>
    <div className={`${styles.boxWidth}`}>
   
    <div className={`${styles.subHeading} mt-5`}>
          This is NOT just another opportunity… This is a step-by-step success roadmap designed for serious 
          action-takers
          ONLY.
    </div>
   </div>
   </div>
   

  

    <div className={`${styles.flexCenter} mt-10`}>
    <div className={`${styles.boxWidth}`}>
   <Details/>
   
   </div>
   </div>

    {/* <div className={`${styles.flexCenter} mt-10`}>
    <div className={`${styles.boxWidth}`}>
   <Clock/>
   
   </div>
   </div> */}
    <div className={`${styles.flexCenter} mt-20`}>
    <div className={`${styles.boxWidth}`}>
   <Warning/>
   
   </div>
   </div>
    <div className={`${styles.flexCenter}  mt-10 bg-white w-[92vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Step/>
   
   </div>
   </div>

   <div className={`${styles.flexCenter} p-4`}>
    <div className={`${styles.boxWidth}`}>
   
    <div className={`${styles.subHeading} mt-5`}>
            Act NOW & Secure Your Success Blueprint!
    </div>
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-10`}>
    <div className={`${styles.boxWidth}`}>
   <Free/>
   
   </div>
   </div>
   
    <div className={`${styles.flexCenter}  mt-10 bg-white w-[92vw] mx-auto  rounded-[24px] `}>
    <div className={`${styles.boxWidth}`}>
   <Inside/>
   
   </div>
   </div>

  

    <div className={`${styles.flexCenter} mb-5 mt-10 bg-white w-[92vw] mx-auto  rounded-[24px] `}>
    <div className={`${styles.boxWidth}`}>
   <FormGiveway/>
   
   </div>
   </div>

   <div className={`${styles.flexCenter} p-4`}>
    <div className={`${styles.boxWidth}`}>
   
    <div className={`${styles.subHeading} mt-5`}>
    Don’t Wait! This Offer Disappears Once Timer Hits Zero!

    </div>
    <div className={`${styles.subHeading} `}>
    Yes! I Want My Success <br />Plan NOW!
    </div>
   </div>
   </div>

   <div className='h-[80px] '>
</div>

   </section>
  )
}

export default Giveaway
{/* <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
<iframe frameborder="0" id="iframewin" width="100%" height="100%" 
src="https://msknovj-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecce930db&zx=1348aded9&lD=113ef142f6848086f&n=11699f74e8b501b&sD=113ef142f68484a0f">
</iframe> */}