import React, { useEffect } from 'react'
import image02 from '../../../assets/homeImage/image02.png'
import image03 from '../../../assets/homeImage/image03.png'
import image04 from '../../../assets/homeImage/image04.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Content_02() {
    useEffect(() => {
        AOS.init({
          duration: 900
        });
      }, []);
    const content02_01 = [
        {
            id: 1,
            image: image02,
            title: 'Beautiful website design with modern UI',
            description: 'Minim recusandae, volutpat magna, class, adipiscing, quo id consectetuer duis anim nisl vehicula in, velit quis magna venenat. Convallis mollit delectus metus rem, morbi ac. Quaerat cupidatat minim, pellentesque do urna.',
        }
    ]
    const content02_02 = [
        {
            id: 2,
            image: image03,
            title: 'Empowering your digital marketing strategy',
            description: 'Minim recusandae, volutpat magna, class, adipiscing, quo id consectetuer duis anim nisl vehicula in, velit quis magna venenat. Convallis mollit delectus metus rem, morbi ac. Quaerat cupidatat minim, pellentesque do urna.',
        }
    ] 
    const content02_03 = [
        {
            id: 3,
            image: image04,
            title: 'Take your brand to next level design concept.',
            description: 'Minim recusandae, volutpat magna, class, adipiscing, quo id consectetuer duis anim nisl vehicula in, velit quis magna venenat. Convallis mollit delectus metus rem, morbi ac. Quaerat cupidatat minim, pellentesque do urna.',
        },
    ]

    
    
            
  return (
   <main>
         <section className='w-full '>
              {
                content02_01.map((content, index) => {
                    return (
                        <div key={index} className='max-w-5xl mx-auto grid sm:grid-cols-2 gap-4 mt-10' data-aos="fade-up">
                            <div className='w-full sm:h-[310px] md:h-[330px] lg:h-auto p-3'>
                                <img className='w-full h-full object-cover' src={content.image} alt="" />
                            </div>
                            <div className='w-[100%] p-3'>
                                <div className='lg:h-64'> 
                                    <h1 className='pop text-xl font-semibold text-gray-700 tracking-wide dark:text-gray-100'>{content.title}</h1>
                                    <p className='pop mt-3 text-gray-500 leading-8 dark:text-gray-400'>{content.description}</p>
                                </div>
                                <button className='bg-[#615EAB] hover:bg-[#727099] font-[300] duration-300 py-4 px-6 rounded-md pop text-white mt-8'>Read More</button>
                            </div>
                        </div>
                    )
                })
              }

                {
                    content02_02.map((content, index) => {
                        return (
                            <div key={index} className='max-w-5xl mx-auto grid md:grid-cols-2 gap-4 mt-20' data-aos="fade-up">
                                <div className='w-[100%] p-3'>
                                    <div className='lg:h-64'> 
                                        <h1 className='pop text-xl font-semibold text-gray-700 tracking-wide dark:text-gray-100'>{content.title}</h1>
                                        <p className='pop mt-3 text-gray-500 leading-8 dark:text-gray-400'>{content.description}</p>
                                    </div>
    
                                    <button  className='bg-[#615EAB] hover:bg-[#727099] font-[300] duration-300 py-4 px-6 rounded-md pop text-white mt-8'>Read More</button>
                                </div>
                                <div className='w-full p-3 sm:h-[310px] md:h-[325px] lg:h-auto'>
                                    <img className='w-full h-full object-cover' src={content.image} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
    
                {
                    content02_03.map((content, index) => {
                        return (
                            <div key={index} className='max-w-5xl mx-auto grid md:grid-cols-2 gap-4 mt-20' data-aos="fade-up">
                                <div className='w-full p-3 sm:h-[310px] md:h-[330px] lg:h-auto'>
                                    <img className='w-full h-full object-cover' src={content.image} alt="" />
                                </div>
                                <div className='w-[100%] p-3'>
                                    <div className='lg:h-64'> 
                                        <h1 className='pop text-[19px] font-semibold text-gray-700 tracking-wide dark:text-gray-100'>{content.title}</h1>
                                        <p className='pop mt-3 text-gray-500 leading-8 dark:text-gray-400'>{content.description}</p>
                                    </div>
    
                                    <button className='bg-[#615EAB] hover:bg-[#727099] font-[300] duration-300 py-4 px-6 rounded-md pop text-white mt-8'>Read More</button>
                                </div>
                            </div>
                        )
                    })
                }


         </section>
         
   </main>
  )
}
