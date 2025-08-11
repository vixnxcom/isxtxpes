import React from 'react'
import styles from '../style'
import { bookmark, tick } from '../assets'

const Opptunity = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>


    {/* head section */}
    <div className={`${styles.heading5} text-white`}>
    Why this opportunity is a no-brainer
    </div>

     {/* head section */}
     <div className='flex flex-row gap-4 mt-5'>
        {/* icons */}
        <div className='w-[50px] h-[55px]'>
            <img src={bookmark} alt=""  className='max-w-8 mt-2'/>
        </div>
        <div>
          <p className={`${styles.paragraphx} text-white`}>For Less Than the Cost of a Shoe, You Can Build a Business That Pays You Forever—While Making an Impact
That Lasts Generations!
</p>
        </div>
        {/* icons */}
      </div>

     {/* head section */}
     <div className='flex flex-row gap-4 mt-5'>
        {/* icons */}
        <div className='w-[50px] h-[55px]'>
            <img src={bookmark} alt="" className='max-w-8 mt-2' />
        </div>
        <div>
          <p className={`${styles.paragraphx} text-white`}>People spend ₦70,000 on weekend outings, shopping, and subscriptions 
            that don’t change their lives. But this? This
          could change everything.
</p>
        </div>
        {/* icons */}
      </div>
    {/* head section */}
    </section>
  )
}

export default Opptunity