import React from 'react'
import styles from '../style'
import { five, four, one, seven, six, three, tick, two } from '../assets'

const Bonus = () => {
  return (
    <section className={`${styles.flexCenter} mt-10 flex flex-col`}>
    {/* main text */}
           
           <div className={`${styles.heading1} `} >           
          <h1 className=''>
       <span className='gold'> Bonus Offer: </span> <br /> Act Now and Get Exclusive Access!
          </h1>
           </div>

           <div className='flex flex-col  mt-5'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={one} alt=""  />
            </div>
            <div>
            <p className={`${styles.subHeading}`}>
            90-Day Success Plan (A roadmap to <span className='gold aeon-bold'>₦1,000,000+</span> )
            </p>
           
            </div>
            </div>

            {/* icons */}
           <div className='flex flex-col  mt-5'>
            {/* icons */}
            <div className='w-[50px] h-[55px] text-center mx-auto'>
                <img src={two} alt=""  />
            </div>
            <div>
            <p className={`${styles.subHeading}`}>
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
            <div>
            <p className={`${styles.subHeading}`}>
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
            <div>
            <p className={`${styles.subHeading}`}>
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
            <div>
            <p className={`${styles.subHeading}`}>
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
            <div>
            <p className={`${styles.subHeading}`}>
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
            <div>
            <p className={`${styles.subHeading}`}>
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
