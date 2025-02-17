import React from 'react'
import styles from '../style'

const PartnerButton = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-2`}>
    <div className=''>
    <button className='mx-auto bg-gold md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <p 
     className='aeon-bold text-black text-[20px]'>Become a Partner</p>
    </button>
    </div>
</div>
  )
}

export default PartnerButton