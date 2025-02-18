import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Freedom = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
    {/* head section */}
    <div className={`${styles.heading2}`}>
       Financial Freedom
    </div>

    {/* head section */}
              <div className='flex flex-col justify-center items-center mx-auto mt-2 mb-2'>
                {/* icons */}
                <div className='w-[50px] h-[55px]'>
                    <img src={tick} alt=""  />
                </div>
                <div>
              <p className={`${styles.paragraph} mt-2 mb-2`}>Only a smatphone needed</p>
            </div>

                </div>
    </section>
  )
}

export default Freedom