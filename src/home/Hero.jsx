import React from 'react'
import styles from '../style'
import Button from './Button' 

const Hero = () => {
  return (

 <section className={`${styles.flexCenter} md:h-[500px] h-auto flex flex-col`}>
  {/* main text */}
         
         <div className={`${styles.heading1} `} >
            <div className='md:hidden bg-white h-[120px]'></div>
        <h1 className=''>
        Do you lack   <span className='gold'>passive</span>  <span className='blue'>income?</span>
        </h1>
         </div>
         <div className={`${styles.subHeading}`}>
         Let's help you build a financial leverage system.
         </div>
  {/* main text */}
       <Button />
 </section>
  )
}

export default Hero
