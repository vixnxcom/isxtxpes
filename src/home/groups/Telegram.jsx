import React from 'react'
import styles from '../../style'

const Telegram = () => {
    return (
        <div className={`${styles.flexCenter} flex flex-col items-center mb-20 justify-center mt-5 text-center`}>
        {/* card 1 */}
        <div className= "noto text-center md:text-[14px] text-[16px] coal mt-5 mb-5 w-full tracking-wide">
           Click button below to join <br /> Telegram group
        </div>
    
    <button   className='mx-auto bg-gold shadowx md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
            <a
                href="https://wa.me/+2349154684458" // Replace with your WhatsApp number
                target="_blank" className='aeon-bold'
                rel="noopener noreferrer">
             
            
            Join Telegram Group 
                
            </a>  
          
            </button>     
          
        </div>
      )
    }

export default Telegram
