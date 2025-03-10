import React from 'react'
import HeadVid from './HeadVid'
import styles from '../style'
import Chinaza from './Chinaza'
import Elijah from './Elijah'
import Didi from './Didi'

const VidTestestimony = () => {
  return (
    <div className=' w-full'>


    <div className={`${styles.flexCenter}  `}>
<div className={`${styles.boxWidth}`}>
<HeadVid />

</div>
</div>
    <div className={`${styles.flexCenter}  `}>
<div className={`${styles.boxWidth}`}>
<Chinaza />

</div>
</div>
    <div className={`${styles.flexCenter}  `}>
<div className={`${styles.boxWidth}`}>
<Elijah />

</div>
</div>
    <div className={`${styles.flexCenter}  `}>
<div className={`${styles.boxWidth}`}>
<Didi />

</div>
</div>



</div>
  )
}

export default VidTestestimony
