import React from 'react'
import styles from '../style'
import { chess, coins } from '../assets'
 

const Hero = () => {
  return (

<<<<<<< HEAD
 <section className={`${styles.flexCenter} h-screen flex flex-col`}>
 <div class="flex min-h-screen bg-gray-100">

  <aside class="w-64 bg-white shadow-lg">
    <div class="p-4 text-xl font-bold border-b">My Dashboard</div>
    <nav class="mt-4">
      <a href="#" class="flex items-center p-3 hover:bg-gray-200">
        📦 <span class="ml-2">Inventory</span>
      </a>
      <a href="#" class="flex items-center p-3 hover:bg-gray-200">
        💰 <span class="ml-2">Credit</span>
      </a>
      <a href="#" class="flex items-center p-3 hover:bg-gray-200">
        💸 <span class="ml-2">Debit</span>
      </a>
      <a href="#" class="flex items-center p-3 hover:bg-gray-200">
        🧾 <span class="ml-2">Generate Invoice</span>
      </a>
    </nav>
  </aside>

 
  <main class="flex-1 p-6">
    <h1 class="text-2xl font-semibold mb-4">Welcome Back!</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white shadow rounded-lg p-4">Inventory data</div>
      <div class="bg-white shadow rounded-lg p-4">Credit data</div>
      <div class="bg-white shadow rounded-lg p-4">Debit data</div>
      <div class="bg-white shadow rounded-lg p-4">Invoices</div>
    </div>
  </main>
</div>

=======
 <section className={`${styles.flexCenter} md:h-[500px] h-auto flex flex-col`} id='hero'>
 
  {/* main text */}
         <div className='h-[40px]'></div>
         <div className={`${styles.heading1} `} >
         {/* <div className='h-[7vw] '>
      <img src={chess} alt="" />
    </div> */}
            <div className='md:h-[160px]  h-[160px] shadoww'></div>
        <h1 className=''>
        Do you lack   <span className='gold'>passive income?</span>  
        </h1>
         </div>
      
         <div className={`${styles.subHeading} shadoww`}>
         Let's help you build a financial leverage system
         </div>
  {/* main text */}
      
>>>>>>> e740b5fdc9944b11e5a878d23d77fb874d59e9c9
 </section>
  )
}

export default Hero
