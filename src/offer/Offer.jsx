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

const Offer = () => {
  return (
    <div className='off-white w-full'>

    <div className={`${styles.flexCenter} mt-40 `}>
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


<div className={`${styles.flexCenter} mt-10 table w-[92vw] mx-auto rounded-[24px]`}>
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

   <SignNow/>  
 
</div>
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






   </div>
  )
}

export default Offer