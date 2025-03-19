import React from 'react'
import styles from '../style'
import { five, four, one, seven, six, three, tick, two } from '../assets'
import Time from '../offer/Time'
import BonusButton from './BonusButton'

const Bonus = () => {
  return (
    <section className={`${styles.flexCenter}  flex flex-col`}>
    {/* main text */}
           
     
           <div className='flex flex-col mx-auto  mt-10 bg-white  lilac  w-[80vw] rounded-[24px]'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto  mt-5 mb-2'>
                <img src={one} alt=""  />
            </div>
            <div className='text-center '>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
            90-Day Success Plan (A roadmap to <span className='gold aeon-bold shadowy'>₦1,000,000+</span> )
            </p>
           
            </div>
            </div>

            {/* icons */}
          
            <div className='flex flex-col mx-auto  mt-10 bg-white  lilac  w-[80vw] rounded-[24px]'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto  mt-5 mb-2'>
                <img src={two} alt=""  />
            </div>
            <div className='text-center '>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
            Access to Millionaire Mentorship Groups Plan 
            </p>
            </div>
            </div>
            {/* icons */}

            {/* icons */}
            
            <div className='flex flex-col mx-auto  mt-10 bg-white  lilac  w-[80vw] rounded-[24px]'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto  mt-5 mb-2'>
                <img src={three} alt=""  />
            </div>
            <div className='text-center '>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
            1-on-1 Mastermind <br /> Sessions
            </p>
        
            </div>
            </div>
            {/* icons */}

            {/* icons */}
            
            <div className='flex flex-col mx-auto  mt-10 bg-white  lilac  w-[80vw] rounded-[24px]'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto  mt-5 mb-2'>
                <img src={four} alt=""  />
            </div>
            <div className='text-center '>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
           Social Media Scripts <br /> for Instant Leads
            </p>
        
            </div>
            </div>
            {/* icons */}

            {/* icons */}
            
            <div className='flex flex-col mx-auto  mt-10 bg-white  lilac  w-[80vw] rounded-[24px]'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto  mt-5 mb-2'>
                <img src={five} alt=""  />
            </div>
            <div className='text-center '>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
            Travel & Lifestyle <br />  Perks
            </p>
        
            </div>
            </div>
            {/* icons */}

            {/* icons */}
           
            <div className='flex flex-col mx-auto  mt-10 bg-white  lilac  w-[80vw] rounded-[24px]'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto  mt-5 mb-2'>
                <img src={six} alt=""  />
            </div>
            <div className='text-center '>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
            Premium Health Product <br /> Access

            </p>
        
            </div>
            </div>
            {/* icons */}

            {/* icons */}
            
            <div className='flex flex-col mx-auto  mt-10 bg-white  lilac  w-[80vw] rounded-[24px]'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto  mt-5 mb-2'>
                <img src={seven} alt=""  />
            </div>
            <div className='text-center '>
            <p className={`${styles.subHeadingy} mx-auto coal mb-5`}>
          Generational Wealth <br /> Building System
            </p>
        
            </div>
            </div>
            {/* icons */}
            <div className={`${styles.subHeading} coal mt-10`}>
            Get Started & Claim Your <br /> Bonuses
    
          </div>
    {/* main text */}
    <div className={`${styles.flexCenter} flex flex-col mt-2`}>
          <p className={`${styles.paragraphx}  `}>
        Be one of the lucky ones
          </p>
            <BonusButton />
          </div>
          <div className='h-[40px]'></div>
    </section>  
  )
}

export default Bonus
