import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Regret = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`} >


    {/* head section */}
    <div className={`${styles.heading5} blue`}>
The only regret you will have is not joining sooner
    </div>

     {/* head section */}
     <div className='flex flex-col  mt-5'>
            {/* icons */}
            <div className=''>
                <img src={tick} alt=""  className='max-w-8 mt-2 mb-2' />
            </div>
            <div>
           
              <p className={`${styles.paragraphx}`}>
              This is your chance to take control of your life, financially, physically, mentally, and experientially..
              </p>
            </div>
            {/* icons */}
          </div>

     {/* head section */}
     <div className='flex flex-col mt-5'>
            {/* icons */}
            <div className=''>
                <img src={tick} alt=""  className='max-w-8 mt-2 mb-2' />
            </div>
            <div>
           
              <p className={`${styles.paragraphx}`}>
              Success is waiting, but only for those who take ACTION.
              </p>
            </div>
            {/* icons */}
          </div>
      {/* head section */}
     {/* head section */}
     <div className='flex flex-col mt-5'>
            {/* icons */}
            <div className=''>
                <img src={tick} alt=""  className='max-w-8 mt-2 mb-2' />
            </div>
            <div>
           
              <p className={`${styles.paragraphx}`}>
              Click the button below and secure your future NOW!

              </p>
            </div>
            {/* icons */}
          </div>
      {/* head section */}
    </section>
  )
}

export default Regret
