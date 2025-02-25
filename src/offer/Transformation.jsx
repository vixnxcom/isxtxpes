import React from 'react'
import styles from '../style'
import { tick } from '../assets'

const Transformation = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
    {/* head section */}
    <div className={`${styles.heading7}  blue`}>
    What's in it for you?
    </div>
        {/* card 5 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col  mx-auto mt-5 `}> 
         

           <div className='noto text-start xs:text-[20px] text-[24px] text-black mt-2'>
           Before Joining:
            </div> 

            {/* icons */}
          </div>
          <div className='mx-auto'>
              <p className={`${styles.paragraphx} mt-2 mb-2`}> 
              Stuck in the same routine, stressed about money, and dreaming of a better life
              </p>
            </div>
         
          {/* card  */}

        {/* card 5 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col  mx-auto mt-5 `}> 
         

           <div className='noto text-start xs:text-[20px] text-[24px] text-black mt-2'>
         After Joining:
            </div> 
            </div> 

            {/* icons */}
        
          <div className='mx-auto mt-5 mb-2'><img src={tick} alt=""  className='w-8'/>
          </div>
          <div className='mx-auto'>
              <p className={`${styles.paragraphx}  mb-2`}> 
              Unlimited earning potential, financial freedom, VIP travel, and a lifestyle most people only dream of!
              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
        
          <div className='mx-auto mt-5 mb-2'><img src={tick} alt=""  className='w-8'/>
          </div>
          <div className='mx-auto'>
              <p className={`${styles.paragraphx}  mb-2`}> 
              Making a real impact by helping others achieve success!

              </p>
            </div>
         
          {/* card  */}
            {/* icons */}
        
          <div className='mx-auto mt-5 mb-2'><img src={tick} alt=""  className='w-8'/>
          </div>
          <div className='mx-auto'>
              <p className={`${styles.paragraphx}  mb-2`}> 
              Creating a legacy of wealth, health, and freedom for your future generations!

              </p>
            </div>
         
          {/* card  */}
          
    </section>

  )
}

export default Transformation
