import React from 'react'
import styles from '../style'

import { HashLink } from 'react-router-hash-link'

const PartnerButton = () => {
  return (
    <div className={`${styles.flexCenter} flex justify-content-center align-items-center mt-10`}>
    <div className=''>
    <button className='mx-auto bg-gold shadowx md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw]'>
    <HashLink to = '/register#topreg'
     className='aeon-bold text-black text-[20px]'>Become a Partner</HashLink>
    </button>
    </div>
</div>
  )
}

export default PartnerButton