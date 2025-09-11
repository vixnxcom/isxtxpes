import React from 'react'
import { cloud } from '../assets'

const Title = () => {
  return (
   <div className="">
               <div className="flex flex-row mx-5">      
          <img src={cloud} alt="" className="w-11 h-8  mt-2" />
          <h1 className="text-blue-500 text-xl flex  mt-3 aeon-bold ">  
         ISXTOPES <span className="aeon-bold text-black tracking-wide mx-2">Enterprise Resource System</span>
         </h1>
          </div>
          <p className="inter text-gray-500 mx-20 mb-5">
        Your Entire Business, One Dashboard
          </p>
          </div>
  )
}

export default Title
