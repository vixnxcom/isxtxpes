import React from 'react'
import styles from '../../style'
import { tick } from '../../assets'

const Inside = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
        {/* head section */}
        <div className={`${styles.heading2} mt-2`}>
        What You'll Get Inside

        </div>
        {/* head section */}
          <div className='flex flex-row gap-4 mt-5'>
            {/* icons */}
            <div className=''>
                <img src={tick} alt=""  className='max-w-8' />
            </div>
            <div>
              <p className={`${styles.paragraph}`}> The Secret to Making N1,000,000+ with The Diamond Project FAST!
              </p>
            </div>
            {/* icons */}
          </div>
          {/* card */}
        {/* head section */}
          <div className='flex flex-row gap-4 mt-5 '>
            {/* icons */}
            <div className=''>
                <img src={tick} alt=""  className='max-w-8'/>
            </div>
            <div>
              <p className={`${styles.paragraph}`}> How to Start Even If You Have ZERO Experience</p>
            
            </div>
            {/* icons */}
          </div>
          {/* card */}
        {/* head section */}
          <div className='flex flex-row gap-4 mt-5 '>
            {/* icons */}
            <div className=''>
                <img src={tick} alt=""  className='max-w-8'/>
            </div>
            <div>
              <p className={`${styles.paragraph}`}>Why Most People Fail & How You Can Avoid Their Mistakes!
              </p>
            </div>
            {/* icons */}
          </div>
          {/* card */}
        {/* head section */}
          <div className='flex flex-row gap-4 mt-5 '>
            {/* icons */}
            <div className=''>
                <img src={tick} alt=""  className='max-w-8'/>
            </div>
            <div>
              <p className={`${styles.paragraph} mb-5`}> Fast-Track Training + Step-by-Step Guide!

              </p>
            </div>
            {/* icons */}
          </div>
          {/* card */}
       
    </section>
  )
}

export default Inside