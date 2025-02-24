import React from 'react'
import styles from '../../style'
import { good, tick, } from '../../assets'
import SignNow from '../SignNow'

const Paid = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col table mx-auto`}>
        {/* head section */}
        <div className={`${styles.heading4} mt-5 mb-5`}>
           Sign-Up Now Offer
        </div>

        {/* head section */}
        {/* card 1 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 `}> 
          <div className='flex flex-row gap-4 mt-2'>
            
          <div className='w-5 mt-2'>
                <img src={tick} alt=""  />
            </div>

           <div className='noto text-center xs:text-[20px] text-[24px] text-black '>
            Income Potential
            </div> 

            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-2`}> Earn daily, weekly, monthly</p>
            </div>
          </div>
          {/* card  */}
        
        {/* card 2 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 `}> 
          <div className='flex flex-row gap-4 mt-2'>
            
          <div className='w-5 mt-2'>
                <img src={tick} alt=""  />
            </div>

           <div className='noto text-center xs:text-[20px] text-[24px] text-black '>
           Proven System
            </div> 

            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-2`}> Step-by-step training and mentorship
              </p>
            </div>
          </div>
          {/* card  */}
        {/* card  3*/}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 `}> 
          <div className='flex flex-row gap-4 mt-2'>
            
          <div className='w-5 mt-2'>
                <img src={tick} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black '>
           Premium Health <br /> Products
            </div> 

            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-2`}> Improve your health, reverse aging
              </p>
            </div>
          </div>
          {/* card  */}
        {/* card  4*/}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 `}> 
          <div className='flex flex-row gap-4 mt-2'>
            
          <div className='w-5 mt-2'>
                <img src={tick} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black '>
           Travel & Lifestyle
            </div> 

            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-2`}> Exclusive discounts, VIP access to resorts

              </p>
            </div>
          </div>
          {/* card  */}
        {/* card 5 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 `}> 
          <div className='flex flex-row gap-4 mt-2'>
            
          <div className='w-5 mt-2'>
                <img src={tick} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black '>
           Generational Wealth
            </div> 

            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-2`}>  Build a legacy for your children and grandchildren

              </p>
            </div>
          </div>
          {/* card  */}
        {/* card 6 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 `}> 
          <div className='flex flex-row gap-4 mt-2'>
            
          <div className='w-5 mt-2'>
                <img src={tick} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black '>
           Investment
            </div> 

            {/* icons */}
          </div>
          <div className=''>
              <p className={`${styles.paragraphx} mt-2 mb-2`}>  All these amazing offers for the 

              </p>
              <p className={`${styles.paragraphx} mt-2 mb-2`}>  Discounted rate <span className='gold aeon-bold'> ₦69,990</span>

              </p>
            </div>
          </div>
          {/* card  */}
          <div className={`${styles.flexCenter} flex flex-col`}>
          <p className={`${styles.paragraphx} mt-10 `}>
          Sign Up Now & Secure Your Future
          </p>
            <SignNow />
          </div>
        
       <div className='h-[40px]'></div>
    </section>
  )
}

export default Paid
