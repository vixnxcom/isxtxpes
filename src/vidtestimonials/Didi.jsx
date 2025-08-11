import React from 'react'
import styles from '../style'
import { didi, didit } from '../assets'

const Didi = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-80 text-center mx-auto mb-2'>
            <video src={didi} className='rounded-[12px] shadoww' controls poster={didit} ></video>
  
                     
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} px-5 mx-auto  mb-5`}>
            "Discovering The Diamond Project has been life-changing! Thanks to the freedom it provides, I now have the
opportunity to explore the world, visiting no less than three countries each year. The Diamond Project has opened up
incredible possibilities, and I’m beyond grateful for this journey of empowerment and adventure!" 

            </p>
            <h1 className='aeon-bold blue text-[16px] '>
            —  Didi Nwala
            </h1>
           <p className='p-5 italic'>
           Global Ambassador with The Diamond Project

           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Didi
