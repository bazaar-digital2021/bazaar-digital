import { marketingSolutions } from "../_data/content";
import { motion } from "framer-motion";

export function MarketingSolutions() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {marketingSolutions.title}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {marketingSolutions.features.map((feature, index) => (
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