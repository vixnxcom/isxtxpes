import React from 'react'
import styles from '../style'
import { fb, flogo, ig, tick, tok, yt } from '../assets'
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
       {/* socials */}
       <div className={`${styles.subHeadingxy} ${styles.paddingX} aeon-bold mt-10 `}>
       Social Media Accounts
       </div>
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-row gap-5 mt-5`}>
  
        <div className='flex flex-col'>

        <div className="container mx-auto flex justify-center space-x-6">
        <a href="https://www.instagram.com/thediamondtribe?igsh=b29yMmdpMzVqdXFz" target="_blank" rel="noopener noreferrer" className="w-8 cursor-pointer hover:text-blue-500">
          <img src={ig} alt="" />
        </a>
        <a href="https://www.facebook.com/share/19ycdYXDuF/" target="_blank" rel="noopener noreferrer" className="w-8 cursor-pointer hover:text-blue-500">
          <img src={fb} alt="" />
        </a>
        <a href="https://www.tiktok.com/@thediamond.project?_r=1&_d=eg0h87almfbafg&sec_uid=MS4wLjABAAAABbdpj6WK5fTTf5C20SetIF9J22zHVY22YBNhoZLQRZaSnLjqsx_RmI8qKp8gGP9j&share_author_id=7470860497790026758&sharer_language=en&source=h5_m&u_code=eikk1l5j01a5jf&timestamp=1742809632&user_id=7470860497790026758&sec_user_id=MS4wLjABAAAABbdpj6WK5fTTf5C20SetIF9J22zHVY22YBNhoZLQRZaSnLjqsx_RmI8qKp8gGP9j&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7484942361207473925&share_link_id=c215abb1-29fc-4ce1-a2df-ecf8f4fff137&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" target="_blank" rel="noopener noreferrer" className="w-8 cursor-pointer hover:text-gray-400">
          <img src={tok} alt="" />
        </a>
        <a href="https://youtube.com/@thediamondprojectwithsallyanne?si=T8IOYDN31eQFwORH" target="_blank" rel="noopener noreferrer" className="w-8 cursor-pointer mb-5 hover:text-red-500">
         <img src={yt} alt="" />
        </a>
      </div>
      </div>
      </div>

       {/* socials */}
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
