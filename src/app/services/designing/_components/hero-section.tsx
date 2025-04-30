'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative bg-secondary-50 min-h-[80vh] flex items-center">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            Upscale your Brand with Creative Designs
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Fulfill your business label and package designing, flyers and billboards, banner design, presentation and brochure design and many more needs with Techshakrs.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link
                                href="/contact-us"
                                className="inline-block bg-secondary hover:bg-primary text-white font-semibold px-8 py-3 pt-4 rounded-full transition-colors"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px]"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-full relative">
                                <Image
                                    src="/designing/hero.png"
                                    alt="Creative Design Services"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 