import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-10`}>
    <div className=''>
    <button className='mx-auto bg-goldd md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <Link to ='/works'
     className='aeon-bold text-black text-[20px]'>Join Now</Link>
    </button>
    </div>
</div>
  )
}

export default Button
