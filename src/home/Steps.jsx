import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Steps = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>

           {/* head section */}
           <div className={`${styles.heading2}`}>
           Simple Steps
           </div>
        {/* head section */}

        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[55px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-2 text-white text-[20px] aeon-bold mx-1'>01</p>
              </div>

              <div>
              <p className={`${styles.paragraph}`}>Watch the complete video on <br />
                 our homepage</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[55px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-2 text-white text-[20px] aeon-bold mx-1'>02</p>
              </div>

              <div>
              <p className={`${styles.paragraph} mt-2`}>Click on 'Join Now' button</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[55px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-2 text-white text-[20px] aeon-bold mx-1'>03</p>
              </div>
              <div>
              <p className={`${styles.paragraph} mt-2`}>Choose our 'Sign-Up Now' offer</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
        <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[55px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-2 text-white text-[20px] aeon-bold mx-1'>04</p>
              </div>

              <div>
              <p className={`${styles.paragraph} mt-2`}>Make Payment</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[55px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-2 text-white text-[20px] aeon-bold mx-1'>05</p>
              </div>

              <div className=''>
              <p className={`${styles.paragraph} mt-2`}>Fill out the Form</p>
              </div>   
              </div> 

              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[55px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-2 text-white text-[20px] aeon-bold mx-1'>06</p>
              </div>

              <div>
              <p className={`${styles.paragraph} mt-2`}>Click on submit button</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[55px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-2 text-white text-[20px] aeon-bold mx-1'>07</p>
              </div>
              <div>
              <p className={`${styles.paragraph}`}>Automatically get added to our 
                Telegram Channel and Whatsapp group</p>
              </div>   
              </div>   
              
        {/* card 1 */}
   </section>
  )
}

export default Steps
