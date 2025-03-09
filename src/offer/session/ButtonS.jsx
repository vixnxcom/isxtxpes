import React from 'react'
import styles from '../../style'

const ButtonS = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-10`}>
    <div className=''>
    <button className='mx-auto borderr shadowx bg-white md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <p 
     className='aeon-bold gold text-[20px]'>Book Today</p>
    </button>
    </div>
</div>
  )
}

export default ButtonS
