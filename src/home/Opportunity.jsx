import React from 'react'
import styles from '../style'
import { build, earn, finance, products, protect, wealth } from '../assets'

const Opportunity = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col items-center mx-auto w-full`}>

      {/* head section */}
      <div className="text-center">
        <div className={`${styles.heading3}`}>
          Why This is the Only Opportunity
        </div> 
        <div className={`${styles.heading3}`}>
          You Need Right Now!
        </div> 
      </div>  
      {/* head section */}

      {/* card 1 */}
      <div className='flex flex-col mt-5 text-center justify-center items-center mx-auto'>
        <div className={`${styles.paddingX} coal p-5 bg-white w-[90vw] rounded-[24px] borderr mx-auto`}> 
          <img src={build} alt="" className='w-20 mt-5 mx-auto' /> 
          <div className='mt-2 p-4 '>
            <p className={`${styles.paragraphx}`}>Build a business for life with zero experience required</p>
          </div> 
        </div>      
      </div>
      {/* card */}

      {/* card 2 */}
      <div className='flex flex-col mt-5 text-center justify-center items-center mx-auto'>
        <div className='w-[90vw] mx-auto text-center bg-white rounded-[24px]'>
          <img src={earn} alt="" className='w-16 mt-5 mx-auto' /> 
          <div className='mt-2 p-4 '>
            <p className={`${styles.paragraphx}`}>Daily, weekly, and monthly earnings—no inventory or selling</p>
          </div> 
        </div>      
      </div>
      {/* card */}

      {/* card 3 */}
      <div className='flex flex-col mt-5 text-center justify-center items-center mx-auto'>
        <div className='w-[90vw] text-center bg-white rounded-[24px] mx-auto'>
          <img src={products} alt="" className='w-16 mx-auto mt-5 ' /> 
          <div className='mt-2 p-4 '>
            <p className={`${styles.paragraphx}`}>Access to wellness products that help reverse aging and boost immunity</p>
          </div> 
        </div>      
      </div>
      {/* card */}

      {/* card 4 */}
      <div className='flex flex-col mt-5 text-center justify-center items-center mx-auto'>
        <div className='w-[90vw] mx-auto text-center bg-white rounded-[24px]'>
          <img src={wealth} alt="" className='w-20 mx-auto mt-5' /> 
          <div className='mt-2 p-4 '>
            <p className={`${styles.paragraphx}`}>Generational wealth creation</p>
          </div> 
        </div>      
      </div>
      {/* card */}

      {/* card 5 */}
      <div className='flex flex-col mt-5 text-center justify-center items-center mx-auto'>
        <div className='w-[90vw] mx-auto text-center bg-white rounded-[24px]'>
          <img src={protect} alt="" className='w-16 mx-auto mt-5 ' /> 
          <div className='mt-2 p-4 '>
            <p className={`${styles.paragraphx}`}>100% proven system that works from anywhere in the world</p>
          </div> 
        </div>      
      </div>
      {/* card */}

    </section>
  )
}

export default Opportunity
