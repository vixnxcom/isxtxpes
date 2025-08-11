import React from 'react'
import styles from '../style'
import { homet, market } from '../assets'


const AfterVid = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

     <div className={`${styles.flexCenter} mt-10 mx-auto`}>
 <div className={`${styles.boxWidth}`}>

     
      <video src={market} className='rounded-[12px] shadoww mx-auto' controls poster={homet}>

      </video>
</div>
</div> 
    {/* head section */}
    
    <div className={`${styles.subHeading} mt-2`}>
    Great! Now that you understand the opportunity, it’s time to take action.
    </div>
    <div className={`${styles.subHeading} mt-2`}>
    Take Action Now!. <br />Start Your Journey Today
    </div>
 {/* head section */}
 </section>
  )
}

export default AfterVid
