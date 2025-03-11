import React from 'react'
import styles from '../style'
import { ozani } from '../assets'

const Ozani = () => {
  return (
<section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-80 text-center mx-auto mb-2'>
            <video src={ozani} className='rounded-[12px] shadoww' controls></video>
 
                     
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} p-5 mx-auto  mb-5`}>
       
            "I used to wait and hope for change, but year after year, nothing happened. That was until I discovered *The Diamond
Project*. Plugging into the system completely transformed my life—I moved from an incomplete building into my own
apartment, and now, I live in a duplex with properties all around. *The Diamond Project* didn’t just change my
circumstances; it helped me become the best version of myself. If I can do it, you can do it too!"

            </p>
            <h1 className='aeon-bold blue text-[16px] '>
            —    Sam Ozoani
            </h1>
           <p className='p-5 italic'>
           G8 Leader and Pioneer Member of The Diamond Project

           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Ozani
