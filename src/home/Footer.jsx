import React from 'react'
import styles from '../style'
import { flogo, tick } from '../assets'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingY} flex flex-col`}>
      
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
     
        <HashLink to='/#benefits' className='royal noto tracking-wide text-[16px] mt-2'>
        The Benefits </HashLink>
      
        {/* <HashLink to='/works#join' className='text-white noto tracking-wide text-[16px] mt-2'>
         How to join </HashLink> */}
        <HashLink to='/#opp' className='royal noto tracking-wide text-[16px] mt-2'>
        Why you need this </HashLink>
        <HashLink to='/#reviews' className='royal noto tracking-wide text-[16px] mt-2'>
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
     
        <Link to='/' className='royal noto tracking-wide text-[16px] mt-2'>
        Home </Link>
      
        {/* <HashLink to='/works#join' className='text-white noto tracking-wide text-[16px] mt-2'>
         How to join </HashLink> */}
        <Link to='/offer' className='royal noto tracking-wide text-[16px] mt-2'>
        Our Offer </Link>
        <Link to='/giveaway' className='royal noto tracking-wide text-[16px] mt-2'>
     Our Exclusive Giveaway </Link>
        <Link to='/works' className='royal noto tracking-wide text-[16px] mt-2'>
      How to become a partner </Link>
        <Link to='/register' className='royal noto tracking-wide text-[16px] mt-2'>
   Register Today! </Link>
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
       <p className='aeon-bold text-[20px] mt-10 tracking-wide mb-5 '> &copy; The Diamond Project. All Rights Reserved 2024.</p>
        </div>
        
        <div className=' bg-border mx-6  text-white flex flex-row  mt-2 tracking-wide mb-5 '>
         
       <p className='noto text-[16px] mt-5'>Developed by </p>
        <a href="https://read.cv/vixndotcom" target="_blank" className='mt-4 text-[20px] mx-2 cursor-pointer royal'
        rel="noopener noreferrer">Vixndotcom📌 </a>
        </div>
    </section>
  )
}

export default Footer
