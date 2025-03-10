import React from 'react'
import styles from '../../style'
import { good, tick,  } from '../../assets'

const WrkPaid = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col mx-auto`}>
        {/* head section */}
        <div className={`${styles.heading4} text-white`}>
           Sign-Up Today!
        </div>
        <div className={`${styles.heading4} gold`}>
       Receive full benefits
        </div>

        {/* head section */}
        {/* card 1 */}
      
        <div className={`${styles.flexCenter} ${styles.paddingX}  flex flex-col  mx-auto mt-10 `}> 
            {/* icons */}
            <div className=' mt-2 mx-auto'>
                <img src={good} alt="" className='max-w-16' />
            </div>
            <div>
              <p className={`${styles.subHeading} text-white`}>Infinite Income stream</p>
            </div>
            {/* icons */}      
          {/* card 1 */}
                </div>
        {/* card 1 */}
      
        <div className={`${styles.flexCenter} ${styles.paddingX}  flex flex-col  mx-auto mt-10 `}> 
            {/* icons */}
            <div className=' mt-2 mx-auto'>
                <img src={good} alt="" className='max-w-16' />
            </div>
            <div>
              <p className={`${styles.subHeading} text-white`}>Health Benefits</p>
            </div>
            {/* icons */}      
          {/* card 1 */}
                </div>
        {/* card 1 */}
      
        <div className={`${styles.flexCenter} ${styles.paddingX}  flex flex-col  mx-auto mt-10 `}> 
            {/* icons */}
            <div className=' mt-2 mx-auto'>
                <img src={good} alt="" className='max-w-16' />
            </div>
            <div>
              <p className={`${styles.subHeading} text-white`}>Lifestyle Upgrade</p>
            </div>
            {/* icons */}      
          {/* card 1 */}
                </div>
        {/* card 1 */}
      
        <div className={`${styles.flexCenter} ${styles.paddingX}  flex flex-col  mx-auto mt-10 `}> 
            {/* icons */}
            <div className=' mt-2 mx-auto'>
                <img src={good} alt="" className='max-w-16' />
            </div>
            <div>
              <p className={`${styles.subHeading} text-white`}>Financial Security</p>
            </div>
            {/* icons */}      
          {/* card 1 */}
                </div>
    </section>
  )
}

export default WrkPaid

