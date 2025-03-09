import React from 'react'
import styles from '../../style'
import HeadReviews from './HeadReviews'
import Mike from './Mike'
import Ronke from './Ronke'
import Sam from './Sam'
import Nefo from './Nefo'

const Reviews = () => {
 
    
        return (
          <div className=' w-full'>


          <div className={`${styles.flexCenter}  `}>
    <div className={`${styles.boxWidth}`}>
   <HeadReviews />
 
   </div>
   </div>
          <div className={`${styles.flexCenter}  `}>
    <div className={`${styles.boxWidth}`}>
   <Mike />
 
   </div>
   </div>
          <div className={`${styles.flexCenter} mt-5 `}>
    <div className={`${styles.boxWidth}`}>
   <Ronke />
 
   </div>
   </div>
          <div className={`${styles.flexCenter} mt-5 `}>
    <div className={`${styles.boxWidth}`}>
   <Sam />
 
   </div>
   </div>
          <div className={`${styles.flexCenter} mt-5 `}>
    <div className={`${styles.boxWidth}`}>
   <Nefo />
 
   </div>
   </div>



        </div>      
  )
}

export default Reviews
