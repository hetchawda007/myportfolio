import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { assets, infoList } from '@/assets/assets'

const Skills = () => {
    return (
        <motion.div id='skills' className='w-full px-[12%] py-10 scroll-mt-20 max-md:w-[114%]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
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

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='flex flex-wrap gap-4 justify-center mt-5 px-48 max-sm:px-0'>
                        {infoList.map((skill, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl px-4 w-fit flex justify-center items-center gap-2 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}>
                                <h3 className='font-semibold text-gray-700 text-lg dark:text-white'>{skill}</h3>
                            </motion.li>
                        ))}
                    </motion.ul>

                </motion.div>
            </motion.div>
        </motion.div >)
}

export default Skills