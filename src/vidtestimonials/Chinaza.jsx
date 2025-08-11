import React from 'react'
import styles from '../style'
import { chinasa, chint } from '../assets'
const Chinaza = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-80 text-center mx-auto  mb-2'>
            <video src={chinasa} className='rounded-[12px] shadoww' controls poster={chint}></video>
 
                     
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} px-5 mx-auto  mb-5`}>
            "In just two years, my life has completely transformed, thanks to *The Amazon Project* in partnership with *The
Diamond Project* under *Century 21 Freedom Group*. As a woman, achieving financial independence was always my
goal—and now, I’m living it. I’ve built a life where I call the shots, take care of my family and loved ones, and, most
proudly, moved my mom abroad to give her the life she deserves. This journey has been empowering, and I’m so
grateful I plugged into a system that truly works!"


            </p>
            <h1 className='aeon-bold blue text-[16px] '>
            —  Chinasa Opara
            </h1>
           <p className='p-5 italic'>
           Amazon Ambassador with the Amazon Project

           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Chinaza
