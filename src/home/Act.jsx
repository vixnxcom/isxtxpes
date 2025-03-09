import React from 'react'
import styles from '../style'

const Act = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col `}>

    <div className={`${styles.heading4} text-white mx-auto  `}>
  Act Now -  <span className='gold'>(Limited time Offer)</span>
       </div>
    <div className={`${styles.heading4} mx-auto mt-2 text-white `}>
 Hurry and Secure your Success Now
       </div>

    <div className={`${styles.subHeadingy} text-white mt-2`}>
    Yes! I want my success plan NOW!
    </div>

    </section>
  )
}

export default Act
