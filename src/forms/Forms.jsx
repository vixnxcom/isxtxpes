import React from 'react'
import HeadForm from './HeadForm'
import styles from '../style'
import Sample from '../pack/Sample'
import PartnerButton from '../home/PartnerButton'
import Access from '../pack/Access'
import Silver from '../pack/Silver'
import Coal from '../pack/Coal'
import Platinium from '../pack/Platinium'
import Elite from '../pack/Elite'
import ZohoForm from './Silverform'
import ZohoCampaignsForm from './Silverform'

const Forms = () => {
  return (
    <div className='bg-white w-full'>

    <div className={`${styles.flexCenter} bg-bluee  `}>
    <div className={`${styles.boxWidth}`}>
   <HeadForm />
  
   </div>
   </div>

    <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col mt-10 bg-white`}>
   
    <div className={`${styles.heading7} blue`}> Select your
    Preferred <br /> Package
    </div>
    </div> 

    <div >
  
   <ZohoForm/>
 
   </div>
 
    <div className={`${styles.flexCenter} mt-10 bg-white borderr w-[92vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Sample />
  <PartnerButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[92vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Access />
  <PartnerButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[92vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Silver/>
  <PartnerButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[92vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Coal/>
  <PartnerButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[92vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Platinium/>
  <PartnerButton />
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-5 bg-white borderr w-[92vw] mx-auto rounded-[24px]`}>
    <div className={`${styles.boxWidth}`}>
   <Elite/>
  <PartnerButton />
   </div>
   </div>


   </div>
  )
}

export default Forms
