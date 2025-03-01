import React from 'react'
import { tick } from '../assets'
import styles from '../style'

const Choice = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>


    {/* head section */}
    <div className={`${styles.heading5} blue`}>
    Only a few spots left - You could be next!
    </div>
    {/* box */}
       {/* card 5 */}
        
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-row mx-auto gap-4 `}>
       <img src={tick} alt="" className='w-8 mt-10'/>
       <div className={`${styles.heading4}   mx-auto mt-6`}> <span></span>
         Choice 1
        </div>
        </div>
       
        {/* card */}
        <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}>          
        Take action TODAY. Start building your financial & physical freedom, and create a life of abundance &
        adventure
      </div>
    {/* card */}
    
          {/* card  */}
    {/* box */}
    {/* box */}
       {/* card 5 */}
        
       <div className={`${styles.flexStart} ${styles.paddingX} flex flex-row mx-auto gap-4 `}>
       <img src={tick} alt="" className='w-8 mt-10'/>
       <div className={`${styles.heading4}   mx-auto mt-6`}> <span></span>
         Choice 2
        </div>
        </div>
        {/* card */}
    <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr  mx-auto  `}>          
    Everyone who is winning in this business started where you are—with doubts. The difference? They took action.
       
      </div>
    {/* card */}
   
  
   </section>
  )
}

export default Choice
