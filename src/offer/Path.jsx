import React from 'react'
import styles from '../style'
import { shape, time } from '../assets'

const Path = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`} id='path'>
    <div className='h-[10vw] '>
        <img src={shape} alt="" className='mt-20' />
      </div>   
<div className='mt-40'></div>

    {/* head section */}
    <div className={`${styles.heading5} text-white`}>
    The Opportunity to <span className='gold'>Change Your Life</span> is Right Here, Right Now
  
    </div>
   
    </section>
  )
}

export default Path