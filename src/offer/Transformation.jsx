import React from 'react'
import styles from '../style'
import { bar, coal, diamond, happy, tick, tired } from '../assets'

const Transformation = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col `}>
  
   
        {/* card 5 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col  mx-auto mt-5 `}> 
         

           <div className='aeon-bold text-start xs:text-[20px] text-[24px] blue mt-2 mx-auto'>
           Before Joining
            </div> 
         {/* <div className=' mx-auto '>
         <img src={coal} alt=""  className='mx-auto w-32'/>
          </div>  */}
             {/* icons  */}
          </div>
          <div className='mx-auto'>
              <p className={`${styles.paragraphx} mt-2 mb-2`}> 
              Stuck in the same routine, stressed about money, and dreaming of a better life
              </p>
            </div>
         
          {/* card  */}

        {/* card 5 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col  mx-auto mt-5 `}> 
         

           <div className='aeon-bold text-start xs:text-[20px] text-[24px] blue mt-2 mx-auto'>
           After Joining
            </div> 
           {/* <div className=' mx-auto '>
         <img src={diamond} alt=""  className='w-full'/>
          </div>  */}
            </div> 

            {/* icons */}
        
          <div className='mx-auto mt-5 mb-2'><img src={bar} alt=""  className='w-8'/>
          </div>
          <div className='mx-auto'>
              <p className={`${styles.paragraphx}  mb-2`}> 
              Unlimited earning potential, financial freedom, VIP travel, and a lifestyle most people only dream of!
              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
        
          <div className='mx-auto mt-5 mb-2'><img src={bar} alt=""  className='w-8'/>
          </div>
          <div className='mx-auto'>
              <p className={`${styles.paragraphx}  mb-2`}> 
              Making a real impact by helping others achieve success!

              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
        
          <div className='mx-auto mt-5 mb-2'><img src={bar} alt=""  className='w-8'/>
          </div>
          <div className='mx-auto mb-10'>
              <p className={`${styles.paragraphx}  mb-5`}> 
              Creating a legacy of wealth, health, and freedom for your future generations!

              </p>
            </div>
         
          {/* card  */}
          
    </section>

  )
}

export default Transformation
