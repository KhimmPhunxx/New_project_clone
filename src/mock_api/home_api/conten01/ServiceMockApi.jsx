import React from 'react'
import Training_Icon from '../../../icon/home_icon/training.png'
import Web_Icon from '../../../icon/home_icon/WebDeveloopment.webp'
import Mobile_Icon from '../../../icon/home_icon/MobileDevelopment.png'
import './ServiceApi.css'
import { TfiBlackboard } from "react-icons/tfi";


export default function ServiceMockApi() {

    const ServiceAPI = [
        {
            id: 1,
            icon: '📚',
            title: 'Training',
            description: 'Master Mobile and Web Development with our focused Course Training. Accelerate your skills for success.',
        },
        {
            id: 2,
            icon: '🌐',
            title: 'Web Development',
            description: 'Bringing your online vision to life with Khodedev expertise. We build dynamic and responsive websites tailored to your needs.',    
        },
        {
            id: 3,
            icon: '📱',
            title: 'Mobile Development',
            description: 'Empowering ideas with Khodedev. Crafting innovative, user-friendly mobile applications for seamless on-the-go experiences.',
        },
    ]
  return (
    <main>

        <section className='w-full'>
            <div className='grid md:grid-cols-3 max-w-5xl mx-auto gap-4'>
                {
                    ServiceAPI.map((service, index) => {
                        return (
                            <div key={index} className='mx-auto w-[90%] py-10 p-4 shadow-md shadow-gray-300 border border-gray-100 rounded-md dark:shadow-lg dark:shadow-[#615EAB] dark:border dark:border-gray-700' data-aos="fade-up">
                                <h1 className='text-5xl text-center mt-7 dark:text-white'>{service.icon} </h1>
                                <h1 className='pop text-md mt-5 text-center font-semibold text-gray-700 tracking-wide dark:text-white'>{service.title}</h1>
                                <p className='pop text-center mt-3 text-lg text-gray-500 dark:text-gray-300'>{service.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </main>
  )
}
