import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Success = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>


    {/* head section */}
    <div className={`${styles.heading5} blue`}>
    Success stories and social proof (See real results!)
    </div>

    {/* box */}
       {/* card 5 */}
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-5 `}> 
          <div className='flex flex-col gap-4 mt-5'>
            
          <div className='w-5 mt-2'>
                <img src={tick} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black '>
           Meet Uche
            </div> 

            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-5`}> She was struggling financially and had chronic fatigue, but she took action. Now, she’s making
              ₦500,000+ per month, traveling the world, and feeling healthier than ever. What changed? She said YES.
              </p>
            </div>
          </div>
          {/* card  */}
    {/* box */}
    {/* box */}
       {/* card 5 */}
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-5 `}> 
          <div className='flex flex-col gap-4 mt-5'>
            
          <div className='w-5 mt-2'>
                <img src={tick} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black '>
           Meet Fabian
            </div> 

            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-5`}>  He started with no experience and no money. Today, he’s exploring exotic destinations, earning
online, and living the dream—all because he decided to take action.

              </p>
            </div>
          </div>
          {/* card  */}
    {/* box */}
    <div className={`${styles.subHeadingy} mt-5`}>
      You could be next!

    </div>
   </section>
  )
}

export default Success
