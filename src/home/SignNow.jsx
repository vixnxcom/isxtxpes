import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const SignNow = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-5`}>
    <div className=''>
    <button className='mx-auto bg-blue shadowx md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <HashLink to='/register#topreg'
     className='aeon-bold text-white text-[20px]' >Sign-Up Now!</HashLink>
    </button>
    </div>
</div>
  )
}
  

export default SignNow
