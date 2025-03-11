import React from 'react'
import { abba } from '../assets'
import styles from '../style'

const Abba = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-80 text-center mx-auto mb-2'>
            <video src={abba} className='rounded-[12px] shadoww' controls></video>
 
                     
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} p-5 mx-auto  mb-5`}>
            "I used to struggle financially, drowning in debt, with a salary that couldn’t support me or my family. All I ever wanted
was to give my loved ones a better life, but it felt like an impossible dream—until I discovered *The Diamond Project*.
Through this life-changing opportunity, I’ve been able to turn my dreams into reality and now live life on my own terms.
With the guidance of God and incredible mentors, I’ve also helped others achieve success through *The Diamond
Project*, empowering them to live life on their terms as well."

            </p>
            <h1 className='aeon-bold blue text-[16px] '>
            – Abba Yila

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

export default Abba
