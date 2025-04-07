'use client'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Link from 'next/link'

export default function CareerSection() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [controls, isInView])

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }

    const highlightVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3
            }
        }
    }

    const logoVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            backgroundColor: "#1a56db",
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    }

    return (
        <section ref={ref} className="bg-gray-50 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-10">
                        {/* <motion.div
                            variants={logoVariants}
                            initial="hidden"
                            animate={controls}
                            className="inline-block"
                        >
                            <div className="flex items-center border-2 border-border p-2 w-min">
                                <span className="bg-primary text-white px-2 py-1 font-bold">Bazaar</span>
                                <span className="px-2 text-gray-800 font-medium">digital</span>
                            </div>
                        </motion.div> */}

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <motion.h2
                                    className="text-4xl md:text-5xl font-bold text-gray-900"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={controls}
                                    custom={0}
                                >
                                    Outstanding <motion.span
                                        className="text-primary"
                                        variants={highlightVariants}
                                        initial="hidden"
                                        animate={controls}
                                    >results</motion.span>
                                </motion.h2>
                                <motion.h2
                                    className="text-4xl md:text-5xl font-bold text-gray-900"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={controls}
                                    custom={1}
                                >
                                    require outstanding <motion.span
                                        className="text-secondary"
                                        variants={highlightVariants}
                                        initial="hidden"
                                        animate={controls}
                                    >people.</motion.span>
                                </motion.h2>
                            </div>

                            <motion.p
                                className="text-lg text-gray-700"
                                variants={textVariants}
                                initial="hidden"
                                animate={controls}
                                custom={2}
                            >
                                Are you down with data, crazy about conversion rates, and passionate about performance metrics?
                            </motion.p>

                            <motion.p
                                className="text-lg text-gray-700"
                                variants={textVariants}
                                initial="hidden"
                                animate={controls}
                                custom={3}
                            >
                                Do you enjoy a good mix of nerdiness and creativity?
                            </motion.p>

                            <motion.div
                                className="pt-4 flex items-center"
                                variants={textVariants}
                                initial="hidden"
                                animate={controls}
                                custom={4}
                            >
                                <span className="text-2xl font-semibold text-gray-900">Then you'll</span>
                                <span className="text-2xl font-semibold text-primary mx-2">fit right</span>
                                <span className="text-2xl font-semibold text-gray-900">in with us!</span>
                                <motion.svg
                                    className="w-8 h-8 ml-2 text-orange-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    animate={{
                                        x: [0, 10, 0],
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            ease: "easeInOut",
                                            repeatDelay: 1
                                        }
                                    }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </motion.div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-xl bg-white p-8">
                        <motion.div
                            className="space-y-8"
                            variants={textVariants}
                            initial="hidden"
                            animate={controls}
                            custom={2}
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">Bazaar Digital is a 100% On-Site workplace with industry-leading benefits.</h3>
                                <p className="text-gray-700">We put work-life balance first, so our team members are always on top of their game.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">Are you ready for a game-changing career move?</h3>

                                <motion.div
                                    variants={buttonVariants}
                                    initial="hidden"
                                    animate={controls}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="inline-block"
                                >
                                    <Link href="/careers" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md uppercase tracking-wide inline-block">
                                        Explore Opportunities
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
} 