import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiLinkedin, FiMenu, FiMoon, FiSun, FiTwitter } from "react-icons/fi";
import './LayoutPage.css'
import logo from '../../assets/logo/logo.jpg'
import logo_white from '../../assets/logo/logo_white.png'
import ScrollToTop  from 'react-scroll-to-top';

export default function LayoutPage() {
    const navigate = useNavigate();

    const onLeftMenu = () => {
        const menuLeft = document.getElementById('menuLeft');
        const leftmenu = document.querySelector('#leftMenu');
        leftmenu.classList.toggle('active');
        if(leftmenu.classList.contains('active')){
           menuLeft.innerHTML = '<i class="fa-solid fa-xmark text-xl text-[#615EAB] dark:text-gray-100"></i>';
        }
        else{
           menuLeft.innerHTML = '<i class="fa-solid fa-bars text-xl text-[#615EAB] dark:text-gray-100"></i>';
        }
        const menu = document.querySelectorAll('#menu');
        menu.forEach((item)=>{
            item.addEventListener('click', function(){
                leftmenu.classList.remove('active');
                menuLeft.innerHTML = '<i class="fa-solid fa-bars text-xl text-[#615EAB] dark:text-gray-100"></i>';
            })
        })

    }
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    }

    const toggleThemeToLight = () => {
        // change to light theme when computer on darkmode
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            document.documentElement.classList.remove('dark');
        }
        else{
            document.documentElement.classList.add('dark');
        }
    }


  return (
    <main className='w-full bg-white dark:bg-black'>
         <ScrollToTop 
            smooth 
            style={{backgroundColor: '#615EAB', width: '40px', height: '40px', borderRadius: '50%', boxShadow: '2px 2px 10px 2px rgba(255,255,255,0.5)', fontSize: '10px', color: '#ffff' , padding: '10px'}}
            top={200}
            color='#ffff'
            height='20px'
            width='20px'
         />
           <div className='w-full h-full bg-white border-0 dark:border-b dark:border-gray-700 dark:bg-black'>
            <nav className='max-w-6xl md:px-3 mx-auto md:flex justify-between py-2.5 hidden z-50'>
                    <div className='flex space-x-6 text-gray-800 dark:text-white'>
                        <a> <p className='pop font-[350] text-[15px] cursor-pointer'><i className="fa-solid fa-location-dot text-gray-500 mr-1 dark:text-gray-100"></i> Phnom Penh</p></a>
                        <a href="mailto:info@khodedev.com "><p className='pop font-[350] text-[15px]'><i className="fa-regular fa-envelope text-gray-500 mr-1 dark:text-gray-100"></i> info@khodedev.com </p></a>
                    </div>
                    <div className='flex space-x-8 text-gray-600 text-[17px] dark:text-white'>
                        <a href=""><FiFacebook /></a>
                        <a href=""><FiInstagram /></a>
                        <a href=""><FiTwitter /></a>
                        <a href=""><FiLinkedin /></a>
                    </div>
                </nav>
           </div>
            <header className='w-full bg-white dark:bg-black z-40 sticky shadow-none top-0 dark:shadow-md dark:shadow-gray-700'>
                <div className='w-full border-gray-100 border dark:border-0 '>
                    <nav className='max-w-6xl mx-auto relative'>
                        <div className='max-w-5xl px-5 lg:px-3 lg:max-w-6xl mx-auto flex justify-between py-4'>
                            <div className='flex space-x-6 w-14 h-10 dark:hidden'>
                                <NavLink to=""><img className='w-full h-full object-cover rounded' src={logo} alt="" /></NavLink>
                            </div>
                            <div className='hidden dark:flex space-x-6 w-14 h-10'>
                                <NavLink to=""><img className='w-full h-full object-cover rounded' src={logo_white} alt="" /></NavLink>
                            </div>
                            <div className='md:flex  lg:space-x-6 hidden'>
                                <div className='flex md:space-x-3 lg:space-x-8 p-2 dark:text-white' >
                                        <NavLink to='' className={({isActive})=> isActive ? 'pop menubar_active font-[400] text-[#615EAB] text-[16px] relative px-2' : "pop menubar hover:text-[#615EAB] font-[400] text-gray-700 text-[16px] relative px-2 dark:text-white"} >Home</NavLink>
                                        <NavLink to='about' className={({isActive})=> isActive ? 'pop  menubar_active px-2 relative font-[400] text-[#615EAB] text-[16px]' : 'pop menubar hover:text-[#615EAB] font-[400] text-gray-700 text-[16px] relative px-2 dark:text-white'}>About</NavLink>
                                        <NavLink to='service' className={({isActive})=> isActive ? 'pop menubar_active px-2 relative font-[400] text-[#615EAB] text-[16px]' : 'pop menubar hover:text-[#615EAB] font-[400] text-gray-700 text-[16px] relative px-2 dark:text-white'}>Service</NavLink>
                                        <NavLink to='blog' className={({isActive})=> isActive ? 'pop menubar_active px-2 relative font-[400] text-[#615EAB] text-[16px]' : 'pop menubar hover:text-[#615EAB] font-[400] text-gray-700 text-[16px] relative px-2 dark:text-white'}>Blog</NavLink>
                                        <div>
                                            <NavLink onClick={()=> toggleTheme()}  ><p className='pop font-[400] text-gray-800 hover:text-[#615EAB] duration-300 block dark:hidden'><FiSun className='text-[20px] mt-1' /></p></NavLink>
                                            <NavLink  onClick={()=> toggleThemeToLight()} ><p className='pop font-[400] hover:text-[#615EAB] duration-300 hidden dark:block'><FiMoon className='text-[20px] mt-1' /></p></NavLink>
                                        </div>
                                </div>
                                    <button onClick={()=> navigate('contact')} className='hover:bg-[#615EAB] bg-blue-50 font-[400] duration-300 py-1 px-4 rounded pop text-[#615EAB] hover:text-white dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-[#615EAB]'>Contact</button>
                            </div>
                            <button onClick={()=> onLeftMenu()} id='menuLeft' className='hover:shadow z-50 block md:hidden hover:border border bg-blue-50 font-medium duration-300 px-4 rounded pop text-[#615EAB] dark:border-0 dark:bg-gray-700'>
                                <i className="fa-solid fa-bars text-xl text-[#615EAB] dark:text-gray-100"></i>
                            </button>
                        </div>
                    </nav>
                </div>
                <nav id='leftMenu' className='absolute opacity-0 lg:hidden duration-500 left-[-100%] top-0 w-full h-screen bg-[#615EAB] dark:bg-black'>
                    <div className='w-full mt-8 menu'>
                        <div className='p-2 w-full py-10 px-6 space-y-4'>
                            <div>
                                    <NavLink to='' id='menu' className={({isActive})=> isActive ? 'pop p-2 font-[400] text-[#615EAB] block bg-gray-100 text-[16px] w-full rounded' : 'pop w-full block p-2 duration-300 rounded hover:text-[#615EAB] hover:bg-gray-100 font-[400] text-gray-100 text-[16px]'}>Home</NavLink>
                            </div>
                                <div >
                                    <NavLink to='about' id='menu' className={({isActive})=> isActive ? 'pop p-2 font-[400] text-[#615EAB] block bg-gray-100 text-[16px] w-full rounded' : 'pop w-full block p-2 duration-300 rounded hover:text-[#615EAB] hover:bg-gray-100 font-[400] text-gray-100 text-[16px]'}>About</NavLink>
                                </div>
                                <div>
                                    <NavLink to='service' id='menu' className={({isActive})=> isActive ? 'pop p-2 font-[400] text-[#615EAB] block bg-gray-100 text-[16px] w-full rounded' : 'pop w-full block p-2 duration-300 rounded hover:text-[#615EAB] hover:bg-gray-100 font-[400] text-gray-100 text-[16px]'}>Service</NavLink>
                                </div>
                                <div>
                                    <NavLink to='blog' id='menu' className={({isActive})=> isActive ? 'pop p-2 font-[400] text-[#615EAB] block bg-gray-100 text-[16px] w-full rounded' : 'pop w-full block p-2 duration-300 rounded hover:text-[#615EAB] hover:bg-gray-100 font-[400] text-gray-100 text-[16px]'}>Blog</NavLink>
                                </div>
                            
                                <div>
                                    <NavLink href="" onClick={()=>toggleTheme()} id='menu'><p className='pop hover:bg-gray-100 w-9 rounded font-[400] p-2 hover:text-[#615EAB] text-white duration-300 block dark:hidden'><FiSun className='text-[20px] mt-1' /></p></NavLink>
                                    <NavLink href="" onClick={()=>toggleTheme()} id='menu'><p className='pop hover:bg-gray-100 w-9 rounded font-[400] p-2 hover:text-[#615EAB] text-white duration-300 hidden dark:block'><FiMoon className='text-[20px] mt-1' /></p></NavLink>
                                </div>
                                <div >
                                    <button onClick={()=> navigate('contact')} id='menu' className='border w-full mt-2 font-medium duration-300 py-6 rounded pop text-gray-100 dark:bg-transparent'>Contact</button>
                                </div>
                                <div>
                                    <div id='menu' className='mt-10 border-b border-gray-100'></div>
                                </div>
                                <div className='flex space-x-6'>
                                    <a > <p className='pop px-4 cursor-pointer mt-4 font-[350] text-gray-100 text-[15px]'><i className="fa-solid fa-location-dot text-gray-300 mr-1"></i> Phnom Penh</p></a>
                                    <a href="mailTo:info@khodedev.com"><p className='pop font-[350] mt-4 text-gray-100 text-[15px]'><i className="fa-regular fa-envelope text-gray-300 mr-1"></i> info@khodedev.com </p></a>
                                </div>
                                <div>
                                    <div className='mt-7 border-b border-gray-100'></div>
                                </div>
                                <div className='flex space-x-6'>
                                    <div className='flex space-x-8 text-[17px] mt-5 px-4'>
                                        <a href="" className='text-gray-100'><FiFacebook /></a>
                                        <a href="" className='text-gray-100'><FiInstagram /></a>
                                        <a href="" className='text-gray-100'><FiTwitter /></a>
                                        <a href="" className='text-gray-100'><FiLinkedin /></a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
            <footer className='w-full bg-black'>
                <div className='border-t-0 dark:border-t py-8 max-w-6xl mx-auto'>
                <div className='flex justify-center space-x-8 text-center text-[20px] px-4'>
                    <a href="" className='text-white'><FiFacebook /></a>
                    <a href="" className='text-white'><FiInstagram /></a>
                    <a href="" className='text-white'><FiTwitter /></a>
                    <a href="" className='text-white'><FiLinkedin /></a>
                </div>
                <section className='max-w-6xl h-full mx-auto grid md:grid-cols-4 mt-5'>
                    <div className='border-r p-4 py-8'>
                        <h1 className='pop text-white text-[20px] font-bold'>Prespa</h1>
                        <p className='pop text-white mt-5'>KhodeDev | Unlocking Possibilities in Software Solutions. Unleashing Innovative Solutions Through Expertly Crafted Software Excellence.</p>
                    </div>

                    <div className='border-r px-8 p-4 py-8'>
                        <h1 className='pop text-white text-[20px] font-bold'>Need Help?</h1>
                        <div className='mt-5 space-y-4'>
                            <div>
                                 <a href="" className='pop underline text-white text-md font-[300]'>Support</a>
                            </div>
                            <div>
                                <a href="" className='pop underline text-white text-md font-[300]'>Get Started</a>
                            </div>
                            <div>
                                <a href="" className='pop underline text-white text-md font-[300]'>Term of Use</a>
                            </div>
                            <div>
                                <a href="" className='pop underline text-white text-md font-[300]'>Privacy Policy</a>
                            </div>
                        </div>
                    </div>

                    <div className='border-r px-8 p-4 py-8'>
                        <h1 className='pop text-white text-[20px] font-bold'>Learn More</h1>
                        <div className='mt-5 space-y-4'>
                            <div>
                                 <NavLink href="" className='pop underline text-white text-md font-[300]'>About Us</NavLink>
                            </div>
                            <div>
                                <NavLink href="" className='pop underline text-white text-md font-[300]'>Service</NavLink>
                            </div>
                            <div>
                                <NavLink href="" className='pop underline text-white text-md font-[300]'>Customer</NavLink>
                            </div>
                            <div>
                                <NavLink href="" className='pop underline text-white text-md font-[300]'>Newsletter</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='px-8 p-4 py-8'>
                        <h1 className='pop text-white text-[20px] font-bold'>Get in Touch</h1>
                        <div className='mt-5 space-y-4'>
                            <div>
                                <p className='pop text-white text-md font-[300]' >Phnom Penh, Cambodia</p>
                            </div>
                            <div>
                                <a href="mailto:info@khodedev.com" className='pop underline text-white text-md font-[300]'>info@khodedev.com</a>
                            </div>
                            <div>
                                <p className='pop text-white text-md font-[300]' >Opening Hours: 8:00 - 17:00</p>
                            </div>
                            
                        </div>
                    </div>
                </section>
                    <p className='pop text-center mt-8 text-white text-md font-[300]' >© 2023 khodedev. All rights reserved.</p>
                </div>
                
            </footer>
    </main>
    )
}
