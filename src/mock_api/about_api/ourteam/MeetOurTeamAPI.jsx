import React, { useEffect } from 'react'
import richard from '../../../assets/aboutimage/Richard.jpg'
import jonathan from '../../../assets/aboutimage/Jonathan_Grey.jpg'
import elsa from '../../../assets/aboutimage/Elsa.jpg'
import jonathan_doe from '../../../assets/aboutimage/Jonathan_Doe.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function MeetOurTeamAPI() {

    useEffect(() => {
        Aos.init({
            duration: 900
        });
    }, []);

    const MeetOurTeamAPI = [
        {
            id: 1,
            image: richard,
            name: 'Richard Sambrora',
            role: 'Full-stack Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Nulla facilisi. Sed ut elit et nunc.',
        },
        {
            id: 2,
            image: jonathan,
            name: 'Jonathan Grey',
            role: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Nulla facilisi. Sed ut elit et nunc.',
        },
        {
            id: 3,
            image: elsa,
            name: 'Elsa Walson',
            role: 'UI/UX Designer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Nulla facilisi. Sed ut elit et nunc.',
        },
        {
            id: 4,
            image: jonathan_doe,
            name: 'Jonathan Doe',
            role: 'Mobile Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Nulla facilisi. Sed ut elit et nunc.',
        },
    ]

  return (
   <main>
        <section className='w-full mt-3 pb-5'>
            <div className='max-w-5xl mx-auto grid md:grid-cols-4 gap-4'>
                {
                    MeetOurTeamAPI.map((team, index) => {
                        return (
                            <div
                            key={index} className='w-[90%] mx-auto rounded-lg bg-white mt-4 py-6 border shadow-gray-200 shadow-4xl border-gray-100  dark:bg-black dark:shadow-lg dark:shadow-[#615EAB] dark:border dark:border-gray-700' data-aos='zoom-in'>
                               <div className='w-36 h-36 mx-auto'>
                                    <img className='w-full h-full dark:shadow-md shadow-none dark:shadow-[#615EAB] object-cover rounded-full dark:border dark:border-gray-700' src={team.image} alt="" />
                               </div>
                                <div className=' text-gray-600 text-4xl mt-5'>
                                    <h1 className='text-xl text-center pop font-semibold text-gray-800 dark:text-white'>{team.name}</h1>
                                </div>
                                <p className='text-gray-500 mt-3 text-center pop text-sm dark:text-gray-300'>{team.role}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
   </main>
  )
}
