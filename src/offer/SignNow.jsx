import React from 'react'
import styles from '../style'
import { access, gen, grow, healthy, media, mentor, plan, travel, wealth } from '../assets'
import Time from './Time'

const SignNow = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
    
    {/* head section */}
    <div className={`${styles.heading5} blue`}>
Sign-Up Now & get these exclusive bonuses  <span className='gold'>(LIMITED-TIME OFFER!)</span>
    </div>
    <div className={`${styles.flexCenter} mx-auto p-4`}>
      <Time />
     </div>
  {/* card 4 */}
  <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] text-center bg-white rounded-[24px] borderr h-[240px]'>
            <div className=''>
                <img src={plan} alt="" className='w-20 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2 p-4 '>
              <p className={`${styles.paragraphx}`}> A 90-Day Success Plan (Your roadmap to making your first ₦1,000,000!)</p>
            </div> 
             </div>      
          </div>
          {/* card */}
  {/* card 4 */}
  <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] text-center bg-white rounded-[24px] borderr h-[240px]'>
            <div className=''>
                <img src={access} alt="" className='w-20 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2 p-4 '>
              <p className={`${styles.paragraphx}`}>Access to a Private Millionaire Mentorship Group </p>
            </div> 
             </div>      
          </div>
          {/* card */}
 
          {/* card */}
  {/* card 4 */}
  <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] text-center bg-white rounded-[24px] borderr h-[240px]'>
            <div className=''>
                <img src={mentor} alt="" className='w-20 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2 p-4 '>
              <p className={`${styles.paragraphx}`}> 1-on-1 Mastermind Mentorship & Training with the top earners
              </p>
            </div> 
             </div>      
          </div>
          {/* card */}
  {/* card 4 */}
  <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] text-center bg-white rounded-[24px] borderr h-[240px]'>
            <div className=''>
                <img src={media} alt="" className='w-20 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2 p-4 '>
              <p className={`${styles.paragraphx}`}>Social Media Scripts That Will Bring You Leads Instantly  </p>

            </div> 
             </div>      
          </div>
          {/* card */}
  {/* card 4 */}
  <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] text-center bg-white rounded-[24px] borderr h-[240px]'>
            <div className=''>
                <img src={healthy} alt="" className='w-20 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2 p-4 '>
              <p className={`${styles.paragraphx}`}>  Exclusive Access to Premium Health Products That Improve Longevity, Reverse Aging & Boost
Immunity!
 </p>

            </div> 
             </div>      
          </div>
          {/* card */}

  
  {/* card 4 */}
  <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] text-center bg-white rounded-[24px] borderr h-[240px]'>
            <div className=''>
                <img src={gen} alt="" className='w-20 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2 p-4 '>
              <p className={`${styles.paragraphx}`}> A Proven System to Build Generational Wealth—So Your Future
                 Family Can Live Free!
 </p>

            </div> 
             </div>      
          </div>
          {/* card */}
            {/* card 4 */}
  <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] text-center bg-white rounded-[24px] borderr h-[240px]'>
            <div className=''>
                <img src={travel} alt="" className='w-20 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2 p-4 '>
              <p className={`${styles.paragraphx}`}>Special Travel & Lifestyle Perks—Exclusive Discounts on Luxury Hotels, 
                Resorts & Experiences!
 </p>

            </div> 
             </div>      
          </div>
          {/* card */}
  {/* card 4 */}
  <div className='flex flex-col  mt-5 text-center justify-center items-center'>
            {/* icons */}
            <div className='w-[86vw] text-center bg-white rounded-[24px] borderr h-[240px]'>
            <div className=''>
                <img src={grow} alt="" className='w-20 mx-auto mt-5' /> 
              
            </div>
            <div className='mt-2 p-4 '>
              <p className={`${styles.paragraphx}`}>  A Life-Changing Opportunity to Impact Others & Leave a Legacy That Matters!

 </p>

            </div> 
             </div>      
          </div>
          {/* card */}
  
          <div className={`${styles.subHeadingy} mt-5`}>
          These bonuses are available for TODAY ONLY!
    </div>
</section>  )
}

export default SignNow
