import React from 'react'
import styles from '../style'

const Imagine = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingX} flex flex-col mb-10 `}>

           {/* head section */}
       
           <div className={`${styles.subHeadingx} mt-2`}>
           Imagine You Found Everything You’ve Ever Lost...
You’re walking down your street one evening. NEPA just brought light, your neighbors' children are playing football,
and you're thinking about life.
Then, out of nowhere, you see something strange on the ground.
It's that ₦500 note that was stolen from you in class years ago. The exact one that pained you so much because you
were supposed to use it for lunch.

           </div>
           <div className={`${styles.subHeadingx}  mt-2 `}>

There, right at your feet, is your favorite toy from childhood—the one you cried over when you lost it.
You pick it up, heart racing. And then—right beside it—you see your first phone. The one that was stolen from you.
Your heart skips.
Then you see more.
           </div>
    </section>
  )
}

export default Imagine