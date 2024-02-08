import React from 'react'
import bgimage from '../../../assets/bgimage/banner4.webp'

export default function ConactUSAPI() {
  return (
    <main>
        <section className='max-w-full bg-cover bg-center bg-no-repeat bg-fixed'
            style={{backgroundImage: `url(${bgimage})`}}
        >
            <div className='w-full h-full bg-gray-400 bg-opacity-80 py-24'>
                <h1 className='pop text-5xl text-white font-semibold text-center'>Contact us</h1>
                <p className='pop text-center text-xl mt-10 text-white'>Have a question? We have all the answers.</p>
                <div className='flex justify-center mt-10'>
                    <button className='bg-[#615EAB] hover:bg-[#3b35a0] font-[400] duration-300 py-4 px-6 rounded-md pop text-white'>Contact us</button>
                </div>
            </div>

        </section>
    </main>
  )
}
