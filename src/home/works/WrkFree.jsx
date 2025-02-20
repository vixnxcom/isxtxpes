import React from 'react'
import styles from '../../style'
import { good, tick,  } from '../../assets'

const WrkFree = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col mx-auto`}>
        {/* head section */}
        <div className={`${styles.heading4}`}>
           Sign-Up Later Offer
        </div>

        {/* head section */}
        {/* card 1 */}
        <div className='table' >
        <div className={`${styles.flexStart} ${styles.paddingX}  flex flex-col tablex mx-auto mt-5 `}>
          
        <div className='flex flex-row gap-4 mt-2'>
            {/* icons */}
            <div className='w-5 mt-2'>
                <img src={good} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph}`}>Work from Home</p>
            </div>
            {/* icons */}
          </div>
          </div>
          {/* card 1 */}
        {/* card 1 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2`}>
        <div className='flex flex-row gap-4 mt-2'>
            {/* icons */}
            <div className='w-5 mt-2'>
                <img src={good} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph}`}>Work from Home</p>
            </div>
            {/* icons */}
          </div>
          </div>
          {/* card 1 */}
        {/* card 1 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablex mx-auto mt-2 mb-5`}>
        <div className='flex flex-row gap-4 mt-2'>
            {/* icons */}
            <div className='w-5 mt-2'>
                <img src={good} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph}`}>Work from Home</p>
            </div>
            {/* icons */}
          </div>
          </div>
          </div>
          {/* card 1 */}
    </section>
  )
}

export default WrkFree

