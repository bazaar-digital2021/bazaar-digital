import { ServiceHeader } from "./service-header";
import { WhatIsSection } from "./what-is-section";
import { WhyChooseSection } from "./why-choose-section";

export function WordpressDevelopment() {
    return (
        <>
            <ServiceHeader
                title="WordPress Development"
                description="Transform your online presence with our expert WordPress development services. We create stunning, functional, and SEO-friendly websites that drive results."
                imageSrc="/web-services/wordpress.webp"
                imageAlt="WordPress Development"
            />
            <WhatIsSection
                title="WordPress"
                description="WordPress is the world's most popular content management system, powering over 40% of all websites. It's an open-source platform that allows you to create, manage, and modify website content without needing to code."
                imageSrc="/web-services/wordpress2.webp"
                imageAlt="What is WordPress"
                features={[
                    "User-friendly content management system",
                    "Extensive plugin ecosystem",
                    "Responsive design capabilities",
                    "SEO-friendly structure",
                    "Regular security updates",
                    "Large community support"
                ]}
            />
            <WhyChooseSection
                title="WordPress"
                benefits={[
                    {
                        title: "SEO Friendly",
                        description: "WordPress is built with clean code and offers excellent SEO capabilities out of the box, helping your website rank higher in search engines."
                    },
                    {
                        title: "Customizable",
                        description: "With thousands of themes and plugins, WordPress allows for endless customization possibilities to match your brand's unique needs."
                    },
                    {
                        title: "Mobile Responsive",
                        description: "Our WordPress websites are fully responsive, ensuring a seamless experience across all devices and screen sizes."
                    },
                    {
                        title: "Fast Loading",
                        description: "We optimize WordPress sites for speed, ensuring quick loading times that improve user experience and SEO rankings."
                    },
                    {
                        title: "Secure",
                        description: "We implement best security practices and regular updates to keep your WordPress site safe from vulnerabilities."
                    },
                    {
                        title: "Easy to Manage",
                        description: "WordPress's intuitive interface makes it easy for you to update content, add new pages, and manage your website without technical knowledge."
                    }
                ]}
            />
        </>
    );
} 