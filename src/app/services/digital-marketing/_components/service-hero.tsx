'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "@bprogress/next/app";

interface ServiceHeroProps {
    title: string;
    description: string;
    image: string;
}

export function ServiceHero({ title, description, image }: ServiceHeroProps) {
    const router = useRouter();
    return (
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">
                            {title}
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors pt-4"
                            onClick={() => router.push("/plan-and-pricing/digital-media-marketing-plan-and-pricing")}>

                            Get Started
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] w-full rounded-md overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain rounded-md"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 