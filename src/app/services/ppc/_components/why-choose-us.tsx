'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Target, LineChart, Shield, Users, BarChart, Search, PieChart, TrendingUp } from "lucide-react";

const reasons = [
    {
        title: "Expertise",
        description: "Our team of certified PPC specialists brings years of experience across diverse industries.",
        features: [
            "Google Ads Certified Professionals",
            "Meta Advertising Experts",
            "Data Analytics Specialists"
        ],
        icon: Trophy
    },
    {
        title: "Customized Strategies",
        description: "We develop tailored PPC campaigns that align with your business goals and target audience.",
        features: [
            "Industry-Specific Approach",
            "Data-Driven Decision Making",
            "Continuous Optimization"
        ],
        icon: Target
    },
    {
        title: "Transparency",
        description: "We believe in complete transparency in our processes, reporting, and communication.",
        features: [
            "Regular Performance Reports",
            "Clear Cost Breakdown",
            "24/7 Campaign Monitoring"
        ],
        icon: LineChart
    }
];

const floatingIcons = [
    {
        icon: Search,
        position: "top-10 left-10",
        animation: {
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            duration: 4
        }
    },
    {
        icon: PieChart,
        position: "top-1/4 right-16",
        animation: {
            y: [0, -15, 0],
            rotate: [0, -8, 0],
            duration: 5
        }
    },
    {
        icon: Shield,
        position: "bottom-1/4 left-20",
        animation: {
            y: [5, -5, 5],
            rotate: [5, -5, 5],
            duration: 4.5
        }
    },
    {
        icon: TrendingUp,
        position: "bottom-20 right-24",
        animation: {
            y: [-8, 8, -8],
            rotate: [-3, 3, -3],
            duration: 3.5
        }
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        Why Choose Bazaar Digital for PPC/Paid Marketing?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Partner with us for result-driven PPC campaigns that deliver measurable ROI
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8"
                    >
                        {/* Central Image */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="relative w-[80%] h-[80%]">
                                <Image
                                    src="/ppc/analytics.svg"
                                    alt="PPC Analytics"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Floating Icons */}
                        {floatingIcons.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`absolute ${item.position}`}
                                animate={{
                                    y: item.animation.y,
                                    rotate: item.animation.rotate
                                }}
                                transition={{
                                    duration: item.animation.duration,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform scale-150" />
                                    <div className="relative bg-white rounded-full p-3 shadow-lg">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl" />
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-2xl blur-2xl"
                        />
                    </motion.div>

                    <div className="space-y-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-secondary/20 rounded-xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <reason.icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-secondary mb-2">
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {reason.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {reason.features.map((feature, featureIndex) => (
                                                <motion.li
                                                    key={feature}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: (index * 0.2) + (featureIndex * 0.1) }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center space-x-2 text-gray-600"
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <span>{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 