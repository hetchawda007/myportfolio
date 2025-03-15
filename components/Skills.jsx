import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const Skills = ({ isDarkMode }) => {
    return (
        <motion.div
            id='skills'
            className='w-full px-[8%] md:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white dark:from-darkHover dark:to-darkTheme'
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
                className='h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6'
            />

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                My strengths
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                Skills and expertise
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center md:w-[50vw] mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300'>
                I specialize in modern web technologies and frameworks, with expertise in creating responsive and interactive user experiences.
            </motion.p>

            <div className="flex flex-col gap-12">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='w-full max-w-5xl mx-auto'
                >
                    <h3 className="text-center text-xl mb-8 font-Ovo">Technologies & Frameworks</h3>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='flex flex-wrap justify-center gap-4 md:gap-5'
                    >
                        {infoList.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                                className='border border-gray-200 dark:border-gray-700 cursor-default rounded-xl px-6 py-3 bg-white dark:bg-gray-800/50 backdrop-blur-sm hover:border-blue-500/50 dark:hover:border-purple-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-600 dark:text-purple-400 font-medium hover:text-blue-800 dark:hover:text-purple-300">{skill}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='w-full max-w-4xl mx-auto mt-8'
                >
                    <h3 className="text-center text-xl mb-8 font-Ovo">Tools I Use</h3>

                    <div className="flex justify-center flex-wrap gap-8 md:gap-16">
                        {toolsData.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-16 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-purple-500/20 transition-all duration-300 h-16 md:w-20 md:h-20 relative p-3 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center mb-2">
                                    <Image
                                        src={tool || null}
                                        alt="Tool icon"
                                        className="object-contain"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.7 }}
                className='mt-16 p-8 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10 rounded-xl max-w-3xl mx-auto border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:border-blue-200 dark:hover:border-purple-800 transition-all duration-500'
            >
                <h3 className='text-center text-xl mb-4 font-Ovo'>My Development Approach</h3>
                <p className='text-center text-gray-600 dark:text-gray-300 font-Ovo'>
                    I focus on creating clean, efficient code that delivers exceptional user experiences.
                    My projects combine technical excellence with creative problem-solving to build
                    solutions that are both functional and visually appealing.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default Skills