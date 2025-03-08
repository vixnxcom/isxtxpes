import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Benefitx = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`} id='benefits'>
        {/* head section */}
        <div className={`${styles.heading2}`}>
           Easy Benefits
        </div>
        {/* head section */}
          <div className='flex flex-row gap-4 mt-2'>
            {/* icons */}
            <div className='w-[50px] h-[55px]'>
                <img src={tick} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph}`}>Work from Home</p>
            </div>
            {/* icons */}
          </div>
          <div className='flex flex-row gap-4 mt-2'>
            {/* icons */}
            <div className='w-[50px] h-[55px]'>
                <img src={tick} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph}`}>No selling required
              </p>
            </div>
            {/* icons */}
          </div>
          <div className='flex flex-row gap-4 mt-2'>
            {/* icons */}
            <div className='w-[50px] h-[55px]'>
                <img src={tick} alt=""  />
            </div>
            <div>
              <p className={`${styles.paragraph}`}>Automated income system</p>
            </div>
            {/* icons */}
          </div>
    </section>
  )
}

export default Benefitx
