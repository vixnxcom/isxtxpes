import React from 'react'
import { business, finance, health, world } from '../assets'
import styles from '../style'

const Backup = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`}>{/* card 1 */}
    <div className={`${styles.flexCenter} flex flex-row gap-4`}>        
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal  bg-white h-[240px]  max-w-[48vw] rounded-[12px] borderr 
     mx-auto  `}> 
      <div className='flex flex-col gap-4 mt-2'>
        
      <div className='w-12 mt-2'>
            <img src={finance} alt=""  />
        </div>

    
        {/* icons */}
      </div>
    
          <p className={`${styles.paragraphy} mt-2 mb-5`}>
          Financial freedom, your way.
          </p>
     
      </div>
      {/* card  */}
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal  bg-white h-[240px] max-w-[48vw] rounded-[12px] borderr 
     mx-auto  `}> 
      <div className='flex flex-col gap-4 mt-2'>
        
      <div className='w-12 mt-2'>
            <img src={health} alt=""  />
        </div>

    
        {/* icons */}
      </div>
    
          <p className={`${styles.paragraphy} mt-2 mb-5`}>
          Health & well -ness products that improve your life.
          </p>
     
      </div>
      {/* card  */}
      </div>
    {/* card 1 */}
    <div className={`${styles.flexCenter} flex flex-row gap-4`}>        
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal  bg-white h-[240px]  max-w-[48vw] rounded-[12px] borderr 
     mx-auto  `}> 
      <div className='flex flex-col gap-4 mt-2'>
        
      <div className='w-12 mt-2'>
            <img src={world} alt=""  />
        </div>

    
        {/* icons */}
      </div>
    
          <p className={`${styles.paragraphy} mt-2 mb-5`}>
          Work from any -where, including your dream destinations.

          </p>
     
      </div>
      {/* card  */}
 {/* card 5 */}
 <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal  bg-white h-[240px] max-w-[48vw] rounded-[12px] borderr 
     mx-auto  `}> 
      <div className='flex flex-col gap-4 mt-2'>
        
      <div className='w-12 mt-2'>
            <img src={business} alt=""  />
        </div>

    
        {/* icons */}
      </div>
    
          <p className={`${styles.paragraphy} mt-2 mb-5`}>
          Build a business that can gen -erate income for generations
          </p>
     
      </div>
      {/* card  */}
      </div>
    </section>
  )
}

export default Backup
