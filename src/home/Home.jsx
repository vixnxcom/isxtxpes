import React from 'react'
import styles from '../style'
import Hero from './Hero'
import Benefitx from './Benefitx'
import Steps from './Steps'
import Offer from './offer/Offer'
import Free from './offer/Free'
import Paid from './offer/Paid'
import Stats from './Stats'
import PartnerButton from './PartnerButton'
import Imagine from './Imagine'
import Rice from './Rice'
import WhatIf from './WhatIf'
import Crush from './Crush'
import Nintydays from './Nintydays'
import Llegit from './Llegit'
import Recover from './Recover'
import Freedom from './Freedom'
import { beach, hand, test, tick, video } from '../assets'
import Hook from './Hook'
import Bulletpoints from './Bulletpoints'
import Vid from './Vid'
import AfterVid from './AfterVid'
import Button from './Button'
import HeroTwo from './HeroTwo'
import Footer from './Footer'
import Build from './Build'
import Opportunity from './Opportunity'
import Doubts from './Doubts'
import Bonus from './Bonus'
import Final from './Final'
import Head from './Head'
import SuccessProof from './SuccessProof'
import Act from './Act'
import Backup from './Backup'
import GradientHome from './GradientHome'
import Reviews from './reviews/Reviews'

const Home = () => {
  return (
 <div className=' w-full'>
  <GradientHome >

 <div className={`${styles.flexCenter} bg-chess h-[99vh] `}>
 <div className={`${styles.boxWidth}`}>

   <Hero/>
   <Button />
   <div className='h-[80px]'></div>
</div>
</div>

 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <HeroTwo/>
   
</div>
</div>

 <div className={`${styles.flexCenter} mt-40`}>
 <div className={`${styles.boxWidth}`}>

   <Stats/>
   <PartnerButton />
</div>
</div>
 <div className={`${styles.flexCenter} mt-20`}>
 <div className={`${styles.boxWidth}`}>

   <Benefitx/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Hook/>
</div>
</div>

{/* <div className={`${styles.flexCenter} mt-10`}>
 <div className=' bg-white w-[90vw]' >
  <img src={video} alt="" className='mx-auto mt-2 mb-2 p-1'/>
</div>
</div> */}

 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Bulletpoints/>
</div>
</div>



 <div className={`${styles.flexCenter} mt-20 `}>
 <div className={`${styles.boxWidth}`}>

   <Build/>
</div>
</div>

<div className={`${styles.flexCenter} mt-10`}>
 <div className=' bg-white w-[90vw]' >
  <img src={beach} alt="" className='mx-auto mt-2 mb-2 p-1'/>
</div>
</div>





{/* 
<div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

  <video src={test}>

  </video>
 
</div>
</div>

<div className={`${styles.flexCenter} mt-10`}>
 <div className=' bg-white w-[90vw] h-[200px]' >
  <img src={tick} alt="" className='mx-auto mt-2 mb-2 w-8' />
</div>
</div> */}

<div className={`${styles.flexCenter} mt-5`}>
 <div className={`${styles.boxWidth}`}>

   <AfterVid/>
   <PartnerButton />
</div>
</div>
<div className={`${styles.flexCenter} mt-20`}>
 <div className={`${styles.boxWidth}`}>

   <Opportunity/>

</div>
</div> 

 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Steps/>
 
</div>
</div>
 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Offer/>
  
</div>
</div>

 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>
   <Paid/>
  
</div>
</div>


 {/* <div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Free/>
</div>
</div> */}


 <div className={`${styles.flexCenter} mt-20 mx-auto `}>
 <div className={`${styles.boxWidth}`}>

   <Doubts/>
   <PartnerButton/>
</div>
</div>

 <div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>
<Head /> 
</div>
</div>

 <div className={`${styles.flexCenter} bg-white w-[90vw] mx-auto rounded-[24px] borderr mt-5 `}>
 <div className={`${styles.boxWidth}`}>
   <Bonus/>
</div>
</div>


<div className={`${styles.flexCenter} mt-20 `}>
 <div className={`${styles.boxWidth}`}>
   <Final/>
   <PartnerButton/>
</div>
</div>

<div className={`${styles.flexCenter} mt-20 `}>
 <div className={`${styles.boxWidth}`}>
   <SuccessProof/>

</div>
</div>



<div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>
   <Act/>
   <PartnerButton/>
</div>
</div> 

<div className={`${styles.flexCenter} mt-2 `}>
 <div className={`${styles.boxWidth}`}>
        <div className=' '>
         <img src={hand} alt=" "  className='w-60 mx-auto'/>
       </div>
</div>
</div>



   <Reviews/>







<div className='h-[80px] '>
</div>









</GradientHome>
 </div>
  )
}

export default Home