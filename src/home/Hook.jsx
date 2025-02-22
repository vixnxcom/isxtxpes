import React from 'react'
import styles from '../style'

const Hook = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

           {/* head section */}
           <div className={`${styles.heading1}`}>
           Could This Be The Opportunity You've Been Waiting For?
           </div>
           <div className={`${styles.subHeading} mt-2`}>
           A chance to build wealth, make a lasting impact, and finally take control of your lifestyle.
           </div>
        {/* head section */}
        </section>
  )
}

export default Hook
