import React from 'react'

import styles from '../../style'
import {  green,  } from '../../assets'

const WhatsApp = () => {
  return (
    <div className={`${styles.flexCenter} flex flex-col items-center justify-center mt-5 text-center`}>
    {/* card 1 */}
    <div className= "noto text-center md:text-[14px] text-[16px] coal mt-5 mb-5 w-full tracking-wide">
   <span><img src={green} alt="" className='w-20 mx-auto mb-2' /></span>   Click button below to join
       <br /> WhatsApp group
    </div>

<button   className='mx-auto bg-gold shadowx md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
        <a
            href="https://chat.whatsapp.com/DaUXYLl8ph98EdjYcLr4XL" // Replace with your WhatsApp number
            target="_blank" className='aeon-bold'
            rel="noopener noreferrer">
         
        
        Join WhatsApp Group 
            
        </a>  
      
        </button>     
      
    </div>
  )
}

export default WhatsApp
