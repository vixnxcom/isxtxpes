import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Legacy = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
    {/* head section */}
    <div className={`${styles.heading7} gold`}>
    Could your path to financial & lifestyle freedom start now
    </div>
    <div className={`${styles.subHeadingy} text-white`}>
    Turn a Small Decision Today Into a Lifetime of Wealth, Impact & Legacy
    </div>
    {/* head section */}
      <div className='flex flex-row gap-4 mt-5'>
        {/* icons */}
        <div className='w-[50px] h-[55px]'>
            <img src={tick} alt=""  />
        </div>
        <div>
          <p className={`${styles.paragraphx} text-white`}> You’ve watched the video. You understand the business</p>
        </div>
        {/* icons */}
      </div>
    {/* head section */}
      <div className='flex flex-row gap-4 mt-5'>
        {/* icons */}
        <div className='w-[50px] h-[55px]'>
            <img src={tick} alt=""  />
        </div>
        <div>
          <p className={`${styles.paragraphx} text-white`}> Now, it’s time to take action and secure your dream lifestyle.
          </p>
        </div>
        {/* icons */}
      </div>
      <div className={`${styles.subHeadingy} text-white mt-5`}>
      Spots Are Limited! Don’t Miss This Opportunity!

    </div>
      </section>
  )
}

export default Legacy
