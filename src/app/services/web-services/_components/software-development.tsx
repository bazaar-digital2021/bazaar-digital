import { ServiceHeader } from "./service-header";
import { WhatIsSection } from "./what-is-section";
import { WhyChooseSection } from "./why-choose-section";

export function SoftwareDevelopment() {
    return (
        <>
            <ServiceHeader
                title="Software Development"
                description="Transform your business with custom software solutions. Our expert team delivers robust, scalable, and innovative software tailored to your needs."
                imageSrc="/web-services/software.webp"
                imageAlt="Software Development"
            />
            <WhatIsSection
                title="Software Development"
                description="Software development is the process of designing, creating, testing, and maintaining software applications. It involves writing code, implementing features, and ensuring the software meets specific requirements and quality standards."
                imageSrc="/web-services/software2.webp"
                imageAlt="What is Software Development"
                features={[
                    "Custom application development",
                    "Cross-platform compatibility",
                    "Cloud integration",
                    "API development",
                    "Database management",
                    "Quality assurance"
                ]}
            />
            <WhyChooseSection
                title="Software Development"
                benefits={[
                    {
                        title: "Custom Solutions",
                        description: "Get software specifically designed to address your unique business challenges and requirements."
                    },
                    {
                        title: "Scalability",
                        description: "Build applications that can grow with your business and handle increasing demands."
                    },
                    {
                        title: "Integration",
                        description: "Seamlessly connect with existing systems and third-party services."
                    },
                    {
                        title: "Security",
                        description: "Implement robust security measures to protect your data and users."
                    },
                    {
                        title: "Performance",
                        description: "Optimize for speed, efficiency, and reliability."
                    },
                    {
                        title: "Support",
                        description: "Get ongoing maintenance and support to keep your software running smoothly."
                    }
                ]}
            />
        </>
    );
} 