import React from 'react'
import { tick } from '../assets'
import styles from '../style'

const Choice = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>


    {/* head section */}
    <div className={`${styles.heading5} blue`}>
    Only a few spots left - You could be next!
    </div>
    {/* box */}
       {/* card 5 */}
        
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-row mx-auto gap-4 `}>
       <img src={tick} alt="" className='w-8 mt-10'/>
       <div className={`${styles.heading4}   mx-auto mt-6`}> <span></span>
         Choice 1
        </div>
        </div>
       
    
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 `}> 
          <div className='flex flex-row gap-4 mt-5'>
            
        
            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-5`}>  Build a legacy for your children and grandchildren

              </p>
            </div>
          </div>
          {/* card  */}
    {/* box */}
    {/* box */}
       {/* card 5 */}
        
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-row mx-auto gap-4 `}>
       <img src={tick} alt="" className='w-8 mt-10'/>
       <div className={`${styles.heading4}   mx-auto mt-6`}> <span></span>
         Choice 2
        </div>
        </div>
       
    
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 `}> 
          <div className='flex flex-row gap-4 mt-5'>
            
        
            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-5`}>  Build a legacy for your children and grandchildren

              </p>
            </div>
          </div>
          {/* card  */}
    {/* box */}
    <div className={`${styles.subHeadingy} mt-5`}>
    The right time is NOW!. Your future self will thank you for this decision!


    </div>
   </section>
  )
}

export default Choice
