import React from 'react'
import styles from '../style'
import Map from './Map'
import MeetButton from './session/MeetButton'
import ButtonS from './session/ButtonS'

const Questions = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex flex-col items-center text-center `} id='meetings'>
      
      {/* Head section */}
      <div className={`${styles.heading5} text-white`}>
        Still have questions? We've got you covered!
      </div>

      <div className={`${styles.subHeadingy} text-white mt-5`}>
        I understand you might have a few questions before getting started, and that’s completely fine! That’s why I’ll be
        hosting
      </div>

      {/* Button Sections */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <ButtonS />
        <MeetButton />
      </div>

      {/* Map Section */}
      <div className="flex justify-center items-center mx-auto mt-4">
        <Map />
      </div>

    </section>
  )
}

export default Questions
