import React from 'react'
import styles from '../../style'
import { logo, vlogo } from '../../assets'

const HeadGroup = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`} id='groups'>
    <div className='md:h-[80px]  h-[20px] '></div>
      
<div className=''>
<img src={logo} alt="" className='w-20 mx-auto mb-5'/>

<div className={`${styles.heading1} gold shadowy  `}>

       Congratulations! 
         </div>
         <div className={`${styles.heading7} shadowy blue`}>
  You have made it this far!
    </div>

    </div>
         {/* head section */}
     
       
      {/* head section */}

    </section> 
  )
}

export default HeadGroup
