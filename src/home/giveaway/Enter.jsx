import React from 'react'
import styles from '../../style'
import { tick } from '../../assets'

const Enter = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
        {/* head section */}
        <div className={`${styles.heading2} mt-2`}>
        Here’s How to Enter

        </div>
        {/* head section */}
          <div className='flex flex-row gap-4 mt-5'>
            {/* icons */}
            <div className='w-[50px] h-[55px]'>
                <img src={tick} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph}`}> Enter Your First Name, Phone Number, and Email Below</p>
            </div>
            {/* icons */}
          </div>
          {/* card */}
        {/* head section */}
          <div className='flex flex-row gap-4 mt-5 '>
            {/* icons */}
            <div className='w-[50px] h-[55px]'>
                <img src={tick} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph}`}>  Be one of the lucky few selected for our exclusive offer</p>
            </div>
            {/* icons */}
          </div>
          {/* card */}
        {/* head section */}
          <div className='flex flex-row gap-4 mt-5  mb-5'>
            {/* icons */}
            <div className='w-[50px] h-[55px]'>
                <img src={tick} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph} `}>Get all the details in your inbox—hurry, time is running out!
              </p>
            </div>
            {/* icons */}
          </div>
          {/* card */}
      
    </section>
  )
}

export default Enter