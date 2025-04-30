'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface DesignServiceProps {
    id: string;
    title: string;
    description: string;
    image: string;
    features?: string[];
    reverse?: boolean;
    ctaText?: string;
    ctaLink?: string;
}

export function DesignServiceSection({
    id,
    title,
    description,
    image,
    features = [],
    reverse = false,
    ctaText = "Get Started",
    ctaLink = "/contact"
}: DesignServiceProps) {
    return (
        <section id={id} className="py-24 bg-white overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        {features.length > 0 && (
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-gray-600">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={ctaLink}
                                className="inline-block bg-secondary hover:bg-primary text-white font-semibold px-8 py-3 pt-4 rounded-full transition-colors"
                            >
                                {ctaText}
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`relative h-[500px] ${reverse ? 'lg:order-first' : ''}`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-contain rounded-lg"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl" />
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-2xl blur-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 