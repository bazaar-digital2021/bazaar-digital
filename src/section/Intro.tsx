'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Intro() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    }

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden"

        >
            <motion.div className="container max-w-[1400px] mx-auto px-4 md:px-6"
                initial={{ opacity: 0, y: 60 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={isVisible ? "visible" : "hidden"}
            >
                <div className='flex gap-5 md:gap-8 flex-col md:flex-row justify-between items-center mb-5 md:mb-10'>
                    <motion.div
                        className="space-y-4 flex-1"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Bihar&apos;s Leading Digital Creative Agency
                        </h1>
                    </motion.div>

                    {/* Meta and Google Partner badges */}
                    <motion.div
                        className="flex gap-4 items-center flex-1"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="border border-gray-200 rounded-md p-3"
                            variants={fadeIn}
                            custom={1}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src="/meta.webp"
                                alt="Meta Business Partner"
                                width={180}
                                height={70}
                                className="h-auto w-auto"
                            />
                        </motion.div>
                        <motion.div
                            className="border border-gray-200 rounded-md p-3"
                            variants={fadeIn}
                            custom={2}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src="/google.webp"
                                alt="Google Partner"
                                width={180}
                                height={70}
                                className="h-auto w-auto"
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Content Area */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* About Us Section */}
                        <div className="pt-10 space-y-4">
                            <motion.h2
                                className="flex items-center text-lg font-semibold gap-2 text-[#1a237e]"
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={3}
                            >
                                <motion.span
                                    className="w-2 h-2 bg-[#1a237e] rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                ></motion.span>
                                ABOUT US
                            </motion.h2>

                            <motion.div
                                className="space-y-2"
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                            >
                                <motion.h3
                                    className="text-3xl sm:text-4xl font-bold"
                                    variants={fadeIn}
                                    custom={4}
                                >
                                    Helping Clients <motion.span
                                        className="text-[#1a237e] inline-block"
                                        animate={{
                                            color: ["#1a237e", "#3949ab", "#1a237e"]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >Build Digital Media</motion.span> Presence <motion.span
                                        className="text-[#1a237e]"
                                        animate={{
                                            color: ["#1a237e", "#3949ab", "#1a237e"]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: 1.5
                                        }}
                                    >Since 2021</motion.span>
                                </motion.h3>

                                <motion.p
                                    className="text-gray-700 mt-4 mb-6"
                                    variants={fadeIn}
                                    custom={5}
                                >
                                    Founded in 2021, we are one of the leading
                                    <motion.span
                                        className="text-[#1a237e] font-medium"
                                        whileHover={{
                                            fontWeight: 700,
                                            scale: 1.02
                                        }}
                                        transition={{ duration: 0.2 }}
                                    > Digital Media Agencies In India</motion.span>.
                                </motion.p>

                                <motion.div
                                    variants={fadeIn}
                                    custom={6}
                                >
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            href="/our-story"
                                            className="inline-flex items-center font-medium text-[#1a237e] hover:underline"
                                        >
                                            <span>Read More</span>
                                            <motion.svg
                                                className="w-5 h-5 ml-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </motion.svg>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Images - Office and Team */}
                    <div className="lg:col-span-6">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <motion.div
                                    className="rounded-lg overflow-hidden shadow-lg aspect-video relative"
                                    initial="hidden"
                                    animate={isVisible ? "visible" : "hidden"}
                                    variants={imageVariants}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Fixed overlay - no animation on the gradient itself */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 pointer-events-none" />

                                    <Image
                                        src="/office.webp"
                                        alt="Office Team"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
