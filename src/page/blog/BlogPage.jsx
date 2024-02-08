import React, { useEffect, useState } from 'react'
import './BlogPage.css'
import { LuCalendar } from "react-icons/lu";
import author from '../../assets/blog/author.png'
import { GoComment, GoEye, GoHeart, GoHeartFill, GoStopwatch } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function BlogPage() {
  const [ like, setLike ] = useState(12)
  const [isLike, setIsLike] = useState(false)
  const naviagte = useNavigate()

  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1))
    setIsLike(!isLike)
  }

  useEffect(() => {
    Aos.init({
      duration: 900
    });
  }, []); 

  const AuthorAPI = [
    {
      id: 1,
      image: author,
      name: 'chornthorn',
    }
  ]

  return (
    <main className=' bg-gray-100 dark:bg-black pb-10'>
      <section className='max-w-6xl mx-auto pt-2 md:pt-8'>
        <h1 className='pop text-3xl md:text-[40px] font-semibold tracking-wide text-gray-700 px-5 lg:px-0 dark:text-white'>Blog</h1>
        <div className='mt-5 px-3 lg:px-0 lg:flex flex-wrap'>
          <div className='w-full md:h-80 lg:w-[65%] border-0 dark:border dark:border-gray-800 pt-3 md:mt-8 bg-white shadow-none dark:shadow-lg dark:bg-black dark:shadow-[#615EAB] p-4 md:p-8 space-y-6 rounded' data-aos='fade-up'>
              <button className='p-2 px-3 bg-[#615EAB] text-white rounded pop'>Uncategorized</button>
              <h1 className='text-2xl w-[151px] font-bold text-gray-800 dark:text-white pop menubar_blog relative cursor-pointer'>Hello World!</h1>
              <div className='flex'>
                <div className='flex space-x-3 flex-wrap'>
                  <p className='text-blue-400 dark:text-gray-300 text-[16px] md:text-lg flex cursor-pointer pop'><LuCalendar className='md:mt-[4px] mr-1 text-xl text-gray-700 dark:text-gray-200'/> December 9, 2023</p>

                  {
                    AuthorAPI.map((author, index) => {
                      return (
                        <div key={index} className='flex space-x-2  md:mt-0'>
                          <img className='w-7 h-7 md:w-9 md:h-9 cursor-pointer rounded-full mt-[-5px] md:mt-[-10px]' src={author.image} alt="" />
                          <p className='text-gray-800 dark:text-gray-100 text-md mt-[1px]'>{author.name}</p>
                        </div>
                      )
                    })
                  }
                 
                  <div className='flex space-x-1 md:mt-0'>
                      <div onClick={onLikeButtonClick}>{isLike ? <GoHeartFill className='text-red-500 text-xl mt-1 cursor-pointer'/> : <GoHeart className='text-gray-700 dark:text-gray-200 text-xl mt-1 cursor-pointer'/>}</div>
                      <p className='text-gray-800 pop  dark:text-gray-100 text-md mt-[1px]'>{like}</p>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 dark:text-gray-300 text-md flex cursor-pointer pop'> Welcome to WordPress. This is your first post. Edit or delete it, then start...</p>
              <div className='flex'>
                <div className='flex md:space-x-4 flex-wrap'>
                  <p onClick={()=> naviagte('/blog/author_comment')} className='text-blue-400 dark:text-gray-300 text-lg flex cursor-pointer pop font-[300]'><GoComment className='mt-[4px] mr-1 text-xl text-gray-700 dark:text-gray-200'/> 1 Comment</p>
                  <div className='flex ml-3 md:ml-0'>
                    <GoStopwatch className='mt-[4px] mr-1 text-xl text-gray-700 dark:text-gray-200'/>
                    <p className='text-gray-500 dark:text-gray-300 text-lg flex cursor-pointer ml-1 pop font-[300]'>4 sec read</p>
                  </div>
                  <div className='flex mt-3 ml-2 sm:mt-0 md:mt-0 md:ml-0'>
                    <GoEye className='mt-[4px] mr-1 text-xl text-gray-700 dark:text-gray-200'/>
                    <p className='text-gray-500 dark:text-gray-300 text-lg flex cursor-pointer ml-1 pop font-[300]'>147 Views</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='lg:ml-[5%] lg:w-[30%]' data-aos='fade-left'>
            <div className='w-full mt-10 md:w-full border-0 dark:border dark:border-gray-800 lg:mt-[-30px] bg-white shadow-none dark:shadow-lg dark:bg-black dark:shadow-[#615EAB] p-4 md:p-8 rounded'>
                <div>
                  <p className='text-gray-700 dark:text-gray-300 text-md cursor-pointer pop'>Sreach</p>
                  <div>
                    <input className='pop border p-4 w-56 md:w-[580px] lg:w-44 rounded mt-1' placeholder='Search..' type="text" />
                    <button className='p-4 pop text-white bg-[#615EAB] rounded ml-2'>Search</button>
                  </div>
                </div>
            </div>

            <div className='w-full mt-10 md:w-full border-0 dark:border dark:border-gray-800 pt-3 md:mt-10 bg-white shadow-none dark:shadow-lg dark:bg-black dark:shadow-[#615EAB] p-4 md:p-8  rounded'>
                <div>
                  <p className='text-gray-700 dark:text-gray-300 text-3xl font-bold cursor-pointer pop'>Recent Posts</p>
                  <p className='text-blue-400 mt-5 dark:text-gray-300 text-xl font-[300] cursor-pointer pop'>Hello World!</p>
                  
                </div>
            </div>

            <div className='w-full mt-10 md:w-full border-0 dark:border dark:border-gray-800 pt-3 md:mt-10 bg-white shadow-none dark:shadow-lg dark:bg-black dark:shadow-[#615EAB] p-4 md:p-8  rounded'>
                <div> ConstactPage
                  <p className='text-gray-700 dark:text-gray-300 text-3xl font-bold cursor-pointer pop'>Recent Comments</p>
                  <p className='text-blue-400 mt-5 dark:text-gray-300 text-xl font-[300] cursor-pointer pop'>A WordPress Commenter on Hello world!</p>
                  
                </div>
            </div>
          </div>
          </div>
      </section>   
   </main>
  )
}
