import React from 'react'
import styles from '../style'
import PartnerButton from './PartnerButton'

const Stats = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

           {/* head section */}
           <div className={`${styles.heading3}`}>
       We're in the business of helping you grow your business
           </div>
           <div className={`${styles.subHeading} mt-2`}>
     Through Mentorship/Training, Capacity Building and Building Financial Leverage
Systems.

           </div>
        {/* head section */}

        {/* card */}
        <div className='flex flex-row gap-4'>
            
        <div className="flex flex-col box justify-center items-center mt-5 mx-2">
  <div className="text-white aeon-bold text-[24px] ">
    800,000+ 
  </div>
  <div className="text-white noto text-[24px]">
   Partners
    </div>
    </div>

        <div className="flex flex-col box justify-center items-center mt-5">
  <div className="text-white aeon-bold text-[24px]">
    8
  </div>
  <div className="text-white noto text-[24px]">
   Billionaires
    </div>
    </div>

</div>
        {/* card */}

        {/* card 2 */}
        <div className="flex flex-col boxx justify-center items-center mt-5 mx-2 ">

       <div className="text-white aeon-bold text-[24px] ">
       50,000+ 

  </div>
  <div className="text-white noto text-[24px]">
  Multi-millionaires
    </div>  

        </div>
        {/* card 2 */}
       
    </section>
  )
}

export default Stats