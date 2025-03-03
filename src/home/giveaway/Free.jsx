import React from 'react'
import styles from '../../style'
import { tick } from '../../assets'

const Free = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
    {/* head section */}
     <div className={`${styles.heading2} `}>
     100% FREE – Get Instant Access Below!
    </div>  
    <div className={`${styles.heading2}`}>
    (📌 Only Available for the Next Few Action-Takers!)

        </div>
       {/* card  */}
            {/* icons */}
        
            <div className='mx-auto mt-2 mb-2'>
                <img src={tick} alt=""  className='w-8'/>
          </div>

          <div className='mx-auto'>
              <p className={`${styles.paragraph}  mb-2`}> 
              Enter Your Details to Unlock Access Instantly
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
             Full Name, Phone Number, and Email address

              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
            <div className={`${styles.heading2} mt-20 borderr`}>
   Limited Spots Available
    </div>

    <div className={`${styles.subHeading} mt-10`}>
    Yes! I Want My Success Plan NOW! 
    </div>
    <div className={`${styles.subHeading} mt-2`}>
    🔒 100% Secure. No Spam. Just Pure Value.
    </div>
    </section>
  )
}

export default Free