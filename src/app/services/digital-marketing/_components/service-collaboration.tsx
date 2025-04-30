'use client'
import { motion } from "framer-motion";

interface CollaborationFeature {
    title: string;
    description: string;
}

interface ServiceCollaborationProps {
    title: string;
    description: string;
    features: CollaborationFeature[];
}

export function ServiceCollaboration({ title, description, features }: ServiceCollaborationProps) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
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