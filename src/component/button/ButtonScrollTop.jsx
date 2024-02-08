import React, { useEffect, useState } from 'react'
import { BiChevronsUp } from 'react-icons/bi';

export default function ButtonScrollTop() {
    const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else setBackToTop(false);
    });
  } , []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <button
        onClick={() => scrollTop()}
        className='fixed bottom-10 scroll-smooth right-4 bg-[#615EAB] hover:bg-[#3b35a0] font-[400] duration-300 py-2 px-2 rounded-full pop text-white'>
        <BiChevronsUp className='text-4xl' />
    </button>
  )
}
