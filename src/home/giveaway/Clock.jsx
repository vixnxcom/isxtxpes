import React from 'react'
import styles from '../../style'

const Clock = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

    {/* head section */}
    <div className={`${styles.heading1}`}>
    Don’t Wait, This Giveaway Won’t Be Around Forever!
    </div>
    <div className={`${styles.subHeading} mt-2`}>
   
By entering your details, you’re not just entering a giveaway; you’re also securing your spot to get started on your
journey to financial freedom, with guidance, mentorship, and support every step of the way.

    </div>
    <div className={`${styles.subHeading} mt-2`}>

Winners will be contacted via email, so make sure your inbox is ready!
    </div>
 </section>
  )
}

export default Clock