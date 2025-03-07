import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
const Contact = () => {

  const [formdata, setFormdata] = useState({ name: '', email: '', message: '' })
  const [submit , setSubmit] = useState(false)
  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmit(true)
    if (!formdata.name || !formdata.email || !formdata.message || formdata.name.length < 3 || formdata.email.length < 6) {
      toast.error('Please fill valid details.');
      return;
    }

    if (formdata.message.length < 10 && formdata.message.length > 500) {
      toast.error('Message should be between 10 and 500 characters.');
      setFormdata({ ...formdata, message: '' })
      return;
    }
    else {

      try {
        const response = await axios.post(
          'https://api.brevo.com/v3/smtp/email',
          {
            sender: { name: formdata.name, email: process.env.NEXT_PUBLIC_EMAIL },
            to: [{ email: process.env.NEXT_PUBLIC_EMAIL }],
            subject: `New message from ${formdata.name}`,
            htmlContent: `
          <p>You have received a new message from your portfolio contact form.</p>
          <p><strong>Name:</strong> ${formdata.name}</p>
          <p><strong>Email:</strong> ${formdata.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formdata.message}</p>
          `,
          },
          {
            headers: {
              'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY,
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 201) {
          toast.success('Message sent successfully!');
          setFormdata({ name: '', email: '', message: '' })
          return response;
        } else {
          toast.error('Failed to send message.');
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
    }
  };

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none max-md:w-[114%]'>

        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-center mb-2 text-lg font-Ovo'>
          Connect with me</motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='text-center text-5xl font-Ovo'>
          Get in touch</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
          onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

            <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.6 }}
              type="text" placeholder='Enter your name' required onChange={handlechange} value={formdata.name}
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name' />

            <motion.input
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              type="email" placeholder='Enter your email' required onChange={handlechange} value={formdata.email}
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email' />

          </div>
          <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.6 }}
            rows='6' placeholder='Enter your message' required onChange={handlechange} value={formdata.message}
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' disabled={submit}
          >Submit now <Image src={assets.arrow_icon_dark} alt='' className='w-3' /></motion.button>
        </motion.form>
      </motion.div>
    </>
  )
}

export default Contact