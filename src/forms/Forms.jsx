import React from 'react'
import HeadForm from './HeadForm'
import styles from '../style'
import PartnerButton from '../home/PartnerButton'
import Coal from '../pack/Coal'

import ZohoForm from './Silverform'
import ZohoCampaignsForm from './Silverform'
import Account from './Account'

import Sample from '../sample/Sample'
import SampleButton from '../sample/Samplebutton'
import Access from '../access/Access'
import Accessbutton from '../access/Accessbutton'
import Silver from '../silver/Silver'
import SilverButton from '../silver/SilverButton'
import Gold from '../gold/Gold'
import GoldButton from '../gold/GoldButton'
import Platinium from '../platinium/Platinum'
import PlatButton from '../platinium/PlatButton'

import ElitButton from '../elite/ElitButton'
import Elite from '../elite/Elite'

const Forms = () => {
  return (
    <div className='offlilac w-full'>

    <div className={`${styles.flexCenter} bg-bluee  `} >
    <div className={`${styles.boxWidth}`}>
   <HeadForm />
  
   </div>
   </div>

    <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col mt-10 `}>
   
    <div className={`${styles.heading7} blue`}> Select your
    Preferred <br /> Package
    </div>
    </div> 

 
  
    {/* <div >
  
   <ZohoForm/>
 
   </div> */}
 
    <div className={`${styles.flexCenter} mt-10 bg-white borderr w-[90vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   < Sample/>
  <SampleButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[90vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Access />
  <Accessbutton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[90vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Silver/>
  <SilverButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[90vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Gold/>
  <GoldButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[90vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Platinium/>
  <PlatButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[90vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Elite/>
  <ElitButton />
   </div>
   </div>


   <div className='h-[80px] '>
</div>

   </div>
  )
}

export default Forms
