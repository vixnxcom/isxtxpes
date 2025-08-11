import React from 'react'
import styles from '../style'
import { HashLink } from 'react-router-hash-link'


const BonusButton = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-5`}>
    <div className=''>
    <button className='mx-auto shadowx bg-blue md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <HashLink to='/giveaway#givway'
     className='aeon-bold text-white text-[20px] ' >Bonus Offer!</HashLink>
    </button>
    </div>
</div>
  )
}

export default BonusButton
