'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative bg-secondary-50 min-h-[80vh] flex items-center bg-secondary/60">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            Drive Results with Our PPC and Paid Marketing Services
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ready to take your business to the next level? Harness the power of pay-per-click (PPC) and paid marketing strategies to skyrocket your online presence and boost your ROI.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link
                                href="/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-colors "
                            >
                                Get Started →
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
                            {/* Images will be added manually */}
                            <div className="w-full h-full relative">
                                {/* Placeholder for hero image */}
                                <Image src="/ppc/hero.svg" alt="PPC Hero" fill className="object-cover rounded-lg" />
                                {/* <div className="absolute top-0 right-0 w-3/4 h-full bg-primary-100 rounded-lg opacity-20" /> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 