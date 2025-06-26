import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"
const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])


    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image priority src={assets.header_bg_color || null} alt='' className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between max-sm:px-4 z-50 backdrop-blur-md ${isScroll ? "bg-white/50 shadow-sm dark:bg-darkTheme/50 dark:shadow-white/20" : ""}`}>
                <a href="#top" className="transition-transform hover:scale-105 duration-300">
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='max-sm:text-3xl text-4xl font-bold font-Ovo'>
                        Het Chawda<b className='text-red-600'>.</b></motion.h1>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 backdrop-blur-md shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a className='font-Ovo relative hover:text-red-600 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full' href="#top">Home</a></li>
                    <li><a className='font-Ovo relative hover:text-red-600 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full' href="#about">About me</a></li>
                    <li><a className='font-Ovo relative hover:text-red-600 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full' href="#skills">Skills</a></li>
                    <li><a className='font-Ovo relative hover:text-red-600 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full' href="#experience">Experience</a></li>
                    <li><a className='font-Ovo relative hover:text-red-600 transition-colors duration-300 after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-red-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full' href="#projects">Projects</a></li>                </ul>

                <div className='flex items-center gap-4'>

                    <button onClick={() => setIsDarkMode(prev => !prev)} className="transition-transform hover:scale-110 duration-300">
                        <div className='flex items-center gap-2'>
                            <Image src={isDarkMode ? (assets.sun_icon || null) : (assets.moon_icon || null)} alt='' className='w-6' />
                        </div>
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 transition-all duration-300 transform hover:scale-105'>Contact
                        <Image src={isDarkMode ? (assets.arrow_icon_dark || null) : (assets.arrow_icon || null)} alt="" className='w-3' />
                    </a>
                    <button className='block md:hidden ml-3 transition-transform hover:scale-110 duration-300' onClick={openMenu}>
                        <Image src={isDarkMode ? (assets.menu_white || null) : (assets.menu_black || null)} alt='' className='w-6' />
                    </button>
                </div>

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-[120vh] bg-white/90 backdrop-blur-md transition duration-500 dark:bg-darkHover/90 dark:text-white'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? (assets.close_white || null) : (assets.close_black || null)} alt='' className='w-5 cursor-pointer hover:rotate-90 transition-transform duration-300' />
                    </div>

                    <li><a className='font-Ovo hover:text-red-600 transition-all duration-300 hover:pl-2' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo hover:text-red-600 transition-all duration-300 hover:pl-2' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo hover:text-red-600 transition-all duration-300 hover:pl-2' onClick={closeMenu} href="#skills">Skills</a></li>
                    <li><a className='font-Ovo hover:text-red-600 transition-all duration-300 hover:pl-2' onClick={closeMenu} href="#experience">Experience</a></li>
                    <li><a className='font-Ovo hover:text-red-600 transition-all duration-300 hover:pl-2' onClick={closeMenu} href="#projects">Projects</a></li>
                    <li><a className='font-Ovo hover:text-red-600 transition-all duration-300 hover:pl-2' onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
