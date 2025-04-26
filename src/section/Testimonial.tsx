
import { Card, CardContent } from '@/components/ui/card'
import { testimonial } from '@/constant/testimonial'
import Image from 'next/image'
import React from 'react'


const Testimonial = () => {
    return (
        <section className="w-full py-10 md:py-20 md:pt-16 bg-muted/50" id='clients'>
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="md:text-4xl font-bold text-center mb-8 text-primary">
                    Listen From Our Clients
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                                    <blockquote>
                                        <p className="text-muted-foreground italic relative">
                                            <span className="text-3xl text-primary absolute -top-4 -left-2">
                                                &quot;
                                            </span>
                                            {testimonial.quote}
                                            <span className="text-3xl text-primary absolute -bottom-4">
                                                &quot;
                                            </span>
                                        </p>
                                    </blockquote>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial
