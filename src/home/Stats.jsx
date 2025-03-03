import React from 'react'
import styles from '../style'
import PartnerButton from './PartnerButton'
import { billion, coins, hand, million, partner,  } from '../assets'

const Stats = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

           {/* head section */}
           <div className={`${styles.heading1} shadow`}>
           What is the Diamond Project?
           </div>
           <div className={`${styles.subHeading} mt-2`}>
           The Diamond Project is a Project that was launched to help individuals live out their true potential and become the
           ultimate version of themselves. Through Mentorship/Training, Capacity Building and Building Financial Leverage
            Systems
           </div>
        {/* head section */}
    
        {/* card */}
        <div className='mx-auto bg-white rounded-[24px] w-full   mt-10'>
        <div className='mt-5 mx-auto '>
            
        <div className="flex flex-col  justify-center items-center offlilac borderr max-w-[84vw]
         mx-auto rounded-[24px] ">
                 <div className='mb-5 mt-5'>
  <img src={partner} alt="" className='w-40' />
</div> 
  <div className="text-black aeon-bold text-[40px] ">
    800,000+ 
  </div>
  <div className="text-black noto text-[24px] mb-5">
   Partners
    </div>
    </div>

        <div className="flex flex-col  justify-center items-center mt-5 offlilac borderr max-w-[84vw] 
        mx-auto rounded-[24px] ">
        <div className='mb-5 mt-5'>
  <img src={billion} alt="" className='w-40' />
</div>

  <div className="text-black aeon-bold text-[40px]">
    8
  </div>
  <div className="text-black noto text-[24px] mb-5">
   Billionaires
    </div>
   
    
</div>
        <div className="flex flex-col  justify-center items-center mt-5 mb-5 offlilac borderr max-w-[84vw]
         mx-auto rounded-[24px] ">
<div className='mb-5 mt-5'>
  <img src={million} alt="" className='w-40' />
</div>
  <div className="text-black aeon-bold text-[40px]">
    5000+
  </div>
  <div className="text-black noto text-[24px] mb-5">
   Millionaires
    </div>
   
    
</div>
        {/* card */}

        {/* card 2 */}
        

        </div>
        </div>
      
        {/* card 2 */}
     
      
        <div className={`${styles.subHeading} shadow mt-10`}>
      
Having a system that works for you while you sleep is the fastest way to become financially free.
Our wealthiest partners have made over <span className='gold aeon-bold'> ₦5 Billion </span> 
 each over the years and they can help you achieve millionaire
status in 90 days.
        </div>
    </section>
  )
}

export default Stats