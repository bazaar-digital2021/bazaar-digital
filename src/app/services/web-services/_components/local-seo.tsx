import { ServiceHeader } from "./service-header";
import { WhatIsSection } from "./what-is-section";
import { WhyChooseSection } from "./why-choose-section";

export function LocalSEO() {
    return (
        <>
            <ServiceHeader
                title="Local SEO"
                description="Boost your local visibility and attract more customers in your area. Our local SEO services help you dominate local search results and drive foot traffic to your business."
                imageSrc="/web-services/local-seo.webp"
                imageAlt="Local SEO"
            />
            <WhatIsSection
                title="Local SEO"
                description="Local SEO focuses on optimizing your online presence to attract more business from relevant local searches. It involves managing your Google Business Profile, local citations, and other location-specific factors that influence local search rankings."
                imageSrc="/web-services/local-seo2.webp"
                imageAlt="What is Local SEO"
                features={[
                    "Google Business Profile optimization",
                    "Local citation building",
                    "Review management",
                    "Local content creation",
                    "Location pages optimization",
                    "Local link building"
                ]}
            />
            <WhyChooseSection
                title="Local SEO"
                benefits={[
                    {
                        title: "Local Visibility",
                        description: "Increase your visibility in local search results."
                    },
                    {
                        title: "More Customers",
                        description: "Attract more local customers to your business."
                    },
                    {
                        title: "Trust Building",
                        description: "Build trust with potential customers through reviews and local presence."
                    },
                    {
                        title: "Competitive Edge",
                        description: "Outperform local competitors in search results."
                    },
                    {
                        title: "Mobile Optimization",
                        description: "Reach customers searching on mobile devices."
                    },
                    {
                        title: "ROI Tracking",
                        description: "Measure the impact of your local SEO efforts."
                    }
                ]}
            />
        </>
    );
} 