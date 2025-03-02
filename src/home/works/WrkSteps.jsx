import React from 'react'
import styles from '../../style'
import { hand, tick, world } from '../../assets'


const WrkSteps = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>

  <div className='h-[180px]'>
            <img src={hand} alt="" />
           </div>
           {/* head section */}
           <div className={`${styles.heading5} blue shadow`}>
           How to Register & Become a Partner
           </div>
         
        {/* head section */}

        
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-10  coal   bg-white   max-w-[90vw]
  rounded-[24px] borderr 
     mx-auto  `}> 
   
        
      <div className='w-12 mt-5'>
            <img src={world} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Watch the complete video on 
          our homepage. The <span className='aeon-bold blue'>"Join-Now" / "Become a partner" </span> button only activates after watching the complete video
          </p>
     
      </div>
  
     
      {/* card  */}
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal   bg-white   max-w-[90vw]
  rounded-[24px] borderr 
     mx-auto  `}> 
   
        
      <div className='w-12 mt-5'>
            <img src={world} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Click on the button. Select a plan from our package offer and make payment
          </p>
     
      </div>
  
     
      {/* card  */}
 {/* card 5 */}
      {/* card  */}
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal   bg-white   max-w-[90vw]
  rounded-[24px] borderr 
     mx-auto  `}> 
   
        
      <div className='w-12 mt-5'>
            <img src={world} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Fill out the interest form and automatically 
          get added to our Telegram Channel and WhatsApp Group page.
          </p>
     
      </div>
  
     
      {/* card  */}
 {/* card 5 */}
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal   bg-white   max-w-[90vw]
  rounded-[24px] borderr 
     mx-auto  `}> 
   
        
      <div className='w-12 mt-5'>
            <img src={world} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
         A receipt containing your registration details would be sent to your email, which can be printed or saved
          as an image on your phone.
         This copy woud be presented at our office to complete your journey
          </p>
     
      </div>
  
     
      {/* card  */}
 {/* card 5 */}


      
       
   </section>
  )
}

export default WrkSteps
