import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

const BonusButton = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-5`}>
    <div className=''>
    <button className='mx-auto bg-blue md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <Link to='/giveaway'
     className='aeon-bold text-white text-[20px]' >Bonus Offer!</Link>
    </button>
    </div>
</div>
  )
}

export default BonusButton
