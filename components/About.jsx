import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20 max-md:w-full'
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
                Introduction</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col justify-center lg:flex-row items-center gap-20 my-20'>
                <motion.div className='cursor-default w-64 sm:w-80 rounded-3xl max-w-none'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image src={assets.profile} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex flex-col'>
                    <p className='mb-3 max-w-2xl font-Ovo'
                    >Full Stack development is been an inspiring and an endless learning journey in my life. Throughout my career, I have had the privilege of collaborating with clients to build scalable and efficient web applications, helping them achieve success and growth.</p>

                    <p className='mb-3 max-w-2xl font-Ovo'
                    >I’m always exploring new technologies, refining my problem-solving skills, and pushing the boundaries to increase my efficiency and productivity. I am passionate about solving real-world problems through technology. My goal is to build seamless and user-friendly applications that enhance user experience and satisfaction. Every day, I strive to create solutions that make a difference.</p>

                    <p className='mb-10 max-w-2xl font-Ovo'
                    >💡 Open to new opportunities! Let’s connect. 🚀</p>


                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default About
