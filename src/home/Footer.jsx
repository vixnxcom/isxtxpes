import React from 'react'
import styles from '../style'
import { flogo, tick } from '../assets'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingY} flex flex-col z-50`}>
      
         {/* logo */}
         
         <div className={`${styles.heading2} flex flex-row gold shadoww sm:px-16 px-6`}>
         <span><img src={flogo} alt="" className='max-w-40 mr-4' /></span>  The Diamond Project
         </div> 
         {/* logo */}

         <div className={`${styles.subHeadingxy} ${styles.paddingX}  mt-2 `}>
       Turn your aspirations into a reality—earn from anywhere, anytime, while making an impact that lasts forever.
       </div>
       {/* links */}
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-row gap-5 mt-10`}>
        {/* first div */}
        <div className='flex flex-col'>
     
        <HashLink to='/home#benefits' className='royal noto tracking-wide text-[16px] mt-2'>
        The Benefits </HashLink>
      
        {/* <HashLink to='/works#join' className='text-white noto tracking-wide text-[16px] mt-2'>
         How to join </HashLink> */}
        <HashLink to='/home#opp' className='royal noto tracking-wide text-[16px] mt-2'>
        Why you need this </HashLink>
        <HashLink to='/home#reviews' className='royal noto tracking-wide text-[16px] mt-2'>
       Testimonials </HashLink>
        </div>
        {/* first div */}
        {/* first div */}
        <div className='flex flex-col'>
     
        <HashLink to='/offer#countdown' className='royal noto tracking-wide text-[16px] mt-2'>
       Limited Time offer </HashLink>
      
        {/* <HashLink to='/works#join' className='text-white noto tracking-wide text-[16px] mt-2'>
         How to join </HashLink> */}
        <HashLink to='/offer#get' className='royal noto tracking-wide text-[16px] mt-2'>
        What you get</HashLink>
        <HashLink to='/offer#pros' className='royal noto tracking-wide text-[16px] mt-2'>
      The Pros </HashLink>
      
        <HashLink to='/offer#meetings' className='royal noto tracking-wide text-[16px] mt-2'>
     Meeting sessions </HashLink>
        </div>
        {/* first div */}
       </div>
 {/* links */}
 <div className={`${styles.flexStart} ${styles.paddingX} flex flex-row gap-5 mt-10`}>
        {/* first div */}
        <div className='flex flex-col'>
     
        <HashLink to='/home#hero' className='royal noto tracking-wide text-[16px] mt-2'>
        Home </HashLink>
      
        {/* <HashLink to='/works#join' className='text-white noto tracking-wide text-[16px] mt-2'>
         How to join </HashLink> */}
        <HashLink to='/offer#path' className='royal noto tracking-wide text-[16px] mt-2'>
        Our Offer </HashLink>

        <HashLink to='/giveaway#givway' className='royal noto tracking-wide text-[16px] mt-2'>
     Our Exclusive Blueprint </HashLink>

        <HashLink to='/works#join' className='royal noto tracking-wide text-[16px] mt-2'>
      How to become a partner </HashLink>

        <HashLink to='/register#topreg' className='royal noto tracking-wide text-[16px] mt-2'>
   Register Today! </HashLink>
        </div>
        </div>
        {/* first div */}
       {/* links */}
       <div className={`${styles.subHeadingxy} ${styles.paddingX} aeon-bold mt-5 `}>
       Contact Address
       </div>
       <p className={` ${styles.paddingX} text-white noto tracking-wide text-[16px]  mt-5 `}>
        Suite 123, Bahamas Plaza, Beside Ajuji Hotel, Gudu-Apo Legislative Abuja
       </p>
       <div className={`${styles.subHeadingxy} ${styles.paddingX} aeon-bold mt-5 `}>
       Email Address
       </div>
       <p className={` ${styles.paddingX} royal noto tracking-wide text-[16px]  mt-5 `}>
        thediamondproject888@gmail.com
       </p>
         {/* foot */}
         <div className={`${styles.flexCenter} ${styles.paddingX} mt-5 text-white `}>
       <p className='aeon-bold text-[20px] mt-10 tracking-wide mb-5 '> &copy; The Diamond Project. All Rights Reserved 2025.</p>
        </div>
        
        <div className=' bg-border mx-6 md:px-8  text-white flex flex-row  mt-2 tracking-wide mb-5 '>
         
       <p className='noto text-[16px] mt-5'>Website by </p>
        <a href="https://wa.me/+2349034442458" target="_blank" className='mt-5 shadoww aeon-bold gold mx-2 cursor-pointer royal'
        rel="noopener noreferrer">vixndotcom📌 </a>
        </div>
    </section>
  )
}

export default Footer
