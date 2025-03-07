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
            id='projects' className='w-full px-[12%] py-10 scroll-mt-20 max-sm:w-[114%]'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo'>
                My portfolio</motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                My Projects</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my fullstack development portfolio! Feel free to explore each project, visit the live sites, and review the source code to gain a deeper understanding of my work and capabilities.</motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='flex flex-wrap items-center justify-center my-10 gap-10 dark:text-black'>
                {workData.map((project, index) => (
                    <motion.div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-transparent dark:border-white"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <a target='_blank' href={`${project.url1}`}>
                            <Image className="rounded-t-lg w-96 h-56 object-cover" src={project.bgImage} alt={project.title} width={700} height={475} />
                        </a>
                        <div className="p-5">
                            <h5 className="mb-2 cursor-default text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                            <p className="mb-3 cursor-default font-normal text-gray-700 dark:text-gray-50">{project.description}</p>
                            <div className="flex flex-wrap gap-2 my-4">
                                {project.skills.map((skill, index) => (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className='border-[0.5px] border-gray-400 rounded-xl px-2 py-1 w-fit flex justify-center items-center gap-2 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-gray-400 dark:hover:bg-gray-700'
                                        key={index}>
                                        <h3 className='font-thin text-gray-700 text-sm dark:text-white'>{skill}</h3>
                                    </motion.div>
                                ))}
                            </div>
                            <div className='flex'>
                                <Link target='_blank' href={`${project.url1}`}>
                                    <motion.button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        whileHover={{ scale: 1.1 }}
                                        transition={0.3}
                                    >
                                        Visit site
                                    </motion.button>
                                </Link>
                                <Link target='_blank' href={`${project.url2}`}>
                                    <motion.button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        whileHover={{ scale: 1.1 }}
                                        transition={0.3}
                                    >
                                        View code
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Projects
