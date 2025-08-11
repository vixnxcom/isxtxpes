import React from 'react'
import styles from '../style'
import { hand, vlogo } from '../assets'

const HeadForm = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col`} id='topreg'>
        <div className='md:h-[160px] bg-blue  h-[160px] shadoww'></div>

    <div className=''>

    <div className={`${styles.heading1}  shadow`}>
            Become a Partner Today
             </div>

              <img src={vlogo} alt="" className='w-50 mx-auto mb-5'/>
             </div>
             {/* head section */}
         
           
          {/* head section */}
  
        </section>  
  )
}

export default HeadForm
