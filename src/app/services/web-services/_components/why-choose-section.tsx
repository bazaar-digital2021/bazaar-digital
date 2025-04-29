'use client'
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface WhyChooseSectionProps {
    title: string;
    benefits: {
        title: string;
        description: string;
    }[];
}

export function WhyChooseSection({ title, benefits }: WhyChooseSectionProps) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-primary">
                        Why Choose {title}?
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 