'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageSquare, Video, Smartphone, AtSign } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-24 bg-secondary-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[400px]"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex justify-center items-center">
                                        <Mail className="w-12 h-12 text-primary-600" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <MessageSquare className="w-12 h-12 text-primary-600" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <Video className="w-12 h-12 text-primary-600" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <AtSign className="w-12 h-12 text-primary-600" />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <Smartphone className="w-12 h-12 text-primary-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Start Your Journey to Success With Techsharks
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ready to boost your online presence, increase conversions, and achieve a higher ROI? Contact us at Techsharks today, and let's embark on your PPC and paid marketing journey together.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/contact"
                                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-colors"
                            >
                                Your success in the digital world is just a click away!
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 