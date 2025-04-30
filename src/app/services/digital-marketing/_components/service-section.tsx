'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { ServiceHero } from "./service-hero";

interface FeatureItem {
    title: string;
    description: string;
    icon: string;
}

interface CollaborationFeature {
    title: string;
    description: string;
}

interface ServiceSectionProps {
    id: string;
    title: string;
    description: string;
    image: string;
    features: {
        title: string;
        features: FeatureItem[];
    };
    collaboration: {
        title: string;
        description: string;
        features: CollaborationFeature[];
    };
}

export function ServiceSection({
    id,
    title,
    description,
    image,
    features,
    collaboration,
}: ServiceSectionProps) {
    return (
        <section id={id} className="py-20 overflow-x-hidden">
            {/* Hero Section */}
            <ServiceHero title={title} description={description} image={image} />
            <div className="container mx-auto px-4">
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full"
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                        />
                    </motion.div> */}
                {/* </div> */}

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center my-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {features.title}
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
                    {features.features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <div className="w-8 h-8 bg-blue-600 rounded-full" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Collaboration Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {collaboration.title}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {collaboration.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collaboration.features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                        >
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 