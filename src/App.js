import React from 'react'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

export const App = () => {
  return (
    <div>
      <Hero />
      <div className='bg-zinc-800 h-[200vh] sm:h-[230vh]'>
        <About />
        <Portfolio />
        <Contact />
      </div>
      <div className='py-5 w-full bg-black text-white text-center'>
        Copyright © 2023 by Corius
      </div>
    </div>
  )
}