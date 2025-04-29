import { ServiceHeader } from "./service-header";
import { WhatIsSection } from "./what-is-section";
import { WhyChooseSection } from "./why-choose-section";

export function TechnicalSEO() {
    return (
        <>
            <ServiceHeader
                title="Technical SEO"
                description="Optimize your website's technical foundation for better search engine visibility. Our technical SEO services ensure your site is fast, secure, and search engine friendly."
                imageSrc="/web-services/tech-seo.webp"
                imageAlt="Technical SEO"
            />
            <WhatIsSection
                title="Technical SEO"
                description="Technical SEO involves optimizing the technical aspects of a website to improve its visibility in search engines. It focuses on website structure, performance, and technical elements that affect search engine crawling and indexing."
                imageSrc="/web-services/tech-seo2.webp"
                imageAlt="What is Technical SEO"
                features={[
                    "Website speed optimization",
                    "Mobile responsiveness",
                    "Site structure optimization",
                    "Schema markup implementation",
                    "XML sitemap creation",
                    "Robots.txt configuration"
                ]}
            />
            <WhyChooseSection
                title="Technical SEO"
                benefits={[
                    {
                        title: "Improved Rankings",
                        description: "Enhance your website's visibility in search engine results."
                    },
                    {
                        title: "Better User Experience",
                        description: "Create a faster, more accessible website for your users."
                    },
                    {
                        title: "Mobile Optimization",
                        description: "Ensure your site performs well on all devices."
                    },
                    {
                        title: "Security",
                        description: "Implement HTTPS and other security measures."
                    },
                    {
                        title: "Crawlability",
                        description: "Make it easier for search engines to index your content."
                    },
                    {
                        title: "Performance",
                        description: "Improve page load times and overall site performance."
                    }
                ]}
            />
        </>
    );
} 