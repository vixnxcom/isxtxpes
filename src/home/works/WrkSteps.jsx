import React from 'react'
import styles from '../../style'
import { 

  cart,
  
  
  
  paper,
  
  
  
  plans,
   tick,
   time,
   walle,  } from '../../assets'


const WrkSteps = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`} id='join'>
 
  <div className='h-[160px]'>

            {/* <img src={hand} alt="" className=''/> */}
           </div>
           {/* head section */}
           <div className={`${styles.heading5} gold shadoww`}>
           How to Register & Become a Partner
           </div>
           <div className='md:w-[25%] w-[75%] p-2'>
            <img src={time} alt="" />
          </div>
        {/* head section */}

        
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-10  coal   bg-white   max-w-[90vw]
  rounded-[24px] borderr 
     mx-auto  `}> 
   
        
      <div className='w-12 mt-5 '>
            <img src={tick} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Watch the complete video on 
          our default page. The Homepage only activates after watching the complete video without skipping
          </p>
     
      </div>
  
     
      {/* card  */}
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-10  coal   bg-white   max-w-[90vw]
  rounded-[24px] borderr 
     mx-auto  `}> 
   
        
      <div className='w-12 mt-5'>
            <img src={plans} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
        Click on the any of the <span className='aeon-bold blue'>"Become a Partner" </span> buttons on the website
          </p>
     
      </div>
  
     
      {/* card  */}
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal   bg-white   max-w-[90vw]
  rounded-[24px] borderr 
     mx-auto  `}> 
   
        
      <div className='w-12 mt-5'>
            <img src={cart} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          Select a suitable plan from our package offer and make payment
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
            <img src={walle} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
          After payment into any of our bank accounts.
          Fill out the interest form and upload a copy of your payment receipt. Click on the <span className='aeon-bold blue'> 'yes i've sent the money'</span> button 
          </p>
     
      </div>
  
     
      {/* card  */}
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal   bg-white   max-w-[90vw]
  rounded-[24px] borderr 
     mx-auto  `}> 
   
        
      <div className='w-12 mt-5'>
            <img src={tick} alt=""  />
        </div>

    
        {/* icons */}
     
          <p className={`${styles.subHeadingxy} coal h-auto mb-5`}>
     Click on the <span className='aeon-bold blue'>"Submit" </span>button and automatically 
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
            <img src={paper} alt=""  />
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
