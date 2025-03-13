import React from 'react'
import styles from '../style'
import Time from './Time'

const Headsign = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`} id='countdown'>
    
    {/* head section */}
    <div className={`${styles.heading5} text-white shadoww`}>
     Sign-Up Now & get these exclusive bonuses 
      <br /><span className=' aeon-bold'>(Limited Time Offer)</span>
    </div>
    <div className={`${styles.flexCenter} mx-auto p-4`}>
      <Time />
     </div>
    </section>
  )
}

export default Headsign