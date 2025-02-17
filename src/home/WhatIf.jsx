import React from 'react'
import styles from '../style'

const WhatIf = () => {
  return (
       
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col `}>

         <div className={`${styles.heading3} mt-5`}>
         What if I told you that between <br /> <span className='gold'>₦3 million</span> to <span className='gold'>₦15 million</span>  is just waiting to be found?
            </div>

         <div className={`${styles.subHeading} mt-2`}>
         Let's help you build a financial leverage system.
 Having a system that works for you while you sleep is the fastest way to become financially free.
 Our wealthiest partners have made over N5 Billion each over the years and they can help you achieve millionaire
 status in <span className='gold'>90 days</span> 
         </div>

         </section>
  )
}

export default WhatIf