import React from 'react'
import WrkSteps from './WrkSteps'
import styles from '../../style'
import WrkOffer from './WrkOffer'
import WrkFree from './WrkFree'

const Works = () => {
  return (
    <div className='bg-white w-full'>

    <div className={`${styles.flexCenter} mt-40 `}>
    <div className={`${styles.boxWidth}`}>
   <WrkSteps />
   </div>
   </div>

   <div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <WrkOffer/>
</div>
</div>

<div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <WrkFree/>
</div>
</div>

   </div>
  )
}

export default Works