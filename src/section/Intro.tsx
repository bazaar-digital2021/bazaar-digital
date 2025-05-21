'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import MovingMessages from '@/components/moving-messages'

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
                <motion.div
                    className="space-y-4 flex-1"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                    custom={0}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black/80 uppercase">
                        Your Trusted <span className='text-primary '>Google & Meta Partner</span>
                    </h1>
                </motion.div>
                <div className='flex gap-5 md:gap-8 flex-col md:flex-row justify-between items-start my-5 md:my-10'>
                    <motion.div
                        className="flex items-center justify-center gap-8 md:gap-12 flex-1 "
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <motion.div

                            variants={fadeIn}
                            custom={1}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src="/meta.svg"
                                alt="Meta Business Partner"
                                width={300}
                                height={300}
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div

                            variants={fadeIn}
                            custom={2}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src="/google.svg"
                                alt="Google Partner"
                                width={300}
                                height={300}
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Content Area */}
                    <div className='space-y-6'>




                        <div className=" space-y-6 mt-16">


                            <div className="pt-10  space-y-4">
                                {/* <motion.h2
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
                                </motion.h2> */}

                                <motion.div
                                    className="space-y-2"
                                    initial="hidden"
                                    animate={isVisible ? "visible" : "hidden"}
                                >
                                    <motion.h3
                                        className="text-3xl sm:text-[42px] font-medium text-black/80"
                                        variants={fadeIn}
                                        custom={4}
                                    >
                                        Helping Clients Build<motion.span
                                            className="block  text-black/80 font-medium text-[38px]"

                                        > Digital Media Presence </motion.span>
                                        <motion.span
                                            className="text-primary md:text-[77px] block mt-1 font-bold uppercase"

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
                    </div>

                    {/* Right Images - Office and Team */}
                    <div className='self-start '>
                        <div className="grid  gap-4">
                            <div className="col-span-12">
                                <motion.div

                                    initial="hidden"
                                    animate={isVisible ? "visible" : "hidden"}
                                    variants={imageVariants}

                                >
                                    {/* Fixed overlay - no animation on the gradient itself */}
                                    {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 pointer-events-none" /> */}

                                    {/* <p className='text-black text-lg'>
                                        As a trusted Google & Meta Partner, Bazaar Digital offers expert strategies, exclusive insights, and powerful tools to boost your digital marketing success. Partner with us for high-impact PPC and social media advertising.
                                    </p> */}

                                </motion.div>
                            </div>
                        </div>
                        {/* ABOUT US IMAGES */}
                        <div className='grid grid-cols-2 gap-4 mt-4 md:mt-20'>
                            <div className='relative rounded-2xl overflow-hidden'>
                                <Image src="/bd-office-1.JPEG" alt="About Us" width={500} height={500} className='rounded-2xl' />
                            </div>
                            <div className='relative rounded-2xl overflow-hidden mt-10'>
                                <Image src="/design.png" alt="About Us" width={500} height={500} />
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
            {/* <div className='col-span-2 mt-8'>
                <MovingMessages />
            </div> */}
        </section>
    )
}
