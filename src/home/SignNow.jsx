import React from 'react'
import styles from '../style'


const SignNow = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-10`}>
    <div className=''>
    <button className='mx-auto bg-blue md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <p 
     className='aeon-bold text-white text-[20px]'>Sign-Up Now!</p>
    </button>
    </div>
</div>
  )
}
  

export default SignNow
