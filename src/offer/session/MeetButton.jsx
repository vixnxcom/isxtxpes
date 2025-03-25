import React from 'react'
import styles from '../../style'
import { Link } from 'react-router-dom'


const MeetButton = () => {
    return (
        <div className={`${styles.flexCenter} flex flex-col items-center justify-center mt-5 text-center`}>
            {/* card 1 */}
            <div className={`${styles.heading7} mt-5 text-white`}>
                Physical Q&A at our Head Office in Abuja
            </div>

            <div className={`${styles.paragraphx} text-white mt-5`}>
                If you're in Abuja, meet me in person at our head office and get all the clarity you need!
            </div>  

            <div className='mt-10 mb-10 flex flex-col items-center'>
                <div className={`${styles.subHeadingy} text-white`}>
                    Click below to book your session now!
                </div>
                <button className='mx-auto mt-10 border shadow bg-white md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw] flex items-center justify-center'>
                    <Link to='/meet' className='aeon-bold gold text-[20px]'>Schedule Meet</Link>
                </button>
            </div>
        </div>
    )
}

export default MeetButton
