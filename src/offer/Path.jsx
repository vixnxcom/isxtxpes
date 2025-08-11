import React from 'react'
import styles from '../style'
import { diamond, shape, time } from '../assets'

const Path = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`} id='path'>
    
<div className='mt-40'></div>

    {/* head section */}
    <div className={`${styles.heading5} text-white`}>
    The Opportunity to <span className='gold'>Change Your Life</span> is Right Here, Right Now
    <div className='h-[25vw] '>
        <img src={diamond} alt="" className='' />
      </div>  
    </div>
   
    </section>
  )
}

export default Path