import React from 'react'
import styles from '../style'
import Time from '../offer/Time'





const Head = () => {
  return (
    <section className={`${styles.flexCenter} mt-10 flex flex-col`}>
    {/* main text */}
           
           <div className={`${styles.heading1}`} >           
          <h1 className=''>
       <span className='gold'> Bonus Offer: </span> <br /> Act Now and Get Exclusive Access!
          </h1>
           </div>
           <div className={`${styles.flexCenter} mx-auto p-4`}>
         <Time />
           </div>
    </section>
  )
}

export default Head
