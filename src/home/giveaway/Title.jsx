import React from 'react'
import styles from '../../style'

import Time from '../../offer/Time'

const Title = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col mx-auto`} id='givway'>
     <div className='mt-20'></div>

       
   <div className='mt-10'></div>
        {/* head section */}
        <div className={`${styles.heading5} gold`}>THE DIAMOND PROJECT EXCLUSIVE FREE GIFT! 
       
        </div>

        <div className='mx-auto mb-2'>
   <Time />
   </div>
        <div className={`${styles.heading2}`}>Unlock Your 'Millionaire Roadmap'
             & Fast-Track Guide to Your First  <span className='gold'>N1,000,000!</span>

       
        </div>
        </section>
  )
}

export default Title