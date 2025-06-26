import React from 'react'
import { motion } from "motion/react"

const Experience = ({ isDarkMode }) => {
    const experiences = [
        {
            id: 1,
            company: "Akdenar Private Limited",
            position: "Full stack Intern",
            duration: "Jan 2025 - Present",
            location: "Delhi - Remote",
            description: [
                "Developed microservices for core modules (authentication, product listing, shipping, payment) of a B2B e-commerce platform using Node.js, PostgreSQL, Redis, Prisma, and Docker",
                "Translated complex Figma designs into responsive dashboards and landing pages with React, TypeScript, Tailwind CSS, and Framer Motion",
                "Maintained Swagger documentation for backend APIs, reducing developer onboarding time and improving testing efficiency by 25%",
                "Actively contributed in agile sprints, successfully delivering assigned story points across both frontend and backend modules"
            ],
            technologies: ["Node.js", "React", "TypeScript", "PostgreSQL", "Redis", "Prisma", "Docker", "Tailwind CSS"],
            type: "Internship",
            current: true
        },
        {
            id: 2,
            company: "Urja Engineering Company",
            position: "Web Developer Intern",
            duration: "Nov 2024 - Dec 2024",
            location: "Kutch - Hybrid",
            description: [
                "Designed and built the company's website with React and Tailwind CSS, incorporating smooth UI animations using Framer Motion",
                "Integrated Brevo API to automate email communications, enhancing lead follow-up efficiency for the sales team",
                "Achieved Google Lighthouse performance scores of 94% (desktop) and 87% (mobile), improving page load speed by 30%",
                "Worked directly with stakeholders to align web implementation with brand and communication goals"
            ],
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Brevo API", "JavaScript"],
            type: "Internship",
            current: false,
            links: {
                website: "Visit",
                github: "Github"
            }
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            id='experience'
            className='w-full px-[8%] md:px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-darkTheme dark:to-darkHover relative overflow-hidden'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200 to-red-200 opacity-10 dark:opacity-5 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200 to-red-200 opacity-10 dark:opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300 to-red-300 opacity-8 dark:opacity-3 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className='h-1 bg-gradient-to-r from-purple-600 to-red-500 mx-auto mb-6'
                    />

                    <motion.h4
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='text-center mb-2 text-lg font-Ovo'>
                        Professional Journey
                    </motion.h4>

                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-center text-5xl font-Ovo'>
                        My Experience
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className='text-center md:w-[50vw] mx-auto mt-5 mb-12 font-Ovo'>
                        My journey through internships and projects, building real-world solutions and growing as a developer
                    </motion.p>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative">
                        {/* Timeline line - vertical on mobile, horizontal on desktop */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 md:w-full md:h-0.5 md:top-1/2 md:bottom-auto bg-gradient-to-b md:bg-gradient-to-r from-purple-600 to-red-500"></div>

                        <div className="space-y-12 md:space-y-0 md:flex md:items-center md:justify-between">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    variants={itemVariants}
                                    className="relative md:w-1/2 md:max-w-md"
                                    style={{
                                        marginLeft: index === 0 ? '0' : 'auto',
                                        marginRight: index === 0 ? 'auto' : '0'
                                    }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-red-500 rounded-full border-4 border-white dark:border-darkTheme shadow-lg z-10">
                                        {exp.current && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-500 rounded-full animate-ping"></div>
                                        )}
                                    </div>

                                    {/* Experience Card */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: isDarkMode
                                                ? "0 20px 40px rgba(139, 92, 246, 0.3)"
                                                : "0 20px 40px rgba(139, 92, 246, 0.2)"
                                        }}
                                        className="ml-16 md:ml-0"
                                    >
                                        <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-transparent hover:border-purple-500/30 transition-all duration-500">
                                            {/* Current Badge */}
                                            {exp.current && (
                                                <div className="absolute -top-3 -right-3">
                                                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                                                        Current
                                                    </span>
                                                </div>
                                            )}

                                            {/* Company & Position */}
                                            <div className="mb-4">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1 font-Ovo">
                                                    {exp.position}
                                                </h3>
                                                <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent mb-3">
                                                    {exp.company}
                                                </h4>

                                                <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                    <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6l-3-3-3 3V6" />
                                                        </svg>
                                                        {exp.type}
                                                    </span>
                                                    <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {exp.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="mb-6">
                                                <ul className="space-y-3">
                                                    {exp.description.map((point, pointIndex) => (
                                                        <li key={pointIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-600 to-red-500 rounded-full mt-2"></span>
                                                            <span className="text-sm">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium transition-all duration-300 hover:border-purple-500/30"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Links (if available) */}
                                            {exp.links && (
                                                <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                                    <a
                                                        href="#"
                                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-red-500 hover:bg-gradient-to-bl text-white text-sm rounded-lg transition-all duration-200"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                        {exp.links.website}
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg transition-colors duration-200"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" clipRule="evenodd" />
                                                        </svg>
                                                        {exp.links.github}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 25px -5px rgba(159, 18, 57, 0.1), 0 10px 10px -5px rgba(159, 18, 57, 0.04)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-red-500 hover:bg-gradient-to-bl text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                    >
                        <span>Let's Work Together</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Experience
