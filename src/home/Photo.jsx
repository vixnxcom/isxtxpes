import React from 'react'
import { sfour, sone, stwo } from '../assets'
import styles from '../style'

const Photo = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`} id='pic'>



    <div className={`${styles.heading1} `}>
Photo Gallery
    </div>
    
      {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX} 
       mt-5  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
          <div className='flex flex-col gap-4 mt-2'>
            
          <div className='w-full rounded-[24px] mt-2 shadow'>
                <img src={sone} alt=""   className='rounded-[28px] shadow'/>
            </div>

           {/* <div className='noto text-center xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Didi
            </div>  */}




            </div> 
            </div> 

            {/* icons */}

      {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX} 
       mt-5  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
          <div className='flex flex-col gap-4 mt-2'>
            
          <div className='w-full rounded-[24px] mt-2 shadow'>
                <img src={sfour} alt=""   className='rounded-[28px] shadow'/>
            </div>

           {/* <div className='noto text-center xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Didi
            </div>  */}




            </div> 
            </div> 

            {/* icons */}
      {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX} 
       mt-5  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
          <div className='flex flex-col gap-4 mt-2'>
            
          <div className='w-full rounded-[24px] mt-2 shadow'>
                <img src={stwo} alt=""   className='rounded-[28px] shadow'/>
            </div>

           {/* <div className='noto text-center xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Didi
            </div>  */}




            </div> 
            </div> 

            {/* icons */}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </section>
  )
}

export default Photo
