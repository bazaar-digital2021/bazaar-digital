'use client'
import { ArrowRight, BarChart, Code, FileEdit, Globe, MessageSquare, Search, Share2, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useRouter } from '@bprogress/next/app'

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])
    const router = useRouter();

    // Floating elements data for orbit animation with digital marketing services icons


    return (
        <div className="w-full  py-3 px-4 md:px-8 lg:px-12 md:py-1 overflow-hidden relative">
            {/* Background SVG Pattern */}

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col items-start lg:flex-row md:items-center justify-between md:gap-8">
                    {/* Left Section */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
                        <Image
                            src="/bg-pattern2.svg"
                            alt="Background Pattern"
                            width={1000}
                            height={1000}
                            className="object-cover opacity-30 object-left-top transform translate-y-[20%] scale-200"
                            style={{
                                objectPosition: 'left center',
                                height: '70%',
                                top: '30%',
                                left: '0'
                            }}
                            priority
                        />
                    </div>
                    <motion.div
                        className="flex-1 space-y-2 md:self-center md:mt-36"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Main Content */}
                        <div className="space-y-4">
                            <div className="space-y-12 md:space-y-28">
                                <motion.h1
                                    className="text-xl md:text-2xl font-normal text-hindi text-start md:text-center text-primary ml-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    बिहार का अपना,
                                    बिहार का गौरव, आपका अपना!
                                </motion.h1>
                                <motion.div
                                    className="text-3xl md:text-5xl font-bold"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <span className="block text-center text-secondary text-hindi">व्यापार ke liye</span>
                                </motion.div>

                            </div>
                        </div>



                        <motion.div
                            className="text-6xl md:text-9xl font-bold text-primary"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: 0.6,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <span className="relative block text-center md:text-start font-extrabold">
                                #ZaruriHai
                                {/* <motion.span
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
                                        /> */}
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className=" flex justify-center"
                        >
                            <Button
                                className=" bg-primary text-xl text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all  gap-2 "
                                size='lg'
                                onClick={() => router.push('/contact-us')}
                            >
                                <span className='inline-block pt-2 items-center gap-2'>

                                    Get In Touch
                                </span>
                                <ArrowRight className='w-8 h-8 ml-2' />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Section - Pattern Background and Person Image */}
                    <motion.div
                        className='flex-1 h-full relative'
                        initial={{ opacity: 0, x: 100 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='h-full w-full flex justify-center items-center'>
                            <div className='relative'>



                                {/* Circular container for the image */}
                                <motion.div
                                    className='relative left-6 md:left-0 top-12 h-[350px] w-[350px] md:h-[450px] md:w-[550px] lg:h-[550px] lg:w-[500px] -mt-12 md:mt-0'
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <div className='absolute z-10'></div>
                                    <Image
                                        src='/founder1.webp'
                                        fill
                                        alt='human'
                                        className='object-contain lg:object-cover absolute z-5 drop-shadow-[15px_15px_15px_rgba(0,0,0,0.45)]'
                                        sizes="(max-width: 768px) 350px, (max-width: 1024px) 450px, 500px"
                                        priority
                                    />
                                </motion.div>

                                {/* Decorative elements */}
                                {/* <motion.div
                                    className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-yellow-400"
                                    initial={{ opacity: 0 }}
                                    animate={isLoaded ? { opacity: 1 } : {}}
                                    transition={{ delay: 1 }}
                                />
                                <motion.div
                                    className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-blue-500"
                                    initial={{ opacity: 0 }}
                                    animate={isLoaded ? { opacity: 1 } : {}}
                                    transition={{ delay: 1.2 }}
                                />
                                <motion.div
                                    className="absolute top-1/2 -right-3 h-5 w-5 rounded-full bg-green-400"
                                    initial={{ opacity: 0 }}
                                    animate={isLoaded ? { opacity: 1 } : {}}
                                    transition={{ delay: 1.4 }}
                                /> */}

                                {/* Floating orbit elements - simplified and reduced */}
                                {/* {floatingElements.slice(0, 3).map((element, index) => {
                                    const angleOffset = (index * (360 / 3));
                                    const radius = 260;

                                    return (
                                        <motion.div
                                            key={index}
                                            className={`absolute flex items-center justify-center rounded-full p-3 ${element.color} shadow-lg z-20`}
                                            initial={{
                                                opacity: 0,
                                                x: radius * Math.cos((angleOffset * Math.PI) / 180) + 225,
                                                y: radius * Math.sin((angleOffset * Math.PI) / 180) + 225
                                            }}
                                            animate={isLoaded ? {
                                                opacity: 1,
                                                x: radius * Math.cos((angleOffset * Math.PI) / 180) + 225,
                                                y: radius * Math.sin((angleOffset * Math.PI) / 180) + 225,
                                                scale: [1, 1.1, 1]
                                            } : {}}
                                            transition={{
                                                opacity: { duration: 0.4, delay: 1 + element.delay },
                                                scale: {
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }
                                            }}
                                        >
                                            {element.icon}
                                        </motion.div>
                                    );
                                })} */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >
        </div >
    )
}