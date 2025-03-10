import React from 'react'
import styles from '../../style'
import { mike, sam } from '../../assets'

const Sam = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'> 
            {/* icons */}
            <div className='w-60 text-center mx-auto mb-2'>
                <img src={sam} alt="" className='shadoww' />
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} p-5 mx-auto  mb-5`}>
            "I grew up in poverty and once lived in an incomplete building, struggling to make ends meet. But The Diamond
Project changed my life completely. Today, I drive a Porsche among other luxury cars, and I have both the time and
money to do everything I’ve ever wanted. If you're looking for a better opportunity, I highly recommend The Diamond
Project—it’s a proven system that helps you build sustainable income through leverage!"

            </p>
            <h1 className='aeon-bold blue text-[16px] '>
            — Ambassador Sam Ozoani
            </h1>
           <p className='p-5 italic'>
           G8 Leader, Business Coach and Pioneer Member of The Diamond Project
           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Sam
