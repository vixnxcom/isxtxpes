import React from 'react'
import styles from '../../style'
import { HashLink } from 'react-router-hash-link'

const ButtonS = () => {
  return (
    <div className={`${styles.flexCenter} flex flex-col items-center justify-center text-center `}>
      {/* card 1 */}
      <div className={`${styles.heading2} mt-5 text-white`}>
        Live Zoom Q&A sessions
      </div>

      <div className={`${styles.paragraphx} text-white mt-5`}>
        For those outside Abuja, join me on Zoom where I’ll personally break things
        down and answer all your questions!
      </div>

      {/* Booking section */}
      <div className='mt-10 mb-10 flex flex-col items-center'>
        <div className={`${styles.subHeadingy} text-white`}>
          Click below to book your session now!
        </div>
        <button className='mx-auto mt-10 border shadow bg-white md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw] flex items-center justify-center'>
          <HashLink to='/zoom#zoomm' className='aeon-bold gold text-[20px]'>
            Book Zoom
          </HashLink>
        </button>
      </div>
    </div>
  )
}

export default ButtonS
