import React from 'react'
import styles from '../style'

const You = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col `}>
    {/* head section */}
    <div className={`${styles.heading5}  text-white`}>
    What's in it for you?
    </div>
    </section>
  )
}

export default You
