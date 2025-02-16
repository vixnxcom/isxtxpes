import React from 'react'
import styles from '../style'
import Hero from './Hero'
import Benefitx from './Benefitx'
import Steps from './Steps'
import Offer from './offer/Offer'
import Free from './offer/Free'
import Paid from './offer/Paid'

const Home = () => {
  return (
 <div className='bg-white w-full'>

 <div className={`${styles.flexCenter} `}>
 <div className={`${styles.boxWidth}`}>

   <Hero/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-40`}>
 <div className={`${styles.boxWidth}`}>

   <Benefitx/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-5`}>
 <div className={`${styles.boxWidth}`}>

   <Steps/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-5`}>
 <div className={`${styles.boxWidth}`}>

   <Offer/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-5`}>
 <div className={`${styles.boxWidth}`}>

   <Paid/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-5`}>
 <div className={`${styles.boxWidth}`}>

   <Free/>
</div>
</div>















 </div>
  )
}

export default Home