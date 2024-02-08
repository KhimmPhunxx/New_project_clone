import React from 'react'
import ServicePageAPI from '../../mock_api/servive_api/ServicePageAPI'
import ServicePageAPI02 from '../../mock_api/servive_api/content2serviceapi/ServicePageAPI02'
import './ServicePage.css'

export default function ServicePage() {
  return (
    <main className='bg-white dark:bg-black'>
      <section className='max-w-full mx-auto mt-3'>
       <div className='max-w-5xl mx-auto'>
          <h1 className='pop text-[30px] font-semibold tracking-wide text-gray-700 px-5 lg:px-0 dark:text-white'>Services</h1>
       </div>
        <div className='max-w-full mx-auto bg-[#F5F7FA] pb-20 dark:bg-black mt-5'>
          <p className='text-gray-800 dark:text-gray-100 pop text-center pt-5 text-xl'>Services</p>
          <p className='text-gray-800 dark:text-gray-100 pop text-center mt-3 text-3xl font-bold'>The Solutions We Offer</p>
          <p className='text-gray-800 dark:text-gray-100 pop text-center mt-5 text-md'>Building a reliable software application is not a one-off assignment. It requires grid and resilience.</p>
          <div className='mt-14'>
          <ServicePageAPI />
          </div>
          <section className='max-w-full mx-auto mt-16 border-t border-gray-300 dark:border-gray-700'>
            <div className='max-w-full mx-auto bg-[#F5F7FA] dark:bg-black mt-16'>
              <p className='text-gray-800 dark:text-gray-100 pop text-center mt-3 text-3xl font-bold'>Take your idea to the next level</p>
              <p className='text-gray-800 dark:text-gray-100 pop text-center mt-5 text-md'>Unleash the power of creativity</p>
              <div className='mt-14'>
                <ServicePageAPI02 />
              </div>
            </div>
          </section>
        </div>
      </section>


     
   </main>
  )
}
