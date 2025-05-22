'use client'
import { Card, CardContent } from '@/components/ui/card'
import { testimonial } from '@/constant/testimonial'
import Image from 'next/image'
import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Testimonial = () => {
    return (
        <section className="w-full py-10 md:py-10  bg-muted/50" id='clients'>
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="md:text-6xl uppercase font-medium text-center mb-8 text-black/70">
                    Listen From
                    <span className='font-bold ml-2 text-primary'>
                        Our Clients
                    </span>

                </h2>
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonial.map((testimonial, index) => (
                        <Card key={index} className="bg-background border-none shadow-md">
                            <CardContent className="pt-6 ">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="relative h-12 w-12 flex-shrink-0">
                                            <Image
                                                width={40}
                                                height={40}
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                className="rounded-full object-cover border-2 border-primary/20"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{testimonial.author}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </p>
                                            <p className="text-sm text-primary">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                    <video width="320" height="240" controls preload="auto">
                                        <source src={testimonial.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div> */}

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {testimonial.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card key={index} className="bg-background border-none shadow-md">
                                        <CardContent className="pt-6 ">
                                            <div className="flex flex-col space-y-4">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="relative h-12 w-12 flex-shrink-0">
                                                        <Image
                                                            fill
                                                            src={testimonial.image}
                                                            alt={testimonial.author}
                                                            className="rounded-full object-cover border-2 border-primary/20"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">{testimonial.author}</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {testimonial.role}
                                                        </p>
                                                        <p className="text-sm text-primary">
                                                            {testimonial.company}
                                                        </p>
                                                    </div>
                                                </div>
                                                <video width="320" height="240" controls preload="auto">
                                                    <source src={testimonial.videoUrl} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>

                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </section>
    )
}

export default Testimonial