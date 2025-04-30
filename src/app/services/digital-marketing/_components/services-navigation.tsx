'use client'
import { motion } from "framer-motion";

const services = [
    {
        title: "Social Media Marketing",
        href: "#social-media-marketing",
        description: "Build your brand presence across social media platforms"
    },
    {
        title: "Influencer Marketing",
        href: "#influencer-marketing",
        description: "Leverage the power of influencers to amplify your brand message"
    },
    {
        title: "Content Marketing",
        href: "#content-marketing",
        description: "Create valuable content that attracts and engages your target audience"
    },
    {
        title: "Public Relations (PR)",
        href: "#public-relations-pr",
        description: "Build and maintain a positive public image for your brand"
    },
    {
        title: "Neuro Marketing",
        href: "#neuro-marketing",
        description: "Apply neuroscience principles to optimize marketing strategies"
    },
    {
        title: "Diversity Marketing",
        href: "#diversity-marketing",
        description: "Create inclusive marketing campaigns that resonate with diverse audiences"
    },
    {
        title: "Email Marketing",
        href: "#email-marketing",
        description: "Nurture leads and build customer relationships through targeted emails"
    },
    {
        title: "Online Reputation Management (ORM)",
        href: "#online-reputation-management-orm",
        description: "Monitor and improve your brand's online presence and reputation"
    },
    {
        title: "B2C Marketing",
        href: "#b2c-marketing",
        description: "Connect with consumers through effective direct-to-customer strategies"
    },
    {
        title: "Whatsapp Marketing",
        href: "#whatsapp-marketing",
        description: "Engage customers through personalized WhatsApp communication"
    }
];

export function ServicesNavigation() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Digital Marketing Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our comprehensive range of digital marketing services designed to help your business grow
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.a
                            key={service.title}
                            href={service.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
} 