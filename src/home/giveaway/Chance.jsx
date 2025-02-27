import React from 'react'
import styles from '../../style'

const Chance = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

    {/* head section */}
    <div className={`${styles.heading1}`}>
    Take Action Now & Get a Chance to WIN <span className='gold'>₦100,000!</span>  
    </div>
    <div className={`${styles.subHeading} mt-2`}>
    Yes, you read that right! When you sign up today, you stand a chance to win ₦100,000 to jumpstart your journey to
financial freedom. This is a limited-time giveaway, and only those who take action today will be in the running!
    </div>
 </section>
  )
}

export default Chance