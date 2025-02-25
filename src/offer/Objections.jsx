import React from 'react'
import styles from '../style'

const Objections = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col  mx-auto`}>

    <div className={`${styles.heading7} blue`}>
    Still Have Doubts? Let’s Address Them
    
    
        </div>  
        {/* head section */}
        <div className={`${styles.heading6} mt-10 mb-5 table mx-auto `}>
        "I Don’t Have the Money"
        </div>
    
        {/* head section */}
        {/* card 1 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col   mx-auto  tablegold `}> 
          <div className=''>
            
          
           <p className='noto text-start xs:text-[20px] text-[24px] text-black mt-2 mb-2'>
           If ₦70,000 is stopping you, isn’t that the exact reason you NEED this? Broke people stay broke because they let
           money control their decisions.
            </p> 
    
            {/* icons */}
          </div>
          
          </div>
          {/* card  */}
        {/* head section */}
        <div className={`${styles.heading6} mt-10 mb-5 table mx-auto `}>
        "I Need to Think About It"
        </div>
    
        {/* head section */}
        {/* card 1 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablegold  mx-auto  `}> 
          <div className=''>
            
          
           <p className='noto text-start xs:text-[20px] text-[24px] text-black mt-2 mb-2'>
           Thinking doesn’t change your situation—ACTION does. The only regret successful people have? Not starting
           sooner.

            </p> 
    
            {/* icons */}
          </div>
          
          </div>
          {/* card  */}
        {/* head section */}
        <div className={`${styles.heading6}  mt-10 mb-5 table mx-auto `}>
        "I’m Not Sure If It’ll Work for Me"
        </div>
    
        {/* head section */}
        {/* card 1 */}
        <div className={`${styles.flexStart} ${styles.paddingX} flex flex-col tablegold  mx-auto  `}> 
          <div className=''>
            
          
           <p className='noto text-start xs:text-[20px] text-[24px] text-black mt-2 mb-2'>
           Everyone who is winning in this business started where you are—with doubts. The difference? They took action.

            </p> 
    
            {/* icons */}
          </div>
          
          </div>
          {/* card  */}
       
          </section>
  )
}

export default Objections
