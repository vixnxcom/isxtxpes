import React from 'react'
import styles from '../style'
import { five, four, one, seven, six, three, tick, two } from '../assets'
import Time from '../offer/Time'

const Bonus = () => {
  return (
    <section className={`${styles.flexCenter}  flex flex-col`}>
    {/* main text */}
           
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={one} alt=""  />
            </div>
            <div className='text-center  lilac w-[78vw]'>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
            90-Day Success Plan (A roadmap to <span className='gold aeon-bold'>₦1,000,000+</span> )
            </p>
           
            </div>
            </div>

            {/* icons */}
           <div className='flex flex-col  mt-10'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={two} alt=""  />
            </div>
            <div className='text-center  lilac w-[78vw]'>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
            Access to Millionaire Mentorship Groups Plan 
            </p>
            </div>
            </div>
            {/* icons */}

            {/* icons */}
           <div className='flex flex-col  mt-10'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={three} alt=""  />
            </div>
            <div className='text-center  lilac w-[78vw]'>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
            1-on-1 Mastermind Sessions
            </p>
        
            </div>
            </div>
            {/* icons */}

            {/* icons */}
           <div className='flex flex-col  mt-10'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={four} alt=""  />
            </div>
            <div className='text-center  lilac w-[78vw]'>
            <p className={`${styles.subHeadingy} coal mb-5`}>
           Social Media Scripts <br /> for Instant Leads
            </p>
        
            </div>
            </div>
            {/* icons */}

            {/* icons */}
           <div className='flex flex-col  mt-10'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={five} alt=""  />
            </div>
            <div className='text-center  lilac w-[78vw]'>
            <p className={`${styles.subHeadingy} coal mb-5`}>
            Travel & Lifestyle Perks
            </p>
        
            </div>
            </div>
            {/* icons */}

            {/* icons */}
           <div className='flex flex-col  mt-10'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={six} alt=""  />
            </div>
            <div className='text-center  lilac w-[78vw]'>
            <p className={`${styles.subHeadingy} coal mb-5`}>
            Premium Health Product <br /> Access

            </p>
        
            </div>
            </div>
            {/* icons */}

            {/* icons */}
           <div className='flex flex-col  mt-10'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={seven} alt=""  />
            </div> 
            <div className='text-center  lilac w-[78vw]'>
            <p className={`${styles.subHeadingy} coal mb-5`}>
          Generational Wealth <br /> Building System
            </p>
        
            </div>
            </div>
            {/* icons */}
            <div className={`${styles.subHeading} mt-10`}>
            Get Started & Claim Your Bonuses
    
          </div>
    {/* main text */}
    </section>  
  )
}

export default Bonus
