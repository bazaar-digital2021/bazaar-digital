'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AdPlatformSectionProps {
    id: string;
    title: string;
    description: string;
    image: string;
    features: {
        title: string;
        description: string;
        icon?: string;
    }[];
    reverse?: boolean;
    ctaText?: string;
    ctaLink?: string;
}

export function AdPlatformSection({
    id,
    title,
    description,
    image,
    features,
    reverse = false,
    ctaText = "Get Customer Online",
    ctaLink = "#contact"
}: AdPlatformSectionProps) {
    return (
        <section id={id} className="py-20 bg-white">
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
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-1">
                                        <div className="w-3 h-3 rounded-full bg-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={ctaLink}
                                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-colors"
                            >
                                {ctaText} →
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`relative h-[400px] ${reverse ? 'lg:order-first' : ''}`}
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 