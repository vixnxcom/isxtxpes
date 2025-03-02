import React from 'react'
import styles from '../style'
import { ppl } from '../assets'

const SuccessProof = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`}>


    {/* head section */}
    <div className={`${styles.heading1} `}>
  Proven Results & Success stories
    </div>

    {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
          <div className='flex flex-col gap-4 mt-2'>
            
          <div className='w-12 mt-2'>
                <img src={ppl} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Didi
            </div> 

            {/* icons */}
          </div>
        
              <p className={`${styles.paragraphy} mt-2 mb-5`}> "I was skeptical, but after following the roadmap, 
                I made my first N500,000 in just a few weeks!" –
              </p>
         
          </div>
          {/* card  */}
    {/* box */}
    {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
          <div className='flex flex-col gap-4 mt-2'>
            
          <div className='w-12 mt-2'>
                <img src={ppl} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Kamsy
            </div> 

            {/* icons */}
          </div>
        
              <p className={`${styles.paragraphy} mt-2 mb-5`}>
              "This system is the best decision I ever made! The roadmap showed me EXACTLY how to succeed!" –
              </p>
         
          </div>
          {/* card  */}
    {/* box */}
    {/* box */}
       {/* card 5 */}
       <div className={`${styles.paragraphy} ${styles.paddingX} mt-5  coal p-5 bg-white  w-[90vw] rounded-[24px] borderr 
         mx-auto  `}> 
          <div className='flex flex-col gap-4 mt-2'>
            
          <div className='w-12 mt-2'>
                <img src={ppl} alt=""  />
            </div>

           <div className='noto text-start xs:text-[20px] text-[24px] text-black mb-2'>
           Amb. Winner
            </div> 

            {/* icons */}
          </div>
        
              <p className={`${styles.paragraphy} mt-2 mb-5`}> "The step-by-step training is GOLD!
                 If you follow it, you WILL see results!" –
              </p>
         
          </div>
          {/* card  */}
    {/* box */}
    
    <div className={`${styles.subHeadingy} text-white mt-5`}>
    Yes! I Want My Success Plan NOW!

    </div>
   </section>
  )
}

export default SuccessProof
