import React from 'react'
import styles from '../../style'
import { best } from '../../assets'


const Brief = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col mt-5`}>
    {/* head section */}
    {/*  */}
    {/* card 1 */}
    <div className={`${styles.heading7} flex flex-row gap-4  blue`}> <span className='mt-4'><img src={best} alt="" className='w-8'/></span>
   Step 1.
    </div>
   
    <div className={`${styles.subHeadingxy} coal`}>
  Check your Email and Save a copy of the form sent to your Inbox to be presented for further registrations
    </div>
    {/* card 1 */}
    {/* card 1 */}
    <div className={`${styles.heading7} mt-5 flex flex-row gap-4 blue`}> <span className='mt-4'><img src={best} alt="" className='w-8'/></span>
   Step 2.
    </div>
   
    <div className={`${styles.subHeadingxy} coal`}>
Join our Telegram and WhatsApp groups
    </div>
    {/* card 1 */}
    {/* card 1 */}
    <div className={`${styles.heading7} mt-5 flex flex-row gap-4 blue`}> <span className='mt-4'><img src={best} alt="" className='w-8'/></span>
   Step 3.
    </div>
   
    <div className={`${styles.subHeadingxy} coal`}>
Click the buttons below to activate groups
    </div>
    {/* card 1 */}
    </section>
  )
}

export default Brief
