import React from 'react'
import styles from '../style'
import { chess, coins } from '../assets'
 

const Hero = () => {
  return (

 <section className={`${styles.flexCenter} md:h-[500px] h-auto flex flex-col`}>
  {/* main text */}
         <div className='h-[80px]'></div>
         <div className={`${styles.heading1} `} >
         <div className='h-[8vw] '>
      <img src={chess} alt="" />
    </div>
            <div className='md:h-[160px]  h-[160px] shadoww'></div>
        <h1 className=''>
        Do you lack   <span className='gold'>passive income?</span>  
        </h1>
         </div>
      
         <div className={`${styles.subHeading} shadoww`}>
         Let's help you build a financial leverage system.
         </div>
  {/* main text */}
      
 </section>
  )
}

export default Hero
