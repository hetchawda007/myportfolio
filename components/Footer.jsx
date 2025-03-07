import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import {motion} from 'motion/react'
const Footer = ({ isDarkMode }) => {
  const handleMailClick = () => {
    window.location.href = 'mailto:me@hetchawda.in';
  };

  return (
    <div className='mt-20 max-sm:w-[114%]'>
      <div className='text-center'>

        <a href="#top">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='sm:text-xl lg:text-4xl font-bold font-Ovo'>
            Het Chawda<b className='text-red-600'>.</b></motion.h1>
        </a>

        <a href="mailto:me@hetchawda.in" className='w-max mt-2 flex items-center gap-2 mx-auto' onClick={handleMailClick}>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          me@hetchawda.in
        </a>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Het Chawda. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'></ul>
      </div>

    </div>
  )
}

export default Footer
