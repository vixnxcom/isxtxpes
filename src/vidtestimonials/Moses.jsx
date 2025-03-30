import React from 'react'
import { moses, mosest } from '../assets'
import styles from '../style'
styles
const Moses = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-80 text-center mx-auto mb-2'>
            <video src={moses} className='rounded-[12px] shadoww' controls poster={mosest}></video>
 
                     
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} px-5 mx-auto  mb-5`}>
            "I used to be a hardworking and dedicated entrepreneur, but despite my efforts, I just wasn’t getting it right. Then I
realized the missing pieces were *mentorship* and *positioning*. Plugging into *The Diamond Project* transformed
my life for good. I went from being an average fashion designer to traveling the world—all because I asked the right
questions and paid attention. Mentorship and positioning are the secrets to success, and they’ve helped countless
people upgrade from an average lifestyle to an extraordinary one. If it’s possible for one, it’s possible for all!"

            </p>
            <h1 className='aeon-bold blue text-[16px] '>
            –  Ambassador Moses Onu

            </h1>
           <p className='p-5 italic'>
           Ambassador with The Diamond Project


           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Moses
