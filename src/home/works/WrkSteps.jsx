import React from 'react'
import styles from '../../style'
import { tick } from '../../assets'


const WrkSteps = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>

           {/* head section */}
           <div className={`${styles.heading5} blue`}>
           How to Register
           </div>
        {/* head section */}

        {/* card 1 */}
          <div className='flex flex-col  mt-10'>
              {/* icons */}
              <div className='w-[200px] h-[160px] bg-gold mx-auto rounded-[8px] tablex'>
             <img src={tick} alt="" className='w-24 mx-auto flex' />
              </div>

              <div>
              <p className={`${styles.paragraphx} mt-2`}>Watch the complete video on 
                 our homepage. The "Join-Now" / "Become a partner" button only activates after watching the complete video</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-col  mt-5'>
              {/* icons */}
              <div className='w-[200px] h-[160px] bg-gold mx-auto rounded-[8px] tablex'>
             <img src={tick} alt="" className='w-24 mx-auto flex' />
              </div>

              <div>
              <p className={`${styles.paragraphx} mt-2`}>Click on the button. Select the Sign-Up-Now offer if you are ready to fully subscribe immediately, And the Sign-Up-later offer if you plan to subscribe in the future</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-col  mt-5'>
              {/* icons */}
              <div className='w-[200px] h-[160px] bg-gold mx-auto rounded-[8px] tablex'>
             <img src={tick} alt="" className='w-24 mx-auto flex' />
              </div>

              <div>
              <p className={`${styles.paragraphx} mt-2`}>After payment fill out the form and automatically get added to our Telegram Channel and WhatsApp Group page. 
                </p>
              </div>   
              </div>   
              
        {/* card 1 */}
       
   </section>
  )
}

export default WrkSteps
