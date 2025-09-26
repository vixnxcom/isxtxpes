import React from 'react'
import Title from './Title'
import Hero from './Hero'
import Button from './Button'
import Stats from './Stats'
import Intro from './intro/Intro'
import Foot from './foot/Foot'

const Home = () => {
  return (
     <div className="min-h-screen   w-full  max-w-7xl md:mx-auto
                    ">
                     
      <Title />
      <div className='  mx-8 '>
        <Hero />
      </div>
      <div className='flex flex-row gap-4'>

       
   <div className=' mx-auto p-5'>
        <Button/>
         </div>

        <div className=' w-[58vw] mx-auto'>
          <Stats />
        </div>

        

      </div>
        
       <div className='w-full mx-auto'>
        <Intro />
       </div>
  
   <div className='bluish mx-auto bottom-0 mt-20 rounded-t-[200px]'>
    <Foot />
   </div>



    </div>
  )
}

export default Home
