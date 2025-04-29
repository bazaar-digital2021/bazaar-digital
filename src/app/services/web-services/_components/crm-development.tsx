import { ServiceHeader } from "./service-header";
import { WhatIsSection } from "./what-is-section";
import { WhyChooseSection } from "./why-choose-section";

export function CRMDevelopment() {
    return (
        <>
            <ServiceHeader
                title="CRM Development"
                description="Streamline your customer relationships with custom CRM solutions. Our CRM development services help you manage customer interactions and drive business growth."
                imageSrc="/web-services/app2.webp"
                imageAlt="CRM Development"
            />
            <WhatIsSection
                title="CRM Development"
                description="CRM (Customer Relationship Management) development involves creating software systems that help businesses manage customer interactions, track sales, and improve customer service. Custom CRM solutions are tailored to specific business needs and workflows."
                imageSrc="/web-services/custom2.webp"
                imageAlt="What is CRM Development"
                features={[
                    "Customer data management",
                    "Sales pipeline tracking",
                    "Marketing automation",
                    "Customer service tools",
                    "Analytics and reporting",
                    "Integration capabilities"
                ]}
            />
            <WhyChooseSection
                title="CRM Development"
                benefits={[
                    {
                        title: "Customization",
                        description: "Get a CRM system tailored to your specific business processes and needs."
                    },
                    {
                        title: "Integration",
                        description: "Seamlessly connect with your existing tools and systems."
                    },
                    {
                        title: "Automation",
                        description: "Automate repetitive tasks and streamline workflows."
                    },
                    {
                        title: "Analytics",
                        description: "Gain valuable insights from customer data and interactions."
                    },
                    {
                        title: "Scalability",
                        description: "Grow your CRM system as your business expands."
                    },
                    {
                        title: "Support",
                        description: "Get ongoing maintenance and updates to keep your CRM running smoothly."
                    }
                ]}
            />
        </>
    );
} 