import React from 'react'
import Title from './Title'
import styles from '../../style'
import Chance from './Chance'
import Enter from './Enter'
import Clock from './Clock'
import Details from './Details'

const Giveaway = () => {
  return (
    <section className='bg-blue w-full'>

    <div className={`${styles.flexCenter} `}>
    <div className={`${styles.boxWidth}`}>
   <Title />
   
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-10`}>
    <div className={`${styles.boxWidth}`}>
   <Chance/>
   
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-10`}>
    <div className={`${styles.boxWidth}`}>
   <Enter/>
   
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-10`}>
    <div className={`${styles.boxWidth}`}>
   <Details/>
   
   </div>
   </div>

    <div className={`${styles.flexCenter} mt-10`}>
    <div className={`${styles.boxWidth}`}>
   <Clock/>
   
   </div>
   </div>


   <div className='h-[80px] '>
</div>

   </section>
  )
}

export default Giveaway
