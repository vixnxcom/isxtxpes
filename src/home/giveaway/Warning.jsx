import React from 'react'
import styles from '../../style'
import Time from '../../offer/Time'

const Warning = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

    {/* head section */}
    <div className={`${styles.heading2}`}>
    Warning
    </div>
    <div className={`${styles.subHeading} mt-2`}>
    This Exclusive Offer Will Be Removed Once Timer Hits Zero!
    </div>
    <div className='mx-auto mt-5'>
   <Time />
   </div>

    <div className={`${styles.subHeading} mt-2`}>
    Offer Expires Soon – Don’t Miss Out!
    </div>
 </section>
  )
}

export default Warning
