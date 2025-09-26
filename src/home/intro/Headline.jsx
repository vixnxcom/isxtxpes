import React from 'react'

const Headline = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-1 '>
        <div className='mx-auto '>
            <h1 className='aeon-bold text-black tracking-wider text-3xl flex flex-row gap-2'><span>
                <div className='w-3 h-3 bg-purple-600  mt-2 shadow-xl border border-purple-700 rounded-full'></div></span>
                Run Your <span className='text-purple-700'>Business Smoothly,</span>  All in One Place</h1>
        </div>
        <div className='max-w-6xl mt-5'>
         <p className='sm:px-16 px-6 inter '>
        Manage your products, payments, and invoices without the stress. 
        Our tools are designed to work together seamlessly, giving you more time to 
        focus on your customers.</p>
         <p className='sm:px-16 px-6 inter mt-5'>
       Get back to business by simplifying your daily tasks. Our four key features work together
        to give you a complete picture of your operations in one place.</p>
        </div>

          <h1 className='aeon-bold underline text-purple-700 tracking-wider text-2xl p-4 '>
              Features</h1>
              
    </div>
  )
}

export default Headline