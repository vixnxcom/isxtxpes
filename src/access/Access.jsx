import React from 'react'
import styles from '../style'

const Access = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>
    {/* head section */}
    <div className={`${styles.heading7} coal mt-5 `}>
    Access Pack
    </div>

    <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col  mx-auto mt-5 `}>
    <div className='aeon-bold gold  text-start xs:text-[20px] text-[24px] shadowy   mx-auto'>
    ₦69,990 
            </div> 
   
        
     
          <div className='mx-auto'>
              <p className={`${styles.paragraphx} tracking-wide coal mt-2 mb-2`}> 
              Eligible for full benefits
              </p>
            </div>
            </div>
     
     

    </section>
  )
}

export default Access