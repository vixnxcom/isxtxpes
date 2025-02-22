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
import { video } from '../assets'
import Hook from './Hook'
import Bulletpoints from './Bulletpoints'

const Home = () => {
  return (
 <div className='bg-blue w-full'>

 <div className={`${styles.flexCenter} `}>
 <div className={`${styles.boxWidth}`}>

   <Hero/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-40`}>
 <div className={`${styles.boxWidth}`}>

   <Stats/>
   <PartnerButton />
</div>
</div>
 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Benefitx/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Hook/>
</div>
</div>

<div className={`${styles.flexCenter} mt-10`}>
 <div className=' bg-white w-[90vw]' >
  <img src={video} alt="" className='mx-auto mt-2 mb-2 p-1'/>
</div>
</div>

 <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Bulletpoints/>
</div>
</div>

 <div className={`${styles.flexCenter} mt-10 bg-bluee w-[92vw] mx-auto rounded-[24px]`}>
 <div className={`${styles.boxWidth}`}>

   <Imagine/>
</div>
</div>

 <div className={`${styles.flexCenter} mt-10 bg-bluee w-[92vw] mx-auto rounded-[24px]`}>
 <div className={`${styles.boxWidth}`}>

   <Rice/>
</div>
</div>

<div className={`${styles.flexCenter} mt-10 bg-bluee w-[92vw] mx-auto rounded-[24px]`}>
 <div className={`${styles.boxWidth}`}>

   <Crush />
</div>
</div>

 <div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <WhatIf />
   <PartnerButton />
</div>
</div>


<div className={`${styles.flexCenter} mt-10 table w-[92vw] mx-auto rounded-[24px]`}>
 <div className={`${styles.boxWidth}`}>

   <Nintydays />
</div>
</div>
<div className={`${styles.flexCenter} mt-10 tabley w-[92vw] mx-auto `}>
 <div className={`${styles.boxWidth}`}>

   <Freedom />
</div>
</div>
<div className={`${styles.flexCenter} mt-10 table w-[92vw] mx-auto rounded-[24px]`}>
 <div className={`${styles.boxWidth}`}>

   <Llegit />
</div>
</div>
<div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Recover/>
   <PartnerButton />
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
 <div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Free/>
</div>
</div>




<div className='h-[40px] '></div>










 </div>
  )
}

export default Home