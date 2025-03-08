import React from 'react'
import styles from '../style'
import { eye, safe, tick } from '../assets'

const System = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`} id='pros'>
    {/* head section */}
    <div className={`${styles.heading7} text-white`}>
  This system is for you if:
    </div>
      {/* head section */}
      <div className='flex flex-row gap-4 mt-5'>
            {/* icons */}
            <div className=''>
                <img src={eye} alt=""  className='max-w-8 mt-2' />
            </div>
            <div>
              <p className={`${styles.paragraphx} text-white`}>You want to earn extra income without affecting your daily routine.
              </p>
            </div>
            {/* icons */}
          </div>
     
      {/* head section */}
      <div className='flex flex-row gap-4 mt-5'>
            {/* icons */}
            <div className=''>
                <img src={eye} alt=""  className='max-w-8 mt-2' />
            </div>
            <div>
              <p className={`${styles.paragraphx} text-white`}>
              You’re tired of financial struggles and want real change
              </p>
             
            </div>
            {/* icons */}
          </div>
      {/* head section */}
      <div className='flex flex-row gap-4 mt-5'>
            {/* icons */}
            <div className=''>
                <img src={eye} alt=""  className='max-w-8 mt-2' />
            </div>
            <div>
           
              <p className={`${styles.paragraphx} text-white`}>
              You want access to powerful wellness products that fight diseases, prevent cancer, boost immunity, and reverse
              aging!
              </p>
            </div>
            {/* icons */}
          </div>
  
      {/* head section */}
      <div className='flex flex-row gap-4 mt-5'>
            {/* icons */}
            <div className=''>
                <img src={eye} alt=""  className='max-w-8 mt-2' />
            </div>
            <div>
           
              <p className={`${styles.paragraphx} text-white`}>
              You dream of traveling the world, experiencing new cultures, and living life on your terms!

              </p>
            </div>
            {/* icons */}
          </div>
  
      {/* head section */}
      <div className='flex flex-row gap-4 mt-5'>
            {/* icons */}
            <div className=''>
                <img src={eye} alt=""  className='max-w-8 mt-2' />
            </div>
            <div>
           
              <p className={`${styles.paragraphx} text-white`}>
              You want to help others escape poverty, find financial freedom, and live healthier, happier lives.
              </p>
            </div>
            {/* icons */}
          </div>
      {/* head section */}
      <div className='flex flex-row gap-4 mt-5'>
            {/* icons */}
            <div className=''>
                <img src={eye} alt=""  className='max-w-8 mt-2' />
            </div>
            <div>
           
              <p className={`${styles.paragraphx} text-white`}>
              You believe in building something that outlives you—creating generational wealth that benefits your family for
              years to come!
              </p>
            </div>
            {/* icons */}
          </div>
  
          <div className={`${styles.subHeadingy} text-white mt-5`}>
          This isn’t just an opportunity—it’s a MOVEMENT!

    </div>
    
         
    </section>
  )
}

export default System