import { ServiceHeader } from "./service-header";
import { WhatIsSection } from "./what-is-section";
import { WhyChooseSection } from "./why-choose-section";

export function CustomWebDevelopment() {
    return (
        <>
            <ServiceHeader
                title="Custom Web Development"
                description="Get a unique, tailor-made website that perfectly matches your business needs. Our custom web development services deliver exceptional digital experiences."
                imageSrc="/web-services/custom.webp"
                imageAlt="Custom Web Development"
            />
            <WhatIsSection
                title="Custom Web Development"
                description="Custom web development involves creating websites from scratch, specifically designed to meet your unique business requirements. Unlike template-based solutions, custom development offers complete control over design, functionality, and user experience."
                imageSrc="/web-services/custom2.webp"
                imageAlt="What is Custom Web Development"
                features={[
                    "Tailored to your specific needs",
                    "Unique design and functionality",
                    "Scalable architecture",
                    "Optimized performance",
                    "Enhanced security",
                    "Future-proof technology"
                ]}
            />
            <WhyChooseSection
                title="Custom Web Development"
                benefits={[
                    {
                        title: "Unique Identity",
                        description: "Stand out from competitors with a website that reflects your brand's unique personality and values."
                    },
                    {
                        title: "Full Control",
                        description: "Have complete control over every aspect of your website, from design to functionality."
                    },
                    {
                        title: "Scalability",
                        description: "Build a website that can grow with your business, adding new features as needed."
                    },
                    {
                        title: "Performance",
                        description: "Optimized code and architecture ensure fast loading times and smooth user experience."
                    },
                    {
                        title: "Security",
                        description: "Implement robust security measures tailored to your specific needs and requirements."
                    },
                    {
                        title: "Integration",
                        description: "Seamlessly integrate with your existing systems and third-party services."
                    }
                ]}
            />
        </>
    );
} 