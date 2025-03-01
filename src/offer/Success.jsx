import React from 'react'
import styles from '../style'
import { ppl, tick } from '../assets'

const Success = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>


    {/* head section */}
    <div className={`${styles.heading5} blue`}>
    Success stories and social proof (See real results!)
    </div>

    {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
          <div className='flex flex-col gap-4 mt-2'>
            
          <div className='w-12 mt-2'>
                <img src={ppl} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black mb-2'>
           Meet Uche
            </div> 

            {/* icons */}
          </div>
        
              <p className={`${styles.paragraphy} mt-2 mb-5`}> She was struggling financially and had chronic fatigue, but she took action. Now, she’s making
              ₦500,000+ per month, traveling the world, and feeling healthier than ever. What changed? She said YES.
              </p>
         
          </div>
          {/* card  */}
    {/* box */}
    {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
          <div className='flex flex-col gap-4 mt-2'>
            
          <div className='w-12 mt-2'>
                <img src={ppl} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black mb-2'>
           Meet Fabian
            </div> 

            {/* icons */}
          </div>
     
              <p className={`${styles.paragraphx} mt-2 mb-5`}>  He started with no experience and no money. Today, he’s exploring exotic destinations, earning
online, and living the dream—all because he decided to take action.

              </p>
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
