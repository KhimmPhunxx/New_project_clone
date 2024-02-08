import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function QuestionAndAnswer() {
    useEffect(() => {
        Aos.init({
            duration: 900
        });
    }, []);
    const QuestionAndAnswer = [
        {
            id: 1,
            question: 'Cras ultricies ligula sed magna dictum porta?',
            answer: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neq.'
        },
        {
            id: 2,
            question: 'Nulla quis lorem ut libero malesuada feugiat?',
            answer: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neq.'
        },
        {
            id: 3,
            question: 'Nulla porttitor accumsan tincidunt?',
            answer: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neq.'
        },
        {
            id: 4,
            question: 'Curabitur aliquet quam id dui posuere?',
            answer: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neq.'
        },
        {
            id: 5,
            question: 'Praesent sapien massa, convallis a pellentesque?',
            answer: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neq.'
        },
        {
            id: 6,
            question: 'Pellentesque in ipsum id orci porta dapibus atemis?',
            answer: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neq.'
        },

    ]
  return (
    <main>
        <section className='w-full bg-[#F5F7FA] mt-3 lg:mt-10 dark:bg-black'>
            <div className='max-w-5xl mx-auto grid md:grid-cols-2'>
                {
                    QuestionAndAnswer.map((question, index) => {
                        return (
                            <div key={index} className='w-[90%] p-4 mx-auto rounded-lg lg:mt-4' data-aos='fade-right'>
                                <div className='flex text-gray-600 text-4xl'>
                                    <h1 className='text-xl pop font-semibold text-gray-700 dark:text-gray-100'>{question.question}</h1>
                                </div>
                                <p className='text-gray-500 mt-2 pop text-md dark:text-gray-400'>{question.answer}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </main>
  )
}

export default QuestionAndAnswer
