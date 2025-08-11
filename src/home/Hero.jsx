import React from 'react'
import styles from '../style'
import Button from './Button'

const Hero = () => {
  return (

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

 </section>
  )
}

export default Hero
