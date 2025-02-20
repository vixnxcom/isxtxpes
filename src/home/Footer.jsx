import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Footer = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingY}`}>
      
         {/* logo */}
         
         <div className={`${styles.heading2} flex flex-row sm:px-16 px-6`}>
         <span><img src={tick} alt="" className='w-24 mr-4' /></span>  The Diamond Project
         </div>
         {/* logo */}


    </div>
  )
}

export default Footer
