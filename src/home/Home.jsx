import React from 'react'
import Title from './Title'
import Hero from './Hero'
import Button from './Button'
import Stats from './Stats'

const Home = () => {
  return (
     <div className="min-h-screen w-full bg-home
                    ">
                     
      <Title />
      <div className='  mx-8 '>
        <Hero />
      </div>
      <div className='flex flex-row gap-4'>

          <div className=' mx-8 '>
        <Button/>
         </div>
        <div>

          <Stats />
        </div>
       
      
      </div>
      
   
    </div>
  )
}

export default Home
