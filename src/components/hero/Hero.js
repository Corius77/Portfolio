import React, { useState } from 'react'

import { ReactSVG } from "react-svg";

import logo from '../../assets/logo.png'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg'
import { ReactComponent as Bars } from '../../assets/bars.svg'
import python from '../../assets/python.png'
import django from '../../assets/django.png'
import mysql from '../../assets/mysql.png'
import rest from '../../assets/rest.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import sass from '../../assets/sass.png'

const Hero = () => {

    const handleClickScroll = () => {
        const element = document.getElementById('contact');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
  
  return (
    <section id='home'>
        <div className='h-[135vh] sm:h-screen lg:h-[120vh] w-full bg-black'>
            <div className='py-3 px-3 sm:py-6 sm:px-6 bg-black'></div>
            <nav className='py-3 px-3 sm:py-6 sm:px-6 text-white fixed top-0 left-0 w-full z-10'>
                <div className='flex flex-wrap items-center justify-between relative'>
                    <p className='text-lg sm:text-3xl lg:text-xl font-bold'>CORIUS-DEV</p>
                    <div className='lg:hidden'>
                    <button
                        onClick={handleMenuToggle}
                        className={`w-6 h-6 sm:w-10 sm:h-10 fill-white focus:outline-none mr-1 ${
                menuOpen ? 'transform rotate-90' : ''
                } transition-transform duration-300`}
                    >
                        <Bars />
                    </button>
                    </div>
                    <div
                    className={`space-x-4 mt-4 sm:mt-0 sm:space-x-6 lg:space-x-8 lg:flex ${
                        menuOpen ? 'block' : 'hidden'
                    }`}
                    >
                    <a
                        href='#home'
                        className='block ml-4 sm:ml-6 lg:ml-0 text-lg sm:text-3xl lg:text-xl text-white transition-colors duration-300 ease-in-out hover:text-zinc-400'
                    >
                        HOME
                    </a>
                    <a
                        href='#about'
                        className='block text-lg sm:text-3xl lg:text-xl text-white transition-colors duration-300 ease-in-out hover:text-zinc-400'
                    >
                        ABOUT
                    </a>
                    <a
                        href='#portfolio'
                        className='block text-lg sm:text-3xl lg:text-xl text-white transition-colors duration-300 ease-in-out hover:text-zinc-400'
                    >
                        PORTFOLIO
                    </a>
                    <a
                        href='#contact'
                        className='block text-lg sm:text-3xl lg:text-xl text-white transition-colors duration-300 ease-in-out hover:text-zinc-400'
                    >
                        CONTACT
                    </a>
                    </div>
                </div>
            <hr className='h-px my-6 bg-zinc-200 border-0 dark:bg-zinc-700' />
            </nav>
            <div className='flex justify-center relative mt-20 sm:mt-28'>
                <div className='lg:flex lg:gap-10'>
                    <img className='scale-75 sm:scale-100 ml-2 sm:ml-44 lg:ml-0' src={logo} alt='logo' width={300} height={300} />
                    <div className='mt-5 sm:mt-10 lg:mt-0'>
                        <h1 className="text-3xl sm:text-6xl lg:text-5xl text-white">Hey, I'm Corius</h1>
                        <h2 className='text-3xl sm:text-6xl lg:text-5xl text-white font-bold'>Full-Stack Developer</h2>
                        <div className='mt-2 gap-2 flex'>
                            <button onClick={handleClickScroll} className='py-1 px-2 rounded-md font-[800] bg-white transition-colors duration-300 ease-in-out hover:bg-zinc-400'>Contact Me!</button>
                            <a href='https://github.com/Corius77' target="_blank" className='w-10 h-10 fill-white transition-colors duration-300 ease-in-out hover:fill-zinc-400'><Github /></a>
                            <a href='https://www.linkedin.com/in/sebastian-jura-ba6abb276/' target="_blank" className='w-10 h-10 fill-white transition-colors duration-300 ease-in-out hover:fill-zinc-400'><LinkedIn /></a>
                        </div>
                    </div>
                </div>

            </div>
            <h3 className='font-bold text-white text-4xl text-center mt-10'>Tech Stack</h3>
            <div className='flex justify-center mt-10 gap-4 sm:gap-10 lg:gap-20 px-4 lg:px-0'>
                <div className='py-10 px-10 sm:py-10 sm:px-20 bg-zinc-800 rounded-xl '>
                    <p className='text-xl font-bold text-white -translate-y-5 text-center sm:-translate-y-5'>Back-End</p>
                    <div className='grid grid-cols-2 sm:flex gap-2'>
                        <img className='shadow-xl' src={python} alt='python' width={35} height={40} />
                        <img className='shadow-xl' src={django} alt='django' width={35} height={40} />
                        <img className='shadow-xl' src={mysql} alt='mysql' width={70} height={40} />
                        <img className='shadow-xl' src={rest} alt='rest' width={80} height={40} />
                    </div>
                </div>
                <div className='py-10 px-10 sm:py-10 sm:px-20 bg-zinc-800 rounded-xl'>
                    <p className='text-xl font-bold text-white -translate-y-5 text-center sm:-translate-y-5'>Front-End</p>
                    <div className='grid grid-cols-2 sm:flex gap-2'>
                        <img className='shadow-xl' src={html} alt='html' width={40} height={40} />
                        <img className='shadow-xl' src={css} alt='css' width={40} height={40} />
                        <img className='shadow-xl' src={js} alt='js' width={40} height={40} />
                        <img className='shadow-xl' src={react} alt='react' width={50} height={40} />
                        <img className='shadow-xl' src={tailwind} alt='tailwind' width={60} height={40} />
                        <img className='shadow-xl' src={sass} alt='sass' width={60} height={40} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;