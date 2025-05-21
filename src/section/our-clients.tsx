'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const OurClients = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    // Logo placeholders
    const companyLogos = [
        { id: 1, alt: 'TCS', placeholder: '/companies/1.webp' },
        { id: 2, alt: 'Tech Mahindra', placeholder: '/companies/2.webp' },
        { id: 3, alt: 'Accenture', placeholder: '/companies/3.webp' },
        { id: 4, alt: 'Swiggy', placeholder: '/companies/4.webp' },
        { id: 5, alt: 'L&T', placeholder: '/companies/5.webp' },
        { id: 6, alt: 'Capgemini', placeholder: '/companies/6.webp' },
        { id: 7, alt: 'Google', placeholder: '/companies/7.webp' },
        { id: 8, alt: 'Microsoft', placeholder: '/companies/8.webp' },
        { id: 9, alt: 'Amazon', placeholder: '/companies/9.webp' },
        { id: 10, alt: '10', placeholder: '/companies/10.webp' },
        { id: 11, alt: '11', placeholder: '/companies/11.webp' },
        { id: 12, alt: '12', placeholder: '/companies/12.webp' },
        { id: 13, alt: '13', placeholder: '/companies/13.webp' },
        { id: 14, alt: '14', placeholder: '/companies/14.webp' },
        { id: 15, alt: '15', placeholder: '/companies/15.webp' },
        { id: 16, alt: '16', placeholder: '/companies/16.webp' },
        { id: 17, alt: '17', placeholder: '/companies/17.webp' },
    ];

    // Divide logos into two rows
    const firstRow = [...companyLogos.slice(0, 9)];
    const secondRow = [...companyLogos.slice(9)];

    return (
        <section
            ref={ref}
            className="py-16 bg-primary relative overflow-hidden"
            id='our-clients'
        >
            <div className="container mx-auto px-4 mb-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center flex flex-col gap-2"
                >
                    <h2 className="text-lg md:text-xl font-semibold text-white ">
                        OUR CLIENTS
                    </h2>
                    {/* <div className="h-1 w-24 md:w-40 bg-white mx-auto rounded-full" /> */}
                    <h1 className='text-white/80 text-4xl md:text-5xl font-bold uppercase'>A Trusted Digital Partner</h1>
                    <h2 className="text-lg md:text-xl  text-white mb-3">
                        We Deliver Digital Services To Brands Of All Sizes
                    </h2>
                </motion.div>
            </div>

            {/* Simple marquee using CSS instead of JS animations */}
            <div className="w-full relative">
                {/* First row of logos - automatically scrolling right to left */}
                <div className="relative overflow-hidden w-full mb-0">
                    <div className="flex items-center marquee">
                        {/* First set */}
                        <div className="flex items-center gap-8 marquee-content">
                            {firstRow.map((logo) => (
                                <div
                                    key={`row1-${logo.id}`}
                                    className="flex-shrink-0 mx-8 h-36 w-36 relative hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={logo.placeholder}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate for seamless loop */}
                        <div className="flex items-center gap-8 marquee-content">
                            {firstRow.map((logo) => (
                                <div
                                    key={`row1-dup-${logo.id}`}
                                    className="flex-shrink-0 mx-8 h-36 w-36 relative hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={logo.placeholder}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second row of logos - automatically scrolling left to right */}
                <div className="relative overflow-hidden w-full">
                    <div className="flex items-center marquee-reverse">
                        {/* First set */}
                        <div className="flex items-center gap-8 marquee-content">
                            {secondRow.map((logo) => (
                                <div
                                    key={`row2-${logo.id}`}
                                    className="flex-shrink-0 mx-8 h-36 w-36 relative hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-full h-full flex items-center justify-center m">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={logo.placeholder}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate for seamless loop */}
                        <div className="flex items-center gap-8 marquee-content">
                            {secondRow.map((logo) => (
                                <div
                                    key={`row2-dup-${logo.id}`}
                                    className="flex-shrink-0 mx-8 h-36 w-36 relative hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="w-full h-full flex items-center justify-center  ">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={logo.placeholder}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Simple gradient overlays */}
            {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" /> */}

            {/* CSS for the marquee animations */}
            <style jsx global>{`
                .marquee {
                    display: flex;
                    width: 100%;
                    overflow: hidden;
                }
                
                .marquee-content {
                    display: flex;
                    animation: marquee 40s linear infinite;
                }
                
                .marquee-reverse .marquee-content {
                    animation: marquee-reverse 40s linear infinite;
                }
                
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                
                @keyframes marquee-reverse {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }
                
                /* Pause on hover for a more subtle interactive effect */
                // .marquee:hover .marquee-content,
                // .marquee-reverse:hover .marquee-content {
                //     animation-play-state: paused;
                // }
            `}</style>
        </section>
    );
};

export default OurClients; 