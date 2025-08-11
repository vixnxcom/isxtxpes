import React from 'react'
import styles from '../../style'
import { tick } from '../../assets'

const Details = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
    {/* head section */}
    {/* <div className={`${styles.heading2} `}>
    What's in it for you?
    </div> */}
       {/* card  */}
            {/* icons */}
        
            <div className='mx-auto mt-2 mb-2'>
                <img src={tick} alt=""  className='w-8'/>
          </div>

          <div className='mx-auto'>
              <p className={`${styles.paragraph}  mb-2`}> 
             The clock is ticking, and this opportunity won’t last long! 
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
              <p className={`${styles.paragraph}  mb-2`}> 
              Enter your details now to claim your chance to change your life

              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
        
    </section>
  )
}

export default Details