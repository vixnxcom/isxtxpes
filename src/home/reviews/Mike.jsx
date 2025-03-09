import React from 'react'
import styles from '../../style'
import { mike, one } from '../../assets'

const Mike = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
    {/* main text */}
    <div className='text-center  bg-gold w-[90vw] mt-5 mb-5 rounded-[12px]'>    
     
           <div className='flex flex-col mx-auto  mt-10'>
            {/* icons */}
            <div className='w-60 text-center mx-auto mb-2'>
                <img src={mike} alt=""  />
            </div>
            <div className='text-center w-[90vw] mt-5 mb-5 '>
            <p className={`${styles.paragraphi} p-5 mx-auto  mb-5`}>
            "The Diamond Project changed everything for me. I went from struggling to make ends meet to achieving financial
stability in just a few months. The system is simple, effective, and truly works. I now have the freedom to live life on
my terms, and I couldn’t be more grateful!"

            </p>
            <h1 className='aeon-bold blue '>
            — Michael .K. Okoli
            </h1>
           <p className='p-5 italic'>
           Founder of The Diamond Project
           </p>
            </div>
            </div>
            </div>

            {/* icons */}
        </section>
  )
}

export default Mike
