import React from 'react'
import styles from '../style'
import { tick } from '../assets'


const Doubts = () => {

  return (


    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col  mx-auto`}>

<div className={`${styles.heading1}`}>
Still Have Doubts? Let’s Address Them


    </div>  
    {/* head section */}
    <div className={`${styles.heading6} mt-5 mb-5 table mx-auto `}>
    "I don’t have the money"
    </div>

    {/* head section */}
    {/* card 1 */}
    <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col table  mx-auto  `}> 
      <div className='flex flex-row gap-4 '>
        
      
       <p className='noto text-start xs:text-[20px] text-[24px] text-black mt-2 mb-2'>
       Isn’t this the exact reason why you need this opportunity
        </p> 

        {/* icons */}
      </div>
      
      </div>
      {/* card  */}
    {/* head section */}
    <div className={`${styles.heading6} mt-10 mb-5 table mx-auto `}>
    “I’m not sure if it’ll work for me”
    </div>

    {/* head section */}
    {/* card 1 */}
    <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col table  mx-auto  `}> 
      <div className='flex flex-row gap-4 '>
        
      
       <p className='noto text-start xs:text-[20px] text-[24px] text-black mt-2 mb-2'>
       Everyone who succeeded started where you are now—doubtful and unsure
        </p> 

        {/* icons */}
      </div>
      
      </div>
      {/* card  */}
    {/* head section */}
    <div className={`${styles.heading6} mt-10 mb-5 table mx-auto `}>
    “I need more time to think” 
    </div>

    {/* head section */}
    {/* card 1 */}
    <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col table  mx-auto  `}> 
      <div className='flex flex-row gap-4 '>
        
      
       <p className='noto text-start xs:text-[20px] text-[24px] text-black mt-2 mb-2'>
       Waiting only delays your success. Take action today and your future self will thank you.
        </p> 

        {/* icons */}
      </div>
      
      </div>
      {/* card  */}
      <div className={`${styles.subHeading} mt-10`}>
      Take Action Now & Get Started Today
    
          </div>
      </section>
  )
}

export default Doubts