import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const Contact = ({ isDarkMode }) => {
  const [formdata, setFormdata] = useState({ name: '', email: '', message: '' })
  const [submit, setSubmit] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmit(true)
    setIsLoading(true)

    if (!formdata.name || !formdata.email || !formdata.message || formdata.name.length < 3 || formdata.email.length < 6) {
      toast.error('Please fill valid details.');
      setSubmit(false)  
      
      setIsLoading(false)
      return;
    }

    if (formdata.message.length < 10 && formdata.message.length > 500) {
      toast.error('Message should be between 10 and 500 characters.');
      setFormdata({ ...formdata, message: '' })
      setSubmit(false)
      setIsLoading(false)
      return;
    }
    else {
      try {
        const response = await axios.post(
          'https://api.brevo.com/v3/smtp/email',
          {
            sender: { name: formdata.name, email: 'deployment0007@gmail.com' },
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
        } else {
          toast.error('Failed to send message.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        toast.error('Something went wrong. Please try again later.');
      } finally {
        setSubmit(false)
        setIsLoading(false)
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
        theme={isDarkMode ? "dark" : "light"}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id='contact'
        className='w-full px-[8%] md:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white dark:from-darkHover dark:to-darkTheme relative overflow-hidden'
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300 to-teal-300 filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto mb-6'
        />

        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-center mb-2 text-lg font-Ovo text-violet-600 dark:text-violet-400'>
          Connect with me
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='text-center text-5xl font-Ovo'>
          Get in touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='text-center md:w-[50vw] mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300'>
          I'd love to hear from you! If you have any questions, project ideas, or collaboration opportunities, please reach out using the form below.
        </motion.p>

        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="w-full"
          >
            <motion.div
              whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
            >
              <form onSubmit={onSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="relative"
                  >
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Your Name</label>
                    <input
                      type="text"
                      placeholder='John Doe'
                      required
                      onChange={handlechange}
                      value={formdata.name}
                      className='w-full p-3 outline-none border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:bg-gray-700/50 focus:border-violet-500 dark:focus:border-violet-400 transition-all duration-300'
                      name='name'
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="relative"
                  >
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Your Email</label>
                    <input
                      type="email"
                      placeholder='johndoe@example.com'
                      required
                      onChange={handlechange}
                      value={formdata.email}
                      className='w-full p-3 outline-none border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:bg-gray-700/50 focus:border-violet-500 dark:focus:border-violet-400 transition-all duration-300'
                      name='email'
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="relative"
                >
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Your Message</label>
                  <textarea
                    rows='5'
                    placeholder='What would you like to discuss?'
                    required
                    onChange={handlechange}
                    value={formdata.message}
                    className='w-full p-4 outline-none border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:bg-gray-700/50 focus:border-violet-500 dark:focus:border-violet-400 transition-all duration-300'
                    name='message'
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="flex justify-end"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    type='submit'
                    className='py-3 px-8 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white rounded-lg font-medium disabled:opacity-70 disabled:cursor-not-allowed'
                    disabled={submit}
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="w-full flex flex-col md:flex-row gap-6 justify-between"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 flex-1"
            >
              <div className="p-3 mb-4 bg-violet-100 dark:bg-violet-900/30 w-max rounded-full">
                <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Feel free to email me anytime!</p>
              <a href="mailto:hetchawda44@gmail.com" className="text-violet-600 dark:text-violet-400 hover:underline">hetchawda44@gmail.com</a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 flex-1"
            >
              <div className="p-3 mb-4 bg-pink-100 dark:bg-pink-900/30 w-max rounded-full">
                <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Gandhidham, Gujarat</p>
              <p className="text-gray-600 dark:text-gray-300">India</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 flex-1"
            >
              <div className="p-3 mb-4 bg-blue-100 dark:bg-blue-900/30 w-max rounded-full">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Connect</h3>
              <div className="flex items-center space-x-6 mt-5">
                <a href="https://github.com/hetchawda007" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/hetchawda/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://twitter.com/het_chawda" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact