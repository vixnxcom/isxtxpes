import React from 'react'
import WrkSteps from './WrkSteps'
import styles from '../../style'
import WrkOffer from './WrkOffer'
import WrkFree from './WrkFree'
import WrkPaid from './WrkPaid'
import PartnerButton from '../PartnerButton'
import Regret from '../../offer/Regret'
import GradientHome from '../GradientHome'
import { time } from '../../assets'

const Works = () => {
  return (
    <div className=' w-full'>
         
<GradientHome>
    <div className={`${styles.flexCenter}  `}>
    <div className={`${styles.boxWidth}`}>
   <WrkSteps />
   <PartnerButton />
   </div>
   </div>

   <div className={`${styles.flexCenter} mt-20`}>
 <div className={`${styles.boxWidth}`}>

   <WrkOffer/>
</div>
</div>



<div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <WrkPaid/>
</div>
</div>
<div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <WrkFree/>

</div>
</div>

<div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Regret/> 
  <PartnerButton />
  
  
 
</div>
</div> 

  <div className='h-[40px] '></div>

  </GradientHome>
   </div>
  )
}

export default Works