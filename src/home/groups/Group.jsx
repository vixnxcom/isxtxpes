import React from 'react'
import styles from '../../style'
import HeadGroup from './HeadGroup'
import Brief from './Brief'
import WhatsApp from './WhatsApp'
import Telegram from './Telegram'
import Cover from './Cover'

const Group = () => {
  window.scrollTo(0, 0); // Scrolls to the top
  
  return (
    <div className='offlilac w-full '>
  
 <div className='md:h-[120px] h-[160px]'></div>
    <div className={`${styles.flexCenter} bg-white rounded-[24px] w-[92vw] borderr  mx-auto `} >
    <div className={`${styles.boxWidth}`}>
   <Cover />
   </div>
   </div>

   <div className='h-[80px]'></div>
   </div>
  )
}

export default Group
