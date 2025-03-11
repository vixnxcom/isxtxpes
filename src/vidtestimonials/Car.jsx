import React from 'react'
import { car } from '../assets'
import styles from '../style'

const Car = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-80 text-center mx-auto mb-2'>
            <video src={car} className='rounded-[12px] shadoww' controls></video>
 
                     
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} p-5 mx-auto  mb-5`}>
            "In 2020, we proudly launched 45 cars, and today, that number has more than tripled—a testament to the life changing power of *The Diamond Project*. We are overjoyed at how our lives have been transformed, and we urge
you not to let this opportunity slip through your fingers. Imagine achieving financial freedom in just two years,
launching your car, moving to a better apartment, or even owning your own home. The key is to trust the mentorship,
follow the system, and watch as the sky becomes your starting point. Don’t miss out—it’s a decision that could change
your life forever."


            </p>
            <h1 className='aeon-bold blue text-[16px] '>
            — The Diamond Project Beneficiaries

            </h1>
      
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Car
