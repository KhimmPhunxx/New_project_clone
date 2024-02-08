import React, { useEffect } from 'react'
import image1 from '../../../assets/service_image/image_service01.jpg'
import image2 from '../../../assets/service_image/image_service02.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ServicePageAPI02() {
    useEffect(() => {
        Aos.init({
            duration: 900
        });
    }, []);

  return (
    <main>
        <section className='p-5 lg:p-0'>
            <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto' data-aos='fade-up'>
               <div className='md:w-[90%] h-[400px]'>
                    <img className='w-full h-full object-cover rounded-lg' src={image1} alt="" />
               </div>
               <div>
                    <div className=''>
                        <h1 className='text-gray-800 dark:text-gray-100 pop text-xl font-bold'>Empowering your digital marketing strategy</h1>
                        <p className='text-gray-500 dark:text-gray-100 mt-4 text-md pop leading-8'>Minim recusandae, volutpat magna, class, adipiscing, quo id consectetuer duis anim nisl vehicula in, velit quis magna venenat. Convallis mollit delectus metus.</p>
                    </div>
                    {/* button */}
                    <button className='p-4 mt-10 bg-[#615EAB] rounded pop text-gray-100'>Read More</button>
               </div>
                
            </div>
            <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16' data-aos='fade-up'>
               <div className='w-[90%]'>
                    <div className=''>
                        <h1 className='text-gray-800 dark:text-gray-100 pop text-xl font-bold'>Beautiful website design with modern UI / UX</h1>
                        <p className='text-gray-500 dark:text-gray-100 mt-4 text-md pop leading-8'>Minim recusandae, volutpat magna, class, adipiscing, quo id consectetuer duis anim nisl vehicula in, velit quis magna venenat. Convallis mollit delectus metuc.</p>
                    </div>
                    {/* button */}
                    <button className='p-4 bg-[#615EAB] mt-10 rounded pop text-gray-100'>Read More</button>
               </div>
               <div className='w-full h-[440px] md:mt-[-130px]'>
                    <img className='w-full h-full object-cover rounded-lg' src={image2} alt="" />
               </div>
                
            </div>
        </section>
    </main>
  )
}
