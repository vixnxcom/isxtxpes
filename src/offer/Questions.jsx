import React from 'react'
import styles from '../style'

const Questions = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col`} id='meetings'>


    {/* head section */}
    <div className={`${styles.heading5} text-white`}>
   Still have question? We got you covered!
    </div>

    
    <div className={`${styles.subHeadingy} text-white mt-5`}>
    I understand you might have a few questions before getting started, and that’s completely fine! That’s why I’ll be
    hosting
    </div>

    {/* card 1 */}
    <div className={`${styles.heading2} mt-5 text-white`}>
   Live Zoom Q&A sessions
    </div>

    <div className={`${styles.paragraphx} text-white`}>
    For those outside Abuja, join me on Zoom where I’ll personally break things
    down and answer all your questions!
    </div>
    {/* card 1 */}
    {/* card 1 */}
    <div className={`${styles.heading7} mt-5 text-white`}>
   Physical Q&A at our Head Office in Abuja
    </div>

    <div className={`${styles.paragraphx} text-white mt-5`}>
    If you're in Abuja, meet me in person at our
head office and get all the clarity you need!

    </div>
    {/* card 1 */}
    <div className={`${styles.subHeadingy} text-white mt-5`}>
    Click below to book your session now!
    </div>

</section>
  )
}

export default Questions
