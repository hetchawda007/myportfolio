import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { ToastContainer, toast } from 'react-toastify'

const Header = ({ isDarkmode }) => {

  const notify = () => {
    toast.success('Available shortly', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: isDarkmode ? 'light' : 'dark'
    });
  };

  return (
    <>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkmode ? 'colored' : 'dark'}
      />

      <div className='w-11/12 md:max-w-3xl text-center mx-auto py-32 flex flex-col items-center justify-center gap-4 max-sm:w-full'>
        <motion.div className='cursor-pointer'
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          <Image src={assets.profile} alt='' className='rounded-full size-32 object-cover' />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='flex gap-2 text-xl items-center md:text-2xl mb-3 font-Ovo'>
          Hi! I'm Het Chawda <Image src={assets.hand_icon} alt='' className='w-6' /></motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
          Fullstack web developer from Gujarat.</motion.h1>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
          >Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            onClick={notify}
            href='#'
            className='px-10 py-3 cursor-pointer border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
            My resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
        </div>
      </div>
    </>
  )
}

export default Header
