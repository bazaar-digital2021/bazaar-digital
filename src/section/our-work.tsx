'use client'
import { motion } from 'framer-motion'

import { ArrowRight } from 'lucide-react'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { AboutUsCards } from '@/constant'



export default function OurWork() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=' px-4 md:px-12  py-12 md:py-20 overflow-hidden'
            id='about'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 md:gap-12 overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", }}
                    className='space-y-12'>
                    <p className='text-pink-600 font-bold font-mono text-xl text-center'>Our Achievements </p>
                    <h1 className='text-center md:text-left font-bold text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#1a237e] via-blue-600 to-[#48C89C]'>
                        Why Bazaar Digital is First choice for your Business Growth ?
                    </h1>
                    <p className='text-muted-foreground text-center md:text-left'> Bazaar Digital is the first choice for your business growth because we offer state-of-the-art AI-powered websites, scalable and cost-effective social media marketing, expert SEO consultancy, and tailored digital solutions that drive engagement and measurable results—all with a focus on innovation and efficiency.</p>
                    <Button className='bg-secondary/60 border-transparent  border-b-4 border-b-secondary/80 hover:border-b-secondary rounded-full hover:bg-secondary/60 hover:border-b-2 flex items-center gap-4 hover:gap-2 transition-all duration-500 ease-in-out shadow-sm' size='lg'>
                        <span className=' text-black'>See Our Works</span>
                        <ArrowRight className=" h-4 w-4" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", }}
                    className='grid  grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                    {AboutUsCards.map((card, index) => (
                        <Card key={index} className='mb-4'>
                            <CardHeader>
                                <CardTitle className='flex items-center gap-4 text-xl'>
                                    <div className='bg-[#48C89C] p-3 rounded-xl w-max'>
                                        <card.icon className='h-6 w-6 text-white' />
                                    </div>
                                    {card.title}
                                </CardTitle>
                                <CardDescription>{card.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}

                </motion.div>

            </div>

        </motion.section>
    )
}