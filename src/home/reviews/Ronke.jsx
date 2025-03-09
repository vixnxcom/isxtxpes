import React from 'react'
import { mike, ronke } from '../../assets'
import styles from '../../style'

const Ronke = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[92] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-60 text-center mx-auto mb-2'>
                <img src={ronke} alt=""  />
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} p-5 mx-auto  mb-5`}>
            "Before The Diamond Project, I was stuck in mediocrity with a closed mind, thinking true freedom was out of reach.
This opportunity changed everything. It opened my mind, pushed me to become the best version of myself, and gave
me the financial freedom to travel the world. I finally have the life I once only dreamed of!"

            </p>
            <h1 className='aeon-bold blue '>
            — Ronke Kosemani
            </h1>
           <p className='p-5 italic'>
           G8 Leader, Wealth Coach and Pioneer Member of the Diamond Project
           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Ronke