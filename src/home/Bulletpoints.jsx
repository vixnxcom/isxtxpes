import React from 'react'
import styles from '../style'
import { business, coins, dubai, finance, free, fruit, hand, health, home, ppl, stack, tick, world } from '../assets'


const Bulletpoints = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>
        {/* head section */}
        <div className={`${styles.heading2}`}>
           More Benefits
        </div>
        {/* head section */}
           {/* card 5 */}
     <div className={`${styles.paragraphy} ${styles.paddingX} mt-5   coal bg-bluey max-w-[90vw] rounded-[12px]
      
         mx-auto  `}> 
          <div className='flex flex-col  '>
          
          <div className=' object-cover'>
                <img src={stack} alt="" className='' />
            </div>

        
            {/* icons */}
          </div>
          <div className=' w-full  h-[160px]'>
              <p className={`${styles.heading4} text-white `}>
              Financial freedom, your way.
              </p>
             
          </div>
          </div>
       
          {/* card  */}
           {/* card 5 */}
     <div className={`${styles.paragraphy} ${styles.paddingX} mt-5   coal bg-fruit max-w-[90vw] rounded-[12px]
      
         mx-auto  `}> 
          <div className='flex flex-col  '>
          
          <div className=' object-cover mt-2'>
                <img src={fruit} alt="" className='' />
            </div>

        
            {/* icons */}
          </div>
          <div className=' w-full  h-[160px]'>
              <p className={`${styles.heading7} text-white `}>
              Health & wellness products that improve your life.
              </p>
             
          </div>
          </div>
       
          {/* card  */}
           {/* card 5 */}
     <div className={`  mt-5   coal bg-work max-w-[90vw] rounded-[12px]
      
         mx-auto  `}> 
          <div className='flex flex-col  '>
          
          <div className=' object-cover'>
                <img src={dubai} alt="" className='' />
            </div>

        
            {/* icons */}
          </div>
          <div className=' w-full  h-[160px]'>
              <p className={`${styles.heading7} text-white `}>
              Work from anywhere, including your dream destinations
              </p>
             
          </div>
          </div>
       
          {/* card  */}
           {/* card 5 */}
     <div className={`${styles.paragraphy} ${styles.paddingX} mt-5   coal bg-org max-w-[90vw] rounded-[12px]
      
         mx-auto  `}> 
          <div className='flex flex-col  '>
          
          <div className=' object-cover'>
                <img src={home} alt="" className='' />
            </div>

        
            {/* icons */}
          </div>
          <div className=' w-full  h-[200px]'>
              <p className={`${styles.heading7} text-white `}>
              Build a business that can generate income for generations.
              </p>
             
          </div>
          </div>
       
          {/* card  */}

        
        
    </section>
  )
}

export default Bulletpoints
