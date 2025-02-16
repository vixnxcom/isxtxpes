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
              <div className='w-[50px] h-[50px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-4 text-white text-[20px] aeon-bold'>01</p>
              </div>

              <div>
              <p className={`${styles.paragraph}`}>Watch complete video</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[50px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-4 text-white text-[20px] aeon-bold'>02</p>
              </div>

              <div>
              <p className={`${styles.paragraph}`}>Click on Join Now button</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[50px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-4 text-white text-[20px] aeon-bold'>03</p>
              </div>

              <div>
              <p className={`${styles.paragraph}`}>Choose our 'Sign-Up Now' offer</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
        <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[50px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-4 text-white text-[20px] aeon-bold'>04</p>
              </div>

              <div>
              <p className={`${styles.paragraph}`}>Make Payment</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[50px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-4 text-white text-[20px] aeon-bold'>05</p>
              </div>

              <div className=''>
              <p className={`${styles.paragraph}`}>Fill out the Form</p>
              </div>   
              </div> 

              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[50px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-4 text-white text-[20px] aeon-bold'>06</p>
              </div>

              <div>
              <p className={`${styles.paragraph}`}>Click on submit button</p>
              </div>   
              </div>   
              
        {/* card 1 */}
        {/* card 1 */}
          <div className='flex flex-row gap-4 mt-2'>
              {/* icons */}
              <div className='w-[50px] h-[50px] bg-gold mx-auto rounded-[8px]'>
                <p className='p-4 text-white text-[20px] aeon-bold'>07</p>
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
