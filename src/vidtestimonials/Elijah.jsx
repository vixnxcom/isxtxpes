import React from 'react'
import styles from '../style'
import { elijah, elijaht } from '../assets'

const Elijah = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-80 text-center mx-auto mb-2'>
            <video src={elijah} className='rounded-[12px] shadoww' controls poster={elijaht}></video>
 
                     
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} px-5 mx-auto  mb-5`}>
            "Just three years ago, I was juggling shifts across four hospitals, working tirelessly as a doctor. Then, I discovered
*The Diamond Project*, and my life took a remarkable turn. Today, I earn 8 figures monthly and have had the privilege
of mentoring others who now earn 8, 7, and 6 figures. But for me, it’s not just about the income—it’s about the lives
I’ve been able to impact and the people I’ve helped along the way. Opportunities like this don’t come often. If you ever
come across the *Mastermind Mentorship* under *The Diamond Project*, don’t hesitate—grab it with both hands. It’s
life-changing."


            </p>
            <h1 className='aeon-bold blue text-[16px] '>
            —   Dr. Elijah Mba
            </h1>
           <p className='p-5 italic'>
           G8 Leader and Mastermind Mentor of The Diamond Project

           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Elijah
