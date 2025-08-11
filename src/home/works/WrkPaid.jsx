import React from 'react'
import styles from '../../style'
import { drugs, good, infinite, security, tick, upgrade,  } from '../../assets'

const WrkPaid = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col mx-auto`}>
        {/* head section */}
        <div className={`${styles.heading4} text-white`}>
           Sign-Up Today!
        </div>
        <div className={`${styles.heading4} gold`}>
       Receive full benefits
        </div>

        {/* head section */}
        {/* card 1 */}
      
           {/* card */}
                <div className='mx-auto  w-full mb-10   mt-10'>
                <div className='mt-5 mx-auto '>
                    
                <div className="flex flex-col  justify-center items-center offlilac borderr max-w-[92vw]
                 mx-auto rounded-[24px] ">
                         <div className='mb-5 mt-5'>
          <img src={infinite} alt="" className='w-40' />
        </div> 
          <div className="text-black aeon-bold text-[40px] mb-5 ">
         Infinite Income 
          </div>
           <div className="text-black noto text-[24px] mb-5">
         Stream
            </div> 
            </div>


                <div className="flex flex-col mt-5  justify-center items-center offlilac borderr max-w-[92vw]
                 mx-auto rounded-[24px] ">
                         <div className='mb-5 mt-5'>
          <img src={drugs} alt="" className='w-40' />
        </div> 
          <div className="text-black aeon-bold text-[40px] mb-5 ">
          Health 
          </div>
          <div className="text-black noto text-[24px] mb-5">
         Benefits
            </div> 
            </div>

                <div className="flex flex-col mt-5  justify-center items-center offlilac borderr max-w-[92vw]
                 mx-auto rounded-[24px] ">
                         <div className='mb-5 mt-5'>
          <img src={upgrade} alt="" className='w-40' />
        </div> 
          <div className="text-black aeon-bold text-[40px] mb-5 ">
         LifeStyle
          </div>
          <div className="text-black noto text-[24px] mb-5">
         Upgrade
            </div> 
            </div>

                <div className="flex flex-col mt-5  justify-center items-center offlilac borderr max-w-[92vw]
                 mx-auto rounded-[24px] ">
                         <div className='mb-5 mt-5'>
          <img src={security} alt="" className='w-40' />
        </div> 
          <div className="text-black aeon-bold text-[40px] mb-5 ">
       Financial 
          </div>
          <div className="text-black noto text-[24px] mb-5">
         Security
            </div> 
            </div>

            </div>
            </div>
 
     
      
      
      
        {/* <div className={`${styles.flexCenter} ${styles.paddingX}  flex flex-col  mx-auto mt-10 `}> 
         
            <div className=' mt-2 mx-auto'>
                <img src={good} alt="" className='max-w-16' />
            </div>
            <div>
              <p className={`${styles.subHeading} text-white`}>Financial Security</p>
            </div>
          
                </div> */}
    </section>
  )
}

export default WrkPaid

