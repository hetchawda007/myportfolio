import { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

const Projects = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            id='projects'
            className='w-full px-[8%] md:px-[12%] py-16 scroll-mt-20 max-sm:w-full bg-gradient-to-b from-white to-gray-50 dark:from-darkTheme dark:to-darkHover'>

            <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='h-1 bg-gradient-to-r from-purple-600 to-red-500 mx-auto mb-6'
            />

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo'>
                My Portfolio
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                Featured Projects
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center md:w-[50vw] mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my fullstack development showcase! Each project represents a unique challenge solved with creative coding and technical expertise. Feel free to explore, visit the live sites, and review the source code.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-lg dark:bg-gray-800/50 dark:backdrop-blur-sm border border-transparent hover:border-purple-500/30 transition-all duration-500"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0,0,0,0.15)' }}
                    >
                        <div className="relative overflow-hidden group">
                            <Image
                                className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110"
                                src={project.bgImage}
                                alt={project.title}
                                width={700}
                                height={475}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                                <Link target='_blank' href={`${project.url1}`} className="w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-white text-center py-3 font-semibold bg-purple-600/80 backdrop-blur-sm w-full"
                                    >
                                        Visit Live Site
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-3 text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">
                                {project.title}
                            </h5>
                            <p className="mb-4 text-gray-700 dark:text-gray-300 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 my-4">
                                {project.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.1)' }}
                                        className='border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 dark:border-gray-700 transition-all duration-300'
                                        key={skillIndex}>
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                            <div className='flex gap-3 mt-6'>
                                <Link target='_blank' href={`${project.url1}`} className="flex-1">
                                    <motion.button
                                        type="button"
                                        className="w-full text-white bg-gradient-to-r from-purple-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-purple-300/50 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all"
                                        whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(159, 18, 57, 0.1), 0 4px 6px -2px rgba(159, 18, 57, 0.05)' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Visit Site
                                    </motion.button>
                                </Link>
                                <Link target='_blank' href={`${project.url2}`} className="flex-1">
                                    <motion.button
                                        type="button"
                                        className="w-full text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 border border-purple-600 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:ring-4 focus:ring-purple-300/50 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all"
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        View Code
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-center mt-10"
            >
                <Link href="https://github.com/hetchawda007" target="_blank">
                    <motion.button
                        className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-purple-600 to-red-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-purple-300/50 font-medium rounded-lg px-8 py-4 text-center transition-all"
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(159, 18, 57, 0.1), 0 10px 10px -5px rgba(159, 18, 57, 0.04)' }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" clipRule="evenodd" />
                        </svg>
                        View More Projects on GitHub
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Projects
