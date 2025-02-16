import React from 'react'
import styles from '../style'
import Button from './Button' 

const Hero = () => {
  return (

 <section className={`${styles.flexCenter} h-auto flex flex-col`}>
  {/* main text */}
         
         <div className={`${styles.heading1} `} >
            <div className='bg-white h-[120px]'></div>
        <h1 className=''>
        Turn Your Smartphone into a <span className='gold'>Money-Making</span> with <span className='blue'>C21FG!</span>
        </h1>
         </div>
         <div className={`${styles.subHeading}`}>
         No Selling Required. No Experience Needed. 100% Online.
         </div>
  {/* main text */}
       <Button />
 </section>
  )
}

export default Hero
