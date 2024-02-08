import React from 'react'
import './AboutPage.css'
import MeetOurTeamAPI from '../../mock_api/about_api/ourteam/MeetOurTeamAPI'
import Conten01API from '../../mock_api/about_api/content01/Conten01API'

export default function AboutPage() {
  return (
   <main className='bg-white dark:bg-black'>
      <section className='max-w-5xl mx-auto mt-3'>
        <h1 className='pop text-[30px] font-semibold tracking-wide text-gray-700 px-5 lg:px-0 dark:text-white'>About Us</h1>
        <div className='border-t border-gray-300 dark:border-gray-800 mt-2 mx-5 lg:mx-0'></div>
        <div className='mt-5'>
         <Conten01API />
        </div>
      </section>

      <section className='w-full pt-20 bg-white dark:bg-black pb-20'>
          	<h1 className='pop text-[30px] text-center font-bold tracking-wide text-gray-700 dark:text-white'>Meet Our Team</h1>
            <p className='pop text-center text-lg font-[400] mt-5 text-gray-500'>Meet our team of dedicated professionals</p>
            <MeetOurTeamAPI />
         </section>
   </main>
  )
}
