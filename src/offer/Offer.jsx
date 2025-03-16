import React from 'react'
import Imagine from '../home/Imagine'
import styles from '../style'
import Path from './Path'
import Rice from '../home/Rice'
import Crush from '../home/Crush'
import WhatIf from '../home/WhatIf'
import PartnerButton from '../home/PartnerButton'
import Nintydays from '../home/Nintydays'
import Llegit from '../home/Llegit'
import Recover from '../home/Recover'
import Legacy from './Legacy'
import Button from '../home/Button'
import Opptunity from './Opptunity'
import Get from './Get'
import Transformation from './Transformation'
import System from './System'
import SignNow from './SignNow'
import Objections from './Objections'
import Success from './Success'
import Choice from './Choice'
import Questions from './Questions'
import ButtonS from './session/ButtonS'
import Regret from './Regret'
import You from './You'
import GradientBackground from './GradientBackground'
import { time } from '../assets'
import Headsign from './Headsign'
import BonusButton from '../home/BonusButton'

const Offer = () => {
  return (
    <div className=' w-full'>
    
<GradientBackground>
    <div className={`${styles.flexCenter} `}>
    <div className={`${styles.boxWidth}`}>
   <Path />
   
   </div>
   </div>
    <div className={`${styles.flexCenter} mt-20 `}>
    <div className={`${styles.boxWidth}`}>
   <Legacy />
   <Button />
   
   </div>
   </div>


 <div className={`${styles.flexCenter} mt-20 bg-bluee w-[92vw] mx-auto rounded-[24px]`}>
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


<div className={`${styles.flexCenter} mt-20 table w-[92vw] mx-auto rounded-[24px]`}>
 <div className={`${styles.boxWidth}`}>

   <Nintydays />
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

<div className={`${styles.flexCenter} mt-20 `}>
 <div className={`${styles.boxWidth}`}>

   <Headsign/>  
 
</div>
</div> 
<div className={`${styles.flexCenter}  bg-white mt-5 w-[92vw] mx-auto rounded-[24px] `}>
 <div className={`${styles.boxWidth}`}>

   <SignNow/>  
 
</div>
</div> 

<div className={`${styles.subHeadingy} text-white mt-5`}>
          These bonuses are available for TODAY ONLY!
          <BonusButton />
    </div>

<div className={`${styles.flexCenter} mt-20 `}>
 <div className={`${styles.boxWidth}`}>

   <Opptunity/>
   
</div>
</div> 
<div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <Get/>
   <PartnerButton />
   
</div>
</div> 
<div className={`${styles.flexCenter} mt-20 `}>
 <div className={`${styles.boxWidth}`}>

   <You/>
   
   
</div>
</div> 
<div className={`${styles.flexCenter} mt-10 bg-white w-[90vw] mx-auto rounded-[24px] borderr`}>
 <div className={`${styles.boxWidth}`}>

   <Transformation />  
</div>
</div> 
<div className={`${styles.flexCenter} mt-10 `}>
 <div className={`${styles.boxWidth}`}>

   <System />  
   <PartnerButton/>  
</div>
</div> 

<div className={`${styles.flexCenter} mt-20 `}>
 <div className={`${styles.boxWidth}`}>

   <Objections/> 
   <PartnerButton /> 
 
</div>
</div> 

<div className={`${styles.flexCenter} mt-20 `}>
 <div className={`${styles.boxWidth}`}>

   <Success/> 
  
   
 
</div>
</div> 

<div className={`${styles.flexCenter} mt-10`}>
 <div className={`${styles.boxWidth}`}>

   <Choice/> 
  
 
 
</div>
</div> 



<div className={`${styles.flexCenter} mt-20`}>
 <div className={`${styles.boxWidth}`}>

   <Questions/> 
   <ButtonS/> 
  
  
 
</div>
</div> 


<div className='h-[80px] '>
</div>





</GradientBackground>
   </div>
  )
}

export default Offer