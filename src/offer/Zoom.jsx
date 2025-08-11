import React from 'react'

const Zoom = () => {
  window.scrollTo(0, 0); // Scrolls to the top
  
  return (
    <section className="w-full bg-bluee flex justify-center mt-20 h-[1200px]" id='zoomm'>
      
        <div className='h-[80px]'></div>
      <iframe width='100%' height='1200px'
        src='https://thediamondproject.zohobookings.com/portal-embed#/4776482000000072011'
        frameborder='0' allowfullscreen='' > 
      </iframe>

    </section>
  )
}

export default Zoom
