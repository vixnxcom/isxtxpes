import React from 'react'
import WrkSteps from './WrkSteps'
import styles from '../../style'
import WrkOffer from './WrkOffer'
import WrkFree from './WrkFree'
import WrkPaid from './WrkPaid'
import PartnerButton from '../PartnerButton'

const Works = () => {
  return (
    <div className='bg-white w-full'>

    <div className={`${styles.flexCenter} mt-40 `}>
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
   <PartnerButton />
</div>
</div>

  <div className='h-[40px] '></div>
   </div>
  )
}

export default Works