import React, { useEffect } from 'react'
import content1_image from '../../../assets/aboutimage/web-design.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Conten01API() {

    useEffect(() => {
        Aos.init({
            duration: 900
        });
    }, []);

    const Conten01API = [
        {
            id: 1,
            image: content1_image,
            desc1: 'Welcome to Khodedev, where innovation meets excellence in software solutions. We are a passionate team of tech enthusiasts dedicated to crafting exceptional mobile and web applications tailored to meet the unique needs of our clients.',
            desc2: 'At Khodedev, we believe in the power of technology to transform ideas into reality. Our mission is to empower businesses and individuals with cutting-edge software solutions that drive growth, efficiency, and user satisfaction'        
        },
    ]
  return (
    <main>
        <section className='w-full'>
           
                {
                    Conten01API.map((content, index) => {
                        return (
                            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-4 md:px-5 lg:px-0' >
                                <div className='w-full h-72 md:h-[350px] px-5 md:px-0' data-aos='fade-right' >
                                    <img className='w-full h-full object-cover mx-auto rounded' src={content.image} alt="" />   
                                </div>
                                <div className='px-5 mx-auto md:pl-5 md:px-0' data-aos='fade-left'>
                                    <div className=''>
                                        <p className='pop text-[21px] md:text-[17px] lg:text-xl font-[400] text-gray-700 tracking-wide dark:text-white'>{content.desc1}</p>
                                        <p className='pop font-[300] text-[21px] mt-3 md:text-[17px] lg:text-[16px] xl:text-xl text-gray-500 dark:text-gray-400'>{content.desc2}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </section>
    </main>
  )
}
