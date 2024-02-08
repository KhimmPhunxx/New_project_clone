import React, { useEffect, useState } from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Form, Modal, message } from 'antd'
import { GoCheckCircleFill } from "react-icons/go";
import { NavLink } from 'react-router-dom'


export default function ConstactPage() {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [content, setContent] = React.useState('')
  const [visible, setVisible] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceId = 'service_i6rwkks'
    const templateId = 'template_k3omclk'
    const publicKey = 'QIO9di3c0DIGy8ctZ'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'KhodeDev',
      message: content,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).
      then((responce) => {
        console.log('SUCCESS!', responce.status, responce.text)
        setName('')
        setEmail('')
        setContent('')
        // message.success('Your message has been sent successfully')
        setVisible(true)
       
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
      
  }

  useEffect(() => {
    Aos.init({ duration: 900 })
  }, [])

  return (
    <main className='py-5 dark:bg-black bg-gray-100 pb-5 px-3 md:px-0' data-aos='fade-up'>
       <section className='max-w-5xl mx-auto' >
          <h1 className='pop text-3xl md:text-[40px] font-semibold tracking-wide text-gray-700 px-5 lg:px-0 dark:text-white'>Contact Us</h1>
          <div className='w-full border-0 mt-4 md:mt-8 dark:border dark:border-gray-800 bg-white shadow-none pt-3 dark:shadow-lg dark:bg-black space-y-6 rounded p-8 md:p-8 dark:shadow-[#615EAB]'>
              <div className='flex border-b pb-3 border-gray-400 dark:border-gray-700 justify-center space-x-6 text-gray-800 dark:text-white'>
                  <a> <p className='pop font-[350] text-[14px] md:text-[15px] cursor-pointer'><i className="fa-solid fa-location-dot text-gray-500 mr-1 dark:text-gray-100"></i> Phnom Penh</p></a>
                  <a href="mailto:info@khodedev.com "><p className='pop font-[350] text-[14px] md:text-[15px]'><i className="fa-regular fa-envelope text-gray-500 mr-1 dark:text-gray-100"></i> info@khodedev.com </p></a>
              </div>
              <div className='text-gray-800 dark:text-gray-100 flex justify-center space-x-8 text-xl'>
                  <NavLink className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiFacebook /></NavLink>
                  <NavLink className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiInstagram /></NavLink>
                  <NavLink className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiTwitter /></NavLink>
                  <NavLink className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiLinkedin /></NavLink>
              </div>
          </div>
       </section>

       {/* form contact */}
       <section className='max-w-5xl mx-auto'>
          <div className='w-full border-0 mt-8 dark:border dark:border-gray-800 bg-white shadow-none pt-3 dark:shadow-lg dark:bg-black rounded p-4 md:p-8 dark:shadow-[#615EAB]'>
           
           <form 
            onSubmit={handleSubmit}
              
            className=' space-y-6' 
            action="">
            <div>
                  {/* <p className='text-gray-700 mt-4 dark:text-gray-300 text-md flex cursor-pointer pop'>Name *</p> */}
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full border p-4 text-gray-800 focus:border-0 focus:ring-2 focus:ring-[#615EAB] dark:text-gray-100 dark:bg-transparent dark:border-gray-700 rounded mt-1 pop'
                    placeholder='Full-Name' 
                    type="text" />
              </div>
              <div>
                  {/* <p className='text-gray-700 mt-4 dark:text-gray-300 text-md flex cursor-pointer pop'>Email *</p> */}
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full border p-4 text-gray-800 dark:text-gray-100 dark:bg-transparent dark:border-gray-700 rounded mt-1 pop' 
                    placeholder='Email Address' 
                    type="email" />
              </div>
                  <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='w-full h-40 border p-4 text-gray-800 dark:text-gray-100 dark:bg-transparent dark:border-gray-700 rounded mt-1 pop' 
                    placeholder='Content' 
                    type="text" />
              <button type='submit' className='p-4 pop text-white bg-[#615EAB] rounded mt-4'>Send Message</button>
              {/* <button onClick={()=> setVisible(true)} className='p-4 pop text-white bg-[#615EAB] rounded mt-4'>Send Message</button> */}
              
           </form>
          </div>
       </section>

       {/* google map */}
       <section className='max-w-full mx-auto mt-10'>
          <iframe className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.786181075803!2d104.87885677481727!3d11.567180388633783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109518025b67111%3A0x4c2997c19e2e8435!2z4Z6f4Z624Z6b4Z624Z6f4Z6E4Z-S4Z6A4Z624Z6P4Z-LIOGekeGeueGegOGekOGfkuGem-Getg!5e0!3m2!1skm!2skh!4v1707200985535!5m2!1skm!2skh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </section>

       <Modal
          open={visible}
          footer={null}
          onCancel={()=> setVisible(false)}
          width={350}
          
        >
          <div>
            <GoCheckCircleFill className='text-center mx-auto text-[100px] text-green-500' />
            <h1 className='text-center text-3xl font-meduim mt-3 text-blue-500 pop '>Success!</h1>
            <p className='text-center text-gray-500 pop'>Your message has been sent successfully</p>	
          </div>
          <Form.Item className='mt-3'>
            <div className='space-x-3 mt-3 mx-auto'>
                <button onClick={()=> setVisible(false)} className='mx-auto border pop bg-[#615EAB] w-full text-white Manrope text-xl uppercase px-4 py-2 rounded-md'>OK</button>
            </div>
           </Form.Item>
        </Modal>
      
    </main>
  )
}
