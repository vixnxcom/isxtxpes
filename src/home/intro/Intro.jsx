import React from 'react'
import Headline from './Headline'
import Invent from './Invent'
import Payment from './Payment'
import Dacct from './Dacct'
import Invio from './Invio'

const Intro = () => {
  return (
    <div>

      <div className='mt-24'>
         <Headline/>
      </div>
    
      <div className='flex flex-row justify-center items-center gap-8 mt-10'>
         <div className=' rounded-[14px] shadow-xs border border-purple-200 max-w-[470px] h-[470px]'>
        <Invent />
      </div>
         <div className=' rounded-[14px] shadow-xs border border-purple-200 max-w-[470px] h-[470px]'>
        <Payment />
      </div>
     
      </div>
      <div className='flex flex-row justify-center items-center gap-8 mt-20'>
      <div className=' rounded-[14px] shadow-xs border border-purple-200 max-w-[470px] h-[470px]'>
        <Dacct />
      </div>
          <div className=' rounded-[14px] shadow-xs border border-purple-200 max-w-[470px] h-[470px]'>
        <Invio />
      </div>
     
      </div>

    </div>
  )
}

export default Intro