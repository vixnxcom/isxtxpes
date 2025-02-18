import React from 'react'
import styles from '../style'


const Rice = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col mb-10 mt-5 `}>

    {/* head section */}

    <div className={`${styles.subHeadingx} mt-2`}>
    <span className='aeon-bold text-[24px'>That Rice </span> you missed out on at a wedding or birthday party because you came late.
Your favorite pair of shoes from when you were a kid—the ones your mom searched for until she got tired.
<span className='aeon-bold text-[24px'>Money </span>that <span className='aeon-bold text-[24px'>'disappeared' </span> from your bag because you <span className='aeon-bold text-[24px'>trusted </span> the wrong person.


    </div>
    <div className={`${styles.subHeadingx} mt-2`}>
  
But then, you see something that shakes you to your core.
You see the <span className='aeon-bold text-[24px'>business opportunity </span>you ignored because you thought it was too risky and people told you it wouldn't
work.
You see the money you could have made if only you had started earlier.
You see <span className='aeon-bold text-[24px'> ₦3 million, ₦5 million,</span> even <span className='aeon-bold text-[24px'> ₦15 million,</span>  just sitting there—money that should have been in your account by
now.


    </div>

</section>
  )
}

export default Rice