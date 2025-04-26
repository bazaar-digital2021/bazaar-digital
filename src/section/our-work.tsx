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

                    <h1 className='text-center md:text-left font-bold text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent '>
                        <span className='text-black font-medium'>
                            Why Bazaar Digital is
                        </span>
                        <span className='block text-primary uppercase font-bold text-7xl'>

                            First choice
                        </span>
                        <span className='text-black text-[39px] block font-medium -mt-3'>
                            For your Business Growth
                        </span>
                    </h1>
                    <p className='text-muted-foreground text-center md:text-left'> Bazaar Digital is the first choice for your business growth because we offer state-of-the-art AI-powered websites, scalable and cost-effective social media marketing, expert SEO consultancy, and tailored digital solutions that drive engagement and measurable results—all with a focus on innovation and efficiency.</p>
                    <Button
                        className=" bg-primary text-xl text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all  gap-2 "
                        size='lg'

                    >
                        <span className='inline-block pt-2 items-center gap-2'>

                            See Our Works
                        </span>
                        <ArrowRight className='w-8 h-8 ml-2' />
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
                                    <div className='bg-primary p-3 rounded-xl w-max'>
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