import React, { useEffect, useState } from 'react'
import { GoHome, GoPeople } from "react-icons/go";
import { TbCheckbox } from "react-icons/tb";
import { LuUserCheck } from "react-icons/lu";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



export default function ShowInfromatioOFWeb() {

    const [counterOn, setCounterOn] = useState(false);
    
    const ShowInfromatio = [
        {
            id: 1,
            icon : <GoHome />,
            number: "2017",
            desc: "Since"
        },
       
    ]
    const TeamMember  = [
        {
            id: 2,
            icon : <GoPeople />,
            number: "50",
            desc: "Team Members"
        },
        {
            id: 3,
            icon : <TbCheckbox />,
            number: "100",
            desc: "Project Done"
        },
        {
            id: 4,
            icon : <LuUserCheck />,
            number: "90",
            desc: "Happy Client"
        },
    ]
    // const ProjectDone = [
    //     {
    //         id: 3,
    //         icon : <TbCheckbox />,
    //         number: "100",
    //         desc: "Project Done"
    //     },
    // ]
    // const HappyClient = [
    //     {
    //         id: 4,
    //         icon : <LuUserCheck />,
    //         number: "90",
    //         desc: "Happy Client"
    //     },
    // ]


  return (
    <main>
        <section className='w-full mt-20 bg-[#F5F7FA] dark:bg-black'>
            <div className='max-w-5xl mx-auto grid md:grid-cols-4 border-y-0 dark:border-y'>
                
                 {/* Since */}
                    {
                        ShowInfromatio.map((info, index) => {
                            return (
                                <div className='w-[90%] p-4 mx-auto space-y-4 rounded-lg py-12' >
                                    <div className='flex text-gray-600 text-4xl items-center justify-center dark:text-gray-100'>
                                        {info.icon}
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <h1 className='pop text-4xl font-semibold text-gray-700 tracking-wide leading-[60px] dark:text-gray-100'>{info.number}</h1>
                                    </div>
                                    <p className='pop text-center text-xl text-gray-700 dark:text-gray-400'>{info.desc}</p>
                                </div>
                            
                            )
                        })
                    }

                {/* 3 list more */}
                   {
                        TeamMember.map((info, index) => {
                            return (
                                <div className='w-[90%] p-4 mx-auto space-y-4 rounded-lg py-12' >
                                    <div className='flex text-gray-600 text-4xl items-center justify-center dark:text-gray-100'>
                                        {info.icon}
                                    </div>
                                    <div className='flex items-center justify-center '>
                                        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
                                            <h1 className='pop text-4xl font-semibold text-gray-700 tracking-wide leading-[60px] dark:text-gray-100'>
                                            {counterOn ? <CountUp end={info.number} duration={10} /> : 0 }+
                                            </h1>
                                        </ScrollTrigger>
                                    </div>
                                    <p className='pop text-center text-xl text-gray-700 dark:text-gray-400'>{info.desc}</p>
                                </div>
                            
                            )
                        })
                    }

                
            </div>
         </section>
    </main>
  )
}
