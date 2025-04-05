'use client'
import { BarChart, Code, FileEdit, Globe, MessageSquare, Search, Share2, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    // Floating elements data for orbit animation with digital marketing services icons
    const floatingElements = [
        { icon: <Search className="w-6 h-6 text-white" />, color: "bg-blue-600", delay: 0, label: "SEO" },
        { icon: <Globe className="w-6 h-6 text-white" />, color: "bg-indigo-600", delay: 0.3, label: "Web Dev" },
        { icon: <BarChart className="w-6 h-6 text-white" />, color: "bg-green-600", delay: 0.6, label: "Analytics" },
        { icon: <Share2 className="w-6 h-6 text-white" />, color: "bg-pink-600", delay: 0.9, label: "Social" },
        { icon: <FileEdit className="w-6 h-6 text-white" />, color: "bg-amber-600", delay: 1.2, label: "Content" },
        { icon: <ShoppingCart className="w-6 h-6 text-white" />, color: "bg-red-600", delay: 1.5, label: "E-Commerce" },
    ]

    return (
        <div className="w-full bg-white py-6 px-4 md:px-8 lg:px-12 md:py-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col gap-16  md:flex-row md:items-center justify-between md:gap-8">
                    {/* Left Section */}
                    <motion.div
                        className="flex-1 space-y-6"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Main Content */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <motion.div
                                    className="text-3xl md:text-5xl font-bold"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <span className="block text-left md:text-center text-primary text-hindi ">व्यापार ke liye</span>
                                </motion.div>
                                <motion.div
                                    className="text-6xl md:text-9xl font-bold text-primary relative"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.6,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                >
                                    <span className="relative  inline-block  font-extrabold">
                                        #ZaruriHai
                                        <motion.span
                                            className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-yellow-400"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isLoaded ? {
                                                opacity: [0, 1, 0],
                                                scale: [0, 1.4, 0],
                                                x: [0, 5, 0],
                                                y: [0, -5, 0]
                                            } : {}}
                                            transition={{
                                                duration: 1.5,
                                                delay: 1.2,
                                                repeat: Infinity,
                                                repeatDelay: 4
                                            }}
                                        />
                                    </span>
                                </motion.div>
                            </div>
                        </div>

                        <motion.h1
                            className='text-2xl md:text-4xl font-bold text-primary'
                            initial={{ opacity: 0, y: 20 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            Let's Grow Your Revenue <br />
                            Through Digital Marketing.
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="pt-2"
                        >
                            <motion.button
                                className="px-6 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05, backgroundColor: "#142a7b" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started Today
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Section - Pattern Background and Person Image */}
                    <motion.div
                        className='flex-1 h-full'
                        initial={{ opacity: 0, x: 100 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='h-full w-full flex justify-center items-center'>
                            <div className='relative'>
                                {/* Animated background glow */}
                                <motion.div
                                    className="absolute rounded-full w-[90%] h-[90%] bg-blue-100 top-[5%] left-[5%] z-0"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Circular container for the image */}
                                <motion.div
                                    className='relative h-[300px] w-[300px] md:h-[330px] md:w-[330px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden'
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <div className='absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent z-10'></div>
                                    <Image
                                        src='/founder.png'
                                        fill
                                        alt='human'
                                        className='object-cover rounded-full absolute z-10'
                                        sizes="(max-width: 768px) 300px, (max-width: 1024px) 330px, 400px"
                                        priority
                                    />
                                </motion.div>

                                {/* Floating orbit animation container */}
                                <div className="absolute inset-[-100px] z-0">
                                    {/* Icons positioned in a circular orbit around the image */}
                                    {floatingElements.map((element, index) => {
                                        // Calculate initial position around the circle
                                        const angleOffset = (index * (360 / floatingElements.length));
                                        const radius = 220; // Increased distance from center

                                        // Create orbit animation
                                        const orbitAnimation = {
                                            // Full circle rotation + small wave-like movement
                                            x: [
                                                radius * Math.cos((angleOffset * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 40) * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 80) * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 120) * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 160) * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 200) * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 240) * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 280) * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 320) * Math.PI) / 180),
                                                radius * Math.cos(((angleOffset + 360) * Math.PI) / 180),
                                            ],
                                            y: [
                                                radius * Math.sin((angleOffset * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 40) * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 80) * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 120) * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 160) * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 200) * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 240) * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 280) * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 320) * Math.PI) / 180),
                                                radius * Math.sin(((angleOffset + 360) * Math.PI) / 180),
                                            ],
                                            scale: [1, 1.1, 1, 0.95, 1]
                                        };

                                        return (
                                            <motion.div
                                                key={index}
                                                className={`absolute flex flex-col items-center justify-center rounded-full p-3 ${element.color} shadow-lg z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                                                initial={{ opacity: 0 }}
                                                animate={isLoaded ? {
                                                    opacity: 1,
                                                    ...orbitAnimation
                                                } : {}}
                                                transition={{
                                                    opacity: { duration: 0.4, delay: 1 + element.delay },
                                                    x: {
                                                        duration: 30,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                        delay: element.delay
                                                    },
                                                    y: {
                                                        duration: 30,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                        delay: element.delay
                                                    },
                                                    scale: {
                                                        duration: 8,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: element.delay
                                                    }
                                                }}
                                                whileHover={{
                                                    scale: 1.2,
                                                    zIndex: 30,
                                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                                                }}
                                            >
                                                {element.icon}

                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Animated dots */}
                                {[...Array(15)].map((_, i) => (
                                    <motion.div
                                        key={`dot-${i}`}
                                        className="absolute w-1.5 h-1.5 rounded-full bg-blue-500 opacity-70 z-0"
                                        initial={{
                                            x: (Math.random() * 600 - 300),
                                            y: (Math.random() * 600 - 300),
                                            opacity: Math.random() * 0.5 + 0.3
                                        }}
                                        animate={{
                                            x: (Math.random() * 600 - 300),
                                            y: (Math.random() * 600 - 300),
                                            opacity: [0.3, 0.8, 0.3]
                                        }}
                                        transition={{
                                            duration: 10 + Math.random() * 20,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: Math.random() * 5
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
} 