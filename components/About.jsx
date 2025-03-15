import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div
            id='about'
            className='w-full px-[8%] md:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-darkTheme dark:to-darkHover'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='h-1 bg-gradient-to-r from-indigo-600 to-pink-500 mx-auto mb-6'
            />

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo text-indigo-600 dark:text-indigo-400'>
                Introduction
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                About me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-16 max-w-7xl mx-auto'
            >
                <motion.div
                    className='relative w-64 sm:w-80'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-indigo-500/30 dark:border-indigo-400/30 -z-10"></div>
                    <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-pink-500/30 dark:border-pink-400/30 -z-10"></div>


                    <motion.div
                        whileHover={{
                            scale: 1.03,
                            boxShadow: isDarkMode
                                ? '0 20px 30px rgba(79, 70, 229, 0.2)'
                                : '0 20px 30px rgba(79, 70, 229, 0.15)'
                        }}
                        className="rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
                    >
                        <Image
                            src={assets.profile}
                            alt='Het Chawda profile photo'
                            className='w-full rounded-2xl transition-all duration-500 hover:saturate-150'
                        />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-5 -right-5 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="font-medium text-sm">Full Stack Developer</span>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='flex flex-col space-y-6 lg:ml-6'
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center mb-3">
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mr-3">
                                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">My Learning Journey</h3>
                        </div>
                        <p className='font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed'>
                            Full Stack development is been an inspiring and an endless learning journey in my life. I'm always exploring new technologies, refining my problem-solving skills, and pushing the boundaries to increase my efficiency and productivity.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center mb-3">
                            <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-full mr-3">
                                <svg className="w-5 h-5 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-lg text-pink-600 dark:text-pink-400">Problem Solving</h3>
                        </div>
                        <p className='font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed'>
                            I love solving real-world problems through technology. My goal is to build seamless and user-friendly applications that enhance user experience and satisfaction. Every day, I strive to create solutions that make a difference.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="bg-gradient-to-r from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:to-pink-500/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30"
                    >
                        <div className="flex items-center gap-3 justify-center">
                            <span className="text-2xl">💡</span>
                            <h3 className="font-Ovo text-lg font-medium">Open to new opportunities!</h3>
                            <a href="#contact" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline ml-1">Let's connect</a>
                            <span className="text-2xl">🚀</span>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="flex justify-center gap-4 pt-3"
                    >
                        <a
                            href="https://github.com/hetchawda007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hetchawda/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com/het_chawda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="font-medium">Contact</span>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
