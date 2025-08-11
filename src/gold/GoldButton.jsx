import React from 'react'

import { Link } from 'react-router-dom'
import styles from '../style'


const GoldButton = () => {
    
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-10 mb-10`}>
    <div className=''>
    <button className='mx-auto bg-blue md:w-[24vw]  md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <Link to ='/gldaccount'
     className='aeon-bold text-white text-[20px]'>Choose Gold</Link>
    </button>
    </div>
</div>
  )
}

export default GoldButton
