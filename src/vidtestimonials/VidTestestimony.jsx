import React from 'react'
import HeadVid from './HeadVid'
import styles from '../style'
import Chinaza from './Chinaza'
import Elijah from './Elijah'
import Didi from './Didi'
import Ozani from './Ozani'
import Abba from './Abba'
import Car from './Car'

const VidTestestimony = () => {
  return (
    <div className=' w-full' id='vtestimonials'>


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

    <div className={`${styles.flexCenter}  `}>
<div className={`${styles.boxWidth}`}>
<Ozani />

</div>
</div>

    <div className={`${styles.flexCenter}  `}>
<div className={`${styles.boxWidth}`}>
<Abba />

</div>
</div>

    <div className={`${styles.flexCenter}  `}>
<div className={`${styles.boxWidth}`}>
<Car />

</div>
</div>



</div>
  )
}

export default VidTestestimony
