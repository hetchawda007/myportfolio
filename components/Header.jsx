import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
  return (
    <>
      <div className='relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden'>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-pink-300 to-indigo-300 opacity-20 dark:opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-gradient-to-r from-indigo-300 to-blue-300 opacity-20 dark:opacity-10 blur-3xl"></div>
        </div>

        <div className='w-11/12 md:max-w-3xl text-center mx-auto py-32 flex flex-col items-center justify-center gap-6 max-sm:w-full'>
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="relative rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full blur-md opacity-30 scale-110 animate-pulse"></div>
            <Image
              src={assets.profile}
              alt='Het Chawda profile picture'
              className='rounded-full w-36 h-36 object-cover border-4 border-white dark:border-gray-800 shadow-xl z-10 relative'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='flex items-center gap-2 text-xl md:text-2xl mb-4 font-Ovo text-gray-800 dark:text-gray-200'
            >
              Hi! I'm Het Chawda
              <motion.div
                initial={{ rotate: -30 }}
                animate={{ rotate: 20 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                <Image src={assets.hand_icon} alt='Waving hand' className='w-7' />
              </motion.div>
            </motion.h3>

            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className='text-4xl sm:text-5xl lg:text-6xl py-1 font-bold mb-4 font-Ovo bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-pink-400'
            >
              Fullstack web developer <br className="md:hidden" />from Gujarat.
            </motion.h1>

          </motion.div>

          <div className='flex flex-col sm:flex-row items-center gap-5 mt-4'>
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(79, 70, 229, 0.4)' }}
              href="#contact"
              className='px-10 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white flex items-center gap-2 hover:from-indigo-700 hover:to-pink-600 font-medium transition-all duration-300 shadow-lg'
            >
              Contact me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: isDarkMode ? 'rgb(30, 41, 59)' : 'rgb(249, 250, 251)',
                color: isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
              }}
              href='/HET CHAWDA RESUME.pdf'
              download="HET CHAWDA RESUME.pdf"
              className='px-10 py-3.5 cursor-pointer border rounded-full border-gray-300 dark:border-gray-700 flex items-center gap-2 bg-white dark:bg-gray-800 dark:text-white hover:border-indigo-500 dark:hover:border-indigo-400 font-medium transition-all duration-300 shadow-md'
            >
              My resume
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 2, duration: 1 },
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }}
            className="absolute bottom-10 transform -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400">
              <span className="text-sm mb-2 font-Ovo">Scroll Down</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Header
