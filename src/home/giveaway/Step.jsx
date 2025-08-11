import React from 'react'
import styles from '../../style'
import { tick } from '../../assets'

const Step = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
    {/* head section */}
    <div className={`${styles.heading2} blue mt-2 `}>
    What's in it for you?
    </div>
       {/* card  */}
            {/* icons */}
        
            <div className='mx-auto mt-2 mb-2'>
                <img src={tick} alt=""  className='w-8'/>
          </div>

          <div className='mx-auto'>
              <p className={`${styles.paragraph} coal  mb-2`}> 
              Step-by-Step Guide to Your First N1,000,000!
              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
       {/* card  */}
            {/* icons */}
        
            <div className='mx-auto mt-5 mb-2'>
                <img src={tick} alt=""  className='w-8'/>
          </div>

          <div className='mx-auto'>
              <p className={`${styles.paragraph} coal  mb-2`}> 
              100% Proven System (No Experience Needed!)

              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
       {/* card  */}
            {/* icons */}
        
            <div className='mx-auto mt-5 mb-2'>
                <img src={tick} alt=""  className='w-8'/>
          </div>

          <div className='mx-auto'>
              <p className={`${styles.paragraph} coal  mb-5`}> 
              Fast-Track Training plus Special Bonus Worth Over N500,000!


              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
  
    </section>
  )
}

export default Step