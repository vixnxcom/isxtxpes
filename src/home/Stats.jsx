import React from 'react'
import styles from '../style'
import PartnerButton from './PartnerButton'

const Stats = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

           {/* head section */}
           <div className={`${styles.heading1}`}>
           What is the Diamond Project?
           </div>
           <div className={`${styles.subHeading} mt-2`}>
           The Diamond Project is a Project that was launched to help individuals live out their true potential and become the
           ultimate version of themselves. Through Mentorship/Training, Capacity Building and Building Financial Leverage
            Systems
           </div>
        {/* head section */}

        {/* card */}
        <div className='flex flex-row gap-5 mt-5 mx-auto mx-auto'>
            
        <div className="flex flex-col box justify-center items-center mt-5 ">
  <div className="text-black aeon-bold text-[24px] ">
    800,000+ 
  </div>
  <div className="text-black noto text-[24px]">
   Partners
    </div>
    </div>

        <div className="flex flex-col box justify-center items-center mt-5">
  <div className="text-black aeon-bold text-[24px]">
    8
  </div>
  <div className="text-black noto text-[24px]">
   Billionaires
    </div>
    </div>

</div>
        {/* card */}

        {/* card 2 */}
        <div className='mx-auto'>
        <div className="flex flex-col boxx justify-center items-center mt-5 mx-2 mb-10 ">

       <div className="text-black aeon-bold text-[24px] ">
       50,000+ 

  </div>
  <div className="text-black noto text-[24px]">
  Multi-millionaires
    </div>  
    </div>  

        </div>
        {/* card 2 */}
        <div className={`${styles.heading3} mt-5`}>
        
           </div>
        <div className={`${styles.subHeading} mt-2`}>
      
Having a system that works for you while you sleep is the fastest way to become financially free.
Our wealthiest partners have made over <span className='gold aeon-bold'> ₦5 Billion</span> 
 each over the years and they can help you achieve millionaire
status in 90 days.
        </div>
    </section>
  )
}

export default Stats