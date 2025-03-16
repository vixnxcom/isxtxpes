import React from 'react'
import styles from '../style'

const WhatIf = () => {
  return (
       
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col `}>

         <div className={`${styles.subHeadingy} text-white mx-auto `}>
         What if I told you that between <br /> <span className=' aeon-bold shadowy'>₦3 million </span> 
         to <span className=' aeon-bold shadowy'>₦15 million</span>  is just waiting to be found?
            </div>

         <div className={`${styles.subHeadingy} text-white mt-2`}>
       What if, in the next <span className='aeon-bold text-[24px ] shadowy'> 
         90 days </span> you could recover everything you’ve ever lost—financially, emotionally, and mentally?
         </div>

         </section>
  )
}

export default WhatIf