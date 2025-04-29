'use client'
import { motion } from "framer-motion";
import Image from "next/image";

interface WhatIsSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    features: string[];
}

export function WhatIsSection({
    title,
    description,
    imageSrc,
    imageAlt,
    features,
}: WhatIsSectionProps) {
    return (
        <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-primary">What is {title}?</h2>
                        <p className="text-lg text-muted-foreground">{description}</p>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    <span>{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full"
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 