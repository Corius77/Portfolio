import React from 'react'

import alpistore from '../../assets/alpistore.png'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Live } from '../../assets/live.svg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <hr className='h-px my-6 bg-zinc-200 border-0 dark:bg-zinc-700 sm:mt-0' />
      <h1 className='text-[#CBCBCB] font-bold text-4xl sm:text-6xl lg:text-4xl text-center mt-10 lg:mt-20'>Portfolio</h1>
      <div className='h-screen flex justify-center items-center'>
        <div className='px-5 lg:py-20 lg:px-20 ml-5 mr-5 lg:ml-10 lg:mr-10 lg:flex bg-black rounded-xl shadow-xl lg:gap-10'>
          <img className='rounded-xl' src={alpistore} alt='e-commerce' width={854} height={480}></img>
          <div>
            <h2 className='text-white font-bold text-3xl sm:text-5xl lg:text-3xl text-center mt-5 lg:mt-0'>E-Commerce Website</h2>
            <hr className='h-px my-6 bg-zinc-200 border-0 dark:bg-zinc-700' />
            <p className='text-white text-xl sm:text-3xl lg:text-xl px-10'>E-commerce Store with motivational theme’s clothes</p>
            <div className='grid grid-cols-2 mt-10 sm:mt-28 lg:mt-36 gap-5'>
              <p className='py-5 px-5 bg-zinc-800 rounded-md text-white font-bold text-base sm:text-2xl lg:text-base'>Django</p>
              <p className='py-5 px-5 bg-zinc-800 rounded-md text-white font-bold text-base sm:text-2xl lg:text-base'>HTML</p>
              <p className='py-5 px-5 bg-zinc-800 rounded-md text-white font-bold text-base sm:text-2xl lg:text-base'>Tailwind</p>
              <p className='py-5 px-5 bg-zinc-800 rounded-md text-white font-bold text-base sm:text-2xl lg:text-base'>JavaScript</p>
            </div>
            <div className='flex justify-center mt-5 gap-5 mb-5 lg:mb-0'>
              <a href='#' className='py-2 px-4 sm:py-5 sm:px-20 lg:py-2 lg:px-4 sm:px-5 bg-zinc-600 rounded-md transition-colors duration-300 ease-in-out hover:bg-zinc-800'>
                <p className='text-white font-bold flex gap-2 items-center text-base sm:text-2xl lg:text-base '>Code <Github className='fill-white w-8 h-8'/></p>
              </a>
              <a href='https://github.com/Corius77/Portfolio' className='py-2 px-4 sm:py-5 sm:px-20 lg:py-2 lg:px-4 sm:px-5 bg-zinc-600 rounded-md transition-colors duration-300 ease-in-out hover:bg-zinc-800'>
                <p className='text-white font-bold flex gap-2 items-center text-base sm:text-2xl lg:text-base'>Live Demo <Live className='fill-white w-8 h-8'/></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio