import { Computer, Database, Facebook, FileJson, FileType, Instagram, Linkedin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="w-full bg-white py-6 px-4 md:px-8 lg:px-12 md:py-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
                    {/* Left Section */}
                    <div className="flex-1 space-y-6">


                        {/* Main Content */}
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-4xl font-bold text-[#1a237e]">
                                BIHAR&apos;S LEADING CREATIVE COMPANY
                            </h1>
                            <div className="space-y-2">
                                <div className="text-3xl md:text-5xl font-bold">
                                    <span className="text-[#1a237e]">व्यापार ke liye</span>
                                </div>
                                <div className="text-4xl md:text-6xl font-bold text-[#1a237e]">
                                    #ZaruriHai
                                </div>
                            </div>

                            {/* Services */}
                            <div className="grid grid-cols-2 gap-4 text-lg font-medium text-[#1a237e]">
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    Digital Marketing
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    Influencer Marketing
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    Web Development
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    App Development
                                </div>
                            </div>
                        </div>

                        {/* Contact Bar */}
                        <div className="bg-[#1a237e] text-white py-3 px-6 rounded-lg">
                            <div className="w-full flex flex-wrap items-center justify-center md:justify-between gap-4 text-sm">
                                <div className="flex items-center justify-between gap-2">
                                    Follow Us on:
                                    <div className="flex gap-2 md:gap-6">
                                        <Link href="https://facebook.com" className="hover:opacity-80">
                                            <Facebook className='w-6 h-6' />
                                        </Link>
                                        <Link href="https://twitter.com" className="hover:opacity-80">
                                            <Linkedin className='w-6 h-6' />
                                        </Link>
                                        <Link href="https://instagram.com" className="hover:opacity-80">
                                            <Instagram className='w-6 h-6' />
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 ml-auto">
                                    <Phone className='w-6 h-6' />
                                    <Link href="tel:+918210546110" className="hover:underline">
                                        +91 8210546110
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Pattern Background and Person Image */}
                    <div className='flex-1 h-full'>
                        <div className='h-full w-full flex justify-center items-center'>
                            <div className='relative'>
                                {/* Circular container for the image */}
                                <div className='relative h-[300px] w-[300px] md:h-[330px] md:w-[330px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden border-4 border-[#1a237e]'>
                                    <Image
                                        src='/founder.JPG'
                                        fill
                                        alt='human'
                                        className='object-cover rounded-full'
                                        sizes="(max-width: 768px) 300px, (max-width: 1024px) 330px, 400px"
                                        priority
                                    />
                                </div>

                                {/* Icons positioned in a circular orbit around the image */}
                                <div className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                                    <FileJson className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-white rounded-full h-10 w-10 md:h-12 md:w-12 bg-yellow-500 p-2 shadow-lg" />
                                </div>

                                <div className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] [animation-delay:-4s]">
                                    <FileType className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-white rounded-full h-10 w-10 md:h-12 md:w-12 bg-blue-600 p-2 shadow-lg" />
                                </div>

                                <div className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] [animation-delay:-12s]">
                                    <Database className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-full h-10 w-10 md:h-12 md:w-12 bg-green-600 p-2 shadow-lg" />
                                </div>

                                <div className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] [animation-delay:-16s]">
                                    <Computer className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-white rounded-full h-10 w-10 md:h-12 md:w-12 bg-purple-600 p-2 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 