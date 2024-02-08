
import React from 'react'
import web_dev_image from '../../../assets/service_image/web-development.jpg'
import web_design_image from '../../../assets/service_image/web-design.jpg'
import seo_and_marketing_image from '../../../assets/service_image/seo-and-marketing.jpg'

export default function ServiceHome_API() {
    const ServiceAPI = [
        {
            id: 1,
            image: web_dev_image,
            title: 'Web Development',
            description: 'This is how we can be sure your brand expands to',
        },
        {
            id: 2,
            image: web_design_image,
            title: 'Web Design',
            description: 'This is how we can be sure your brand expands to',
        },
        {
            id: 3,
            image: seo_and_marketing_image,
            title: 'SEO & Marketing',
            description: 'This is how we can be sure your brand expands to.',
        }
    ]
  return (
   <main>
        <section className='w-full'>
            <div className='grid md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
                {
                    ServiceAPI.map((service, index) => {
                        return (
                            <div key={index} className=' w-[90%] mx-auto bg-[#F5F7FA] rounded cursor-pointer border-none shadow-md shadow-gray-300 dark:bg-black dark:shadow-lg dark:shadow-[#615EAB] dark:border dark:border-gray-700' data-aos="fade-up">
                                <div className='w-full h-64 md:h-56'>
                                    <img className='w-full h-full object-cover mx-auto rounded-t' src={service.image} alt="" />   
                                </div>
                                <div className='p-6'>
                                    <h1 className='pop text-xl mt-3  font-semibold text-gray-700 tracking-wide dark:text-white'>{service.title}</h1>
                                    <p className='pop font-[300]  mt-3 text-lg text-gray-500 dark:text-gray-400'>{service.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
   </main>
  )
}
