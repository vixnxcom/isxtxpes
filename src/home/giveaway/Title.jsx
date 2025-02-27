import React from 'react'
import styles from '../../style'

import Time from '../../offer/Time'

const Title = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col mx-auto`}>
     <div className='mt-20'></div>
   <div className='mx-auto'>
   <Time />
   </div>
       
   <div className='mt-10'></div>
        {/* head section */}
        <div className={`${styles.heading5} gold`}>
        EXCLUSIVE GIVEAWAY!!!
        </div>

        <div className={`${styles.heading2}`}>
        WIN <span className='gold'>₦100,000</span>  FOR FREE!
        </div>
        </section>
  )
}

export default Title