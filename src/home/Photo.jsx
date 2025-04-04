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
       mt-5    bg-gold  
         mx-auto rounded-[12px] `}> 
      <img src={sone} alt=""   className='rounded-[12px]  py-6'/>
      
           {/* <div className='noto text-center xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Didi
            </div>  */}




            </div> 
        

            {/* icons */}

      {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX} 
       mt-5    bg-gold  
         mx-auto rounded-[12px] `}> 
        

        
     
                <img src={sfour} alt=""   className='rounded-[12px] py-6'/>
     

           {/* <div className='noto text-center xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Didi
            </div>  */}




            </div> 
           

            {/* icons */}
      {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX} 
       mt-5    bg-gold  
         mx-auto rounded-[12px] `}> 
        

  
            
         
                <img src={stwo} alt=""   className='rounded-[12px] py-6 '/>
           

           {/* <div className='noto text-center xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Didi
            </div>  */}




            </div> 
       

            {/* icons */}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </section>
  )
}

export default Photo
