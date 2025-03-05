import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Footer = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingY} flex flex-col`}>
      
         {/* logo */}
         
         <div className={`${styles.heading2} flex flex-row sm:px-16 px-6`}>
         <span><img src={tick} alt="" className='max-w-12 mr-4' /></span>  The Diamond Project
         </div>
         {/* logo */}

         <div className={`${styles.subHeadingxy} ${styles.paddingX}  mt-2 `}>
       Turn your aspirations into a reality—earn from anywhere, anytime, while making an impact that lasts forever.
       </div>
       {/* links */}
 
       {/* links */}
    </section>
  )
}

export default Footer
