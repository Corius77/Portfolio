import React from 'react'

import {ReactComponent as MailIcon} from '../../assets/envelope-regular.svg'
import {ReactComponent as WhatsappIcon} from '../../assets/whatsapp.svg'

const Contact = () => {
  return (
    <section id='contact'>
      <div className='h-[50vh] sm:h-[60vh]'>
        <hr className='h-px my-6 bg-zinc-200 border-0 dark:bg-zinc-700' />
        <h1 className='text-[#CBCBCB] font-bold text-4xl sm:text-6xl lg:text-4xl text-center mt-10 lg:mt-20'>Contact</h1>
        <div className='flex justify-center items-center mt-14 space-x-2'>
          <div className='ml-3 w-10 h-10 sm:w-20 sm:h-20 lg:w-10 lg:h-10 bg-[#C6C6C6] rounded-full flex justify-center items-center'>
            <MailIcon className='fill-[#202020] w-5 h-5 sm:w-10 sm:h-10 lg:w-5 lg:h-5' />
          </div>
          <a href='mailto:corius.business@gmail.com' className='text-white font-bold text-center text-xl sm:text-3xl lg:text-xl transition-colors duration-300 ease-in-out hover:text-zinc-400'>corius.business@gmail.com</a>
        </div>
        <div className='flex justify-center items-center mt-10 space-x-2'>
          <div className='w-10 h-10 sm:w-20 sm:h-20 lg:w-10 lg:h-10 bg-[#C6C6C6] rounded-full flex justify-center items-center'>
            <WhatsappIcon className='fill-[#202020] w-5 h-5 sm:w-10 sm:h-10 lg:w-5 lg:h-5' />
          </div>
          <a href='https://wa.me/48506722674' className='text-white font-bold text-center text-xl sm:text-3xl lg:text-xl transition-colors duration-300 ease-in-out hover:text-zinc-400'>+48 506 722 674</a>
        </div>
      </div>
    </section>
  )
}

export default Contact