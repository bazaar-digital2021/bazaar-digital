import { ServiceHeader } from "./service-header";
import { WhatIsSection } from "./what-is-section";
import { WhyChooseSection } from "./why-choose-section";

export function ShopifyDevelopment() {
    return (
        <>
            <ServiceHeader
                title="Shopify Development"
                description="Launch your e-commerce success with our expert Shopify development services. We create powerful, scalable, and conversion-optimized online stores."
                imageSrc="/web-services/shopify.webp"
                imageAlt="Shopify Development"
            />
            <WhatIsSection
                title="Shopify"
                description="Shopify is a leading e-commerce platform that enables businesses to create and manage online stores. It provides a complete solution for selling products online, in person, and across multiple channels."
                imageSrc="/web-services/shopify2.webp"
                imageAlt="What is Shopify"
                features={[
                    "All-in-one e-commerce solution",
                    "Secure payment processing",
                    "Mobile-optimized storefronts",
                    "Built-in marketing tools",
                    "24/7 customer support",
                    "Scalable infrastructure"
                ]}
            />
            <WhyChooseSection
                title="Shopify"
                benefits={[
                    {
                        title: "Easy to Use",
                        description: "Shopify's intuitive interface makes it easy to manage products, orders, and customers without technical expertise."
                    },
                    {
                        title: "Secure & Reliable",
                        description: "Shopify provides enterprise-level security and 99.9% uptime, ensuring your store is always available and protected."
                    },
                    {
                        title: "Mobile Ready",
                        description: "Every Shopify store is automatically optimized for mobile devices, providing a seamless shopping experience."
                    },
                    {
                        title: "Built-in SEO",
                        description: "Shopify includes powerful SEO features to help your store rank higher in search results."
                    },
                    {
                        title: "Scalable",
                        description: "Grow your business without worrying about technical limitations - Shopify scales with your needs."
                    },
                    {
                        title: "App Ecosystem",
                        description: "Extend your store's functionality with thousands of apps from the Shopify App Store."
                    }
                ]}
            />
        </>
    );
} 