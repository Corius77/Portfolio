import React from 'react'

import photo from '../../assets/about-photo.jpg'

const About = () => {
  return (
    <section id='about'>
      <div className='h-[80vh] lg:h-[70vh] w-full flex justify-center items-center'>
        <div className='lg:flex sm:gap-4 mt-10 sm:mt-0'>
          <img className='rounded-xl shadow-xl scale-75 sm:scale-125 lg:scale-100 sm:ml-32 lg:ml-0 mt-0 sm:mt-20 lg:mt-0' src={photo} alt='photo' width={500} height={350}></img>
          <div className='flex flex-col ml-10 sm:ml-20 lg:ml-0 mt-0 sm:mt-20 lg:mt-0'>
            <h2 className='text-[#CBCBCB] text-2xl sm:text-5xl lg:text-2xl font-bold'>About Me</h2>
            <p className='text-[#C6C6C6] text-lg sm:text-3xl lg:text-lg w-80 sm:w-10/12 lg:w-80'>My name is Sebastian, and I’m passionate full-stack developer with 1 year of experience. I specialize in creating innovative and user-friendly web applications. My skills include front-end and back-end development, utilizing languages like HTML, CSS, JavaScript, and Python. Let's build something great together!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About