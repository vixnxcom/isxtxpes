import React from 'react'
import styles from '../style'

import { HashLink } from 'react-router-hash-link'

const Button = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-10`}>
    <div className=''>
    <button className='mx-auto bg-goldd md:w-[24vw] md:h-[4vw] w-[60vw] shadowx rounded-[24px] h-[12vw]'>
    <HashLink to ='/works#join'
     className='aeon-bold text-black text-[20px]'>Join Now</HashLink>
    </button>
    </div>
</div>
  )
}

export default Button
