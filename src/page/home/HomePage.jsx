import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import imag1 from '../../assets/homeImage/image01.png'
import ServiceMockApi from '../../mock_api/home_api/conten01/ServiceMockApi';
import Content_02 from '../../mock_api/home_api/content02/Content_02';
import ServiceHome_API from '../../mock_api/home_api/servicer/ServiceHome_API';
import ShowInfromatioOFWeb from '../../mock_api/home_api/listinformation/ShowInfromatioOFWeb';
import QuestionAndAnswer from '../../mock_api/home_api/question/QuestionAndAnswer';
import ConactUSAPI from '../../mock_api/home_api/contact/ConactUSAPI';
import MeetOurTeamAPI from '../../mock_api/about_api/ourteam/MeetOurTeamAPI';
import beach_image from '../../assets/homeImage/beach-landscape.jpg'
import './HomePage.css'

export default function HomePage() {
  

  useEffect(() => {
    AOS.init({
      duration: 900
    });
  }, []);
  return (
      <main className='relative'>
         <section className='w-full h-[620px] md:h-auto px-5 md:px-3 bg-[#F5F7FA] z-10 dark:bg-[#222222]'>
          <div className='grid max-w-6xl mx-auto md:grid-cols-2 h-[545px] pt-12 lg:pt-20' data-aos="fade-up">
              <div className='h-[80%] w-[90%]' >
                <h1 className='pop text-4xl font-bold text-gray-700 tracking-wide leading-[40px] md:leading-[60px] dark:text-white'>Shaping Futures with Expertly Crafted Software Solutions</h1>
                <p className='pop text-md mt-3 md:mt-8 text-gray-500 dark:text-gray-300'>We offer high speed, unparalleled security and 24/7 support.</p>
                <div className=' md:mt-5'>
                  <button className='bg-[#615EAB] font-[300] duration-300 px-4 py-4 lg:py-4 lg:px-6 rounded-md pop text-white mt-8'>Request demo</button>
                  <button className='bg-blue-100 hover:bg-gray-200 font-[400] duration-300 py-4 px-6 rounded-md pop text-[#615EAB] ml-2 md:ml-4 mt-8'>Schedule call</button>
                </div>
              </div>
              <div className=' md:h-[50%] mt-0 md:mt-28 lg:mt-0 lg:h-[80%] p-6 lg:p-4'>
                <img className='w-full h-full object-cover' src={imag1} alt="" />
              </div>
            </div>
         </section>
         <section className='w-full mt-10 md:mt-28 relative'>
              <div className='max-w-5xl mx-auto'>
                  <ServiceMockApi />
              </div>
             {/* create button scroll top */}
              {/* <ButtonScrollTop /> */}
          </section>
         <section className='max-w-5xl mx-auto mt-36'>
            <h1 className='pop text-[25px] text-center font-bold tracking-wide text-gray-700 dark:text-white'>Experience the Next Generation of Creativity</h1>
            <p className='pop text-center text-lg font-[300] mt-2 text-gray-500'>Elementum quia fugit cum euismod, varius hymenaeos.</p>
            <div className='mt-20'>
              <Content_02 />
            </div>
           
         </section>
         
         <section className='max-w-5xl mx-auto mt-20'>
            <h1 className='pop text-[25px]  text-center font-bold tracking-wide text-gray-700 dark:text-white'>Our Servive</h1>
            <p className='pop text-center text-lg font-[300] mt-2 text-gray-500'>Lorem ipsum is simply dummy text of the printing and typesetting</p>
            <div className='mt-10'>
                <ServiceHome_API />
            </div>
         </section>

         <section className='w-full mt-20 bg-[#F5F7FA]'>
           <ShowInfromatioOFWeb />
         </section>

         <section className='w-full mt-10 bg-[#F5F7FA] py-14 dark:bg-black'>
          	<h1 className='pop text-[30px] text-center font-bold tracking-wide text-gray-700 dark:text-white'>Frequently Asked Questions</h1>
             <QuestionAndAnswer />
         </section>

         <section className='w-full mt-10 bg-[#F5F7FA]'>
            <ConactUSAPI />
         </section>

         <section className='w-full pt-20 bg-[#F5F7FA] dark:bg-black pb-5'>
          	<h1 className='pop text-[30px] text-center font-bold tracking-wide text-gray-700 dark:text-white'>Meet Our Team</h1>
            <p className='pop text-center text-lg font-[400] mt-5 text-gray-500'>Meet our team of dedicated professionals</p>
            <MeetOurTeamAPI />
              <section className='max-w-5xl mx-auto pt-20 bg-[#F5F7FA] dark:bg-black' data-aos="fade-up">
                <h1 className='pop text-[30px] text-center font-bold tracking-wide text-gray-700 dark:text-white'>Latest from the Blog</h1>
                <div className='grid md:grid-cols-2 lg:mt-5'>
                  <div className='h-[400px] p-5 lg:p-0' data-aos='fade-down'>
                    <img className='w-full h-full object-cover rounded' src={beach_image} alt="" />
                  </div>
                  <div className='w-[95%] ml-[5%] py-5 lg:py-24 px-5' data-aos='fade-up'>
                      <button className='bg-[#615EAB] pop text-white px-3 p-2 rounded'>Long Read</button>
                      <h1 
                      style={{transition: '0.2s'}}
                      className='pop menubar013 hover:underline cursor-pointer relative text-3xl font-semibold leading-10 mt-5 text-black dark:text-white'>Finding Beauty in Negative Spaces</h1>
                      <p className='mt-5 text-gray-500 pop text-lg'>Getting into colleges and universities in America is now the rat race to end all rat races, certainly among the middle classes.</p>
                  </div>
                </div>
            
            </section>
         </section>
  
      </main>
  )
}
