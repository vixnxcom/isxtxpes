import React from 'react'
import styles from '../style'
import Hero from './Hero'
import Benefitx from './Benefitx'

const Home = () => {
  return (
 <div className='bg-white w-full'>

 <div className={`${styles.flexCenter} `}>
 <div className={`${styles.boxWidth}`}>

   <Hero/>
</div>
</div>
 <div className={`${styles.flexCenter} mt-40`}>
 <div className={`${styles.boxWidth}`}>

   <Benefitx/>
</div>
</div>















 </div>
  )
}

export default Home