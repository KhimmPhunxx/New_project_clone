import React, { useEffect, useState } from 'react'
import { LuCalendar } from "react-icons/lu";
import author from '../../assets/blog/author.png'
import author_comment from '../../assets/blog/author_comment.png'
import { GoEye, GoHeart, GoHeartFill, GoStopwatch } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function AuthorReplyComment() {
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

    const CommentAPI = [
        {
            id: 1,
            image: author_comment,
            name: 'A WordPress Commenter says:',
            comment1: 'Hi, this is a comment.',
            comment2: 'To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.',
            comment3: 'Commenter avatars come from Gravatar.',
            date: 'December 9, 2023 at 2:25 pm',
        }
    ]
  
    return (
      <main className='bg-gray-100 dark:bg-black pb-10'>
        <section className='max-w-6xl mx-auto pt-2 md:pt-8'>
          <h1 className='pop text-3xl md:text-[40px] font-semibold tracking-wide text-gray-700 px-5 lg:px-0 dark:text-white'>Blog</h1>
          <div className='mt-5 px-3 lg:px-0 lg:flex flex-wrap'>
            <div className='w-full md:h-auto lg:w-[65%] border-0  md:mt-8 shadow-none dark:shadow-lg  space-y-14 rounded'>
                <div className='w-full border-0  dark:border dark:border-gray-800 bg-white shadow-none pt-3 dark:shadow-lg dark:bg-black space-y-6 rounded p-4 md:p-8 dark:shadow-[#615EAB]'>
                    <div className='flex space-x-1'>
                        <p onClick={()=> naviagte('/')} className='text-gray-700 dark:text-blue-200 text-md cursor-pointer pop'>Home</p>
                        <p className='text-gray-700 dark:text-gray-300 text-md cursor-pointer pop'>/</p>
                        <p onClick={()=> naviagte('/blog')} className='text-gray-700 dark:text-blue-200 text-md cursor-pointer pop'> Uncategorized</p>
                        <p className='text-gray-700 dark:text-gray-300 text-md cursor-pointer pop'>/</p>
                        <p className='text-gray-700 dark:text-gray-300 text-md cursor-pointer pop'>Hello World!</p>
                    </div>
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
                                <p className='text-gray-800 dark:text-gray-100 text-md mt-[1px] pop'> {author.name}</p>
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
                    <div className='text-gray-800 dark:text-gray-100 flex space-x-8 text-xl'>
                        <a  className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiFacebook /></a>
                        <a  className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiTwitter /></a>
                        <a  className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiLinkedin /></a>
                    </div>
                    <p className='text-gray-700 dark:text-gray-300 text-md flex cursor-pointer pop'> Welcome to WordPress. This is your first post. Edit or delete it, then start...</p>
                    <div className='text-gray-800 dark:text-gray-100 flex space-x-8 text-xl'>
                        <a href="" className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiFacebook /></a>
                        <a href="" className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiTwitter /></a>
                        <a href="" className='border hover:border-[#615EAB] hover:bg-[#615EAB] hover:text-gray-100 duration-300 dark:hover:text-gray-800 dark:hover:bg-gray-100 border-gray-800 dark:border-gray-100 p-2 rounded'><FiLinkedin /></a>
                    </div>
                    <div className='flex'>
                    <div className='flex md:space-x-4 flex-wrap'>
                        {/* <p onClick={()=> naviagte('/blog/author_comment')} className='text-blue-400 dark:text-gray-300 text-lg flex cursor-pointer pop font-[300]'><GoComment className='mt-[4px] mr-1 text-xl text-gray-700 dark:text-gray-200'/> 1 Comment</p> */}
                        <div className='flex ml-3 md:ml-0'>
                        <GoStopwatch className='mt-[4px] mr-1 text-xl text-gray-700 dark:text-gray-200'/>
                        <p className='text-gray-500 dark:text-gray-300 text-lg flex cursor-pointer ml-1 pop font-[300]'>4 sec read</p>
                        </div>
                        <div className='flex ml-2 sm:mt-0 md:mt-0 md:ml-0'>
                        <GoEye className='mt-[4px] mr-1 text-xl text-gray-700 dark:text-gray-200'/>
                        <p className='text-gray-500 dark:text-gray-300 text-lg flex cursor-pointer ml-1 pop font-[300]'>147 Views</p>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className='w-full border-0 dark:border dark:border-gray-800 bg-white shadow-none pt-3 dark:shadow-lg dark:bg-black rounded p-4 md:p-8 dark:shadow-[#615EAB]' data-aos='fade-up'>
                        {
                            AuthorAPI.map((author, index) => {
                                return (
                                    <div className='flex'>
                                        <div className='md:h-24 md:w-24 h-20 w-20 rounded-full'>
                                            <img className='w-full h-full object-cover rounded-full' src={author.image} alt="" />
                                        </div>
                                        <div className='ml-5 pop space-y-3'>
                                            <h1 className='text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200'>Author : {author.name}</h1>
                                            <div className='border-gray-700 border-b md:w-[550px]'></div>
                                            <p onClick={()=> naviagte('/blog')} className='dark:text-blue-300  md:text-md cursor-pointer'> View all posts by chornthorn <i class="fa-solid fa-chevron-right"></i> </p>
                                        </div>
                                    </div>

                                    )
                                })  
                        }
                
                </div>
                <h1 className='text-2xl font-bold text-gray-800 dark:text-white pop'>1 Comments</h1>
                <div className='w-full border-0 dark:border dark:border-gray-800 bg-white shadow-none pt-3 dark:shadow-lg dark:bg-black rounded p-4 md:p-8 dark:shadow-[#615EAB]' data-aos='fade-up'>
                        {
                            CommentAPI.map((author_cmt, index) => {
                                return (
                                    <div className=''>
                                      <div className='flex'>
                                        <div className='md:h-8 md:w-8 h-8 w-8 rounded-full flex'>
                                                <img className='w-full h-full object-cover rounded-full' src={author_cmt.image} alt="" />
                                                
                                        </div>
                                        <h1 className='text-md md:text-xl ml-3 font-semibold text-gray-700 dark:text-gray-200 pop'>{author_cmt.name}</h1>
                                      </div>
                                        <div className='border-gray-700 border-b md:w-[680px] mt-2'></div>
                                        <p className='text-gray-700 mt-3 dark:text-blue-300 text-md flex cursor-pointer pop'>{author_cmt.date}</p>
                                        <p className='text-gray-700 mt-3 dark:text-gray-300 text-md flex cursor-pointer pop'>{author_cmt.comment1}</p>
                                        <p className='text-gray-700 mt-1 dark:text-gray-300 text-md flex cursor-pointer pop'>{author_cmt.comment2}</p>
                                        <p className='text-gray-700 mt-1 dark:text-gray-300 text-md flex cursor-pointer pop'>{author_cmt.comment3}</p>
                                        <p onClick={()=> naviagte()} className='text-xl text-gray-700 pop dark:text-blue-300 mt-5 cursor-pointer'>Reply</p>
                                    </div>

                                    )
                                })  
                        }
                
                </div>
                <h1 className='text-2xl font-bold text-gray-800 dark:text-white pop'>Leav a reply</h1>
                <div className='w-full border-0 dark:border dark:border-gray-800 bg-white shadow-none pt-3 dark:shadow-lg dark:bg-black rounded p-4 md:p-8 dark:shadow-[#615EAB]' data-aos='fade-up'>
                    <p className='text-gray-700 mt-1 dark:text-gray-300 text-md flex cursor-pointer pop'>Your email address will not be published. Required fields are marked *</p>
                    <p className='text-gray-700 mt-4 dark:text-gray-300 text-md flex cursor-pointer pop'>Commnet *</p>
                    <textarea className='w-full h-40 border p-4 text-gray-800 dark:text-gray-100 dark:bg-transparent dark:border-gray-700 rounded mt-1 pop' placeholder='Comment..' type="text" />
                    <div>
                        <p className='text-gray-700 mt-4 dark:text-gray-300 text-md flex cursor-pointer pop'>Name *</p>
                        <input className='w-full border p-4 text-gray-800 dark:text-gray-100 dark:bg-transparent dark:border-gray-700 rounded mt-1 pop' placeholder='Name..' type="text" />
                    </div>
                    <div>
                        <p className='text-gray-700 mt-4 dark:text-gray-300 text-md flex cursor-pointer pop'>Email *</p>
                        <input className='w-full border p-4 text-gray-800 dark:text-gray-100 dark:bg-transparent dark:border-gray-700 rounded mt-1 pop' placeholder='Email..' type="text" />
                    </div>
                    <div>
                        <p className='text-gray-700 mt-4 dark:text-gray-300 text-md flex cursor-pointer pop'>Website</p>
                        <input className='w-full border p-4 text-gray-800 dark:text-gray-100 dark:bg-transparent dark:border-gray-700 rounded mt-1 pop' placeholder='Website..' type="text" />
                    </div>
                    <div className='flex'>
                        <input type="checkbox" className='mt-4' id="subscribeNews" name="subscribe" value="newsletter" />
                        <label for="subscribeNews" className='text-gray-700 mt-4 ml-2 dark:text-gray-300 text-md flex cursor-pointer pop'>Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <button className='p-4 pop text-white bg-[#615EAB] rounded mt-4'>Post Comment</button>
                </div>
                       
            </div>
  
            <div className='lg:ml-[5%] lg:w-[30%]'>
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
