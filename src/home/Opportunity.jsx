import React from 'react'
import styles from '../style'
import { build, earn, finance, products, protect, wealth } from '../assets'

const Opportunity = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`} id='opp'>

    {/* head section */}
    <div className={`${styles.heading3}`}>
    Why This is the Only Opportunity
    </div> 
    <div className={`${styles.heading3}`}>
     You Need Right Now!
    </div> 
 {/* head section */}

     {/* card 1 */}
     <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
            {/* icons */}
          
        
                <img src={build} alt="" className='w-20 mt-5 mx-auto ' /> 
              
                <div className='text-center'>
              <p className={`${styles.paragraphx} coal mt-5 mb-5 `}>Build a business for life  with zero
                 experience required </p>
               </div>         
          </div>
          {/* card */}
     {/* card 2 */}
     <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
            {/* icons */}
       
      
                <img src={earn} alt="" className='w-16 mt-5 mx-auto ' /> 
              
        
            <div className='text-center '>
              <p className={`${styles.paragraphx} mt-5 mb-5 coal`}>Daily, weekly, and monthly earnings—no inventory or selling </p>
            </div> 
             </div>      
       
          {/* card */}
     {/* card 3 */}
     <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
            {/* icons */}
         
          
                <img src={products} alt="" className='w-16 mx-auto mt-5 ' /> 
    
            <div className='text-center '>
              <p className={`${styles.paragraphx} mt-5 mb-5 coal`}>Access to wellness products that help reverse aging
                 and boost immunity
                 experience required </p>
            </div> 
             </div>      
       
          {/* card */}
     {/* card 4 */}
     <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
            {/* icons */}
              
                <img src={wealth} alt="" className='w-20 mx-auto mt-5' /> 
              
        
            <div className='text-center '>
              <p className={`${styles.paragraphx} mt-5 mb-5 coal`}>Generational wealth creation</p>
            </div> 
             </div>      
        
          {/* card */}
     {/* card 5 */}
     <div className={`${styles.paragraphy} ${styles.paddingX}  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
            {/* icons */}
        
                <img src={protect} alt="" className='w-16 mx-auto mt-5 ' /> 
              
          
            <div className='text-center'>
              <p className={`${styles.paragraphx} mt-5 mb-5 coal`}>100% proven system that works from 
                anywhere in the world
              </p>
            </div> 
               
          </div>
          {/* card */}
 </section>
  )
}

export default Opportunity