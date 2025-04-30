'use client'
import { motion } from "framer-motion";
import { MousePointer, Eye, Target, DollarSign } from "lucide-react";

const benefits = [
    {
        title: "Immediate Results",
        description: "Unlike organic methods, PPC and paid advertising deliver quick and measurable results.",
        icon: MousePointer,
    },
    {
        title: "Increased Visibility",
        description: "Get your brand in front of a larger audience, increasing brand awareness and recognition.",
        icon: Eye,
    },
    {
        title: "Targeted Advertising",
        description: "Reach your ideal customers with precision targeting, ensuring your budget isn't wasted on uninterested parties.",
        icon: Target,
    },
    {
        title: "Cost-Effective",
        description: "You have control over your budget, and you only pay when someone clicks on your ad.",
        icon: DollarSign,
    },
];

export function BenefitsSection() {
    return (
        <section className="py-24 bg-secondary-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        The Benefits of PPC and Paid Marketing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our PPC advertising and paid marketing offer numerous benefits for businesses looking to promote their products or services online
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center bg-secondary/20 rounded-md p-4"
                        >
                            <div className="mb-6 mx-auto">
                                <div className="w-24 h-24 rounded-full bg-secondary-100 flex items-center justify-center mx-auto">
                                    <benefit.icon className="w-10 h-10 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 