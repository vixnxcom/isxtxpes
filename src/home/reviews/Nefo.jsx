import React from 'react'
import styles from '../../style'
import { mike, nefo } from '../../assets'

const Nefo = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[92] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-60 text-center mx-auto mb-2'>
                <img src={nefo} alt=""  />
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} p-5 mx-auto  mb-5`}>
            "Before The Diamond Project, I was drowning in debt and constantly stressed about money. Nothing I tried seemed to
work—until I found this system. Within months, my finances turned around. I went from struggling to having peace of
mind, consistent income, and true financial freedom. This project didn’t just change my life—it saved it."


            </p>
            <h1 className='aeon-bold blue '>
            — Nefo Esima
            </h1>
           <p className='p-5 italic'>
           G8 Leader & Pioneer Member of The Diamond Project
           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Nefo
