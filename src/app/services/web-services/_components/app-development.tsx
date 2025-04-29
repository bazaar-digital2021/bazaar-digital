import { ServiceHeader } from "./service-header";
import { WhatIsSection } from "./what-is-section";
import { WhyChooseSection } from "./why-choose-section";

export function AppDevelopment() {
    return (
        <>
            <ServiceHeader
                title="App Development"
                description="Create powerful mobile applications that engage users and drive business growth. Our app development services deliver exceptional user experiences across all platforms."
                imageSrc="/web-services/app.webp"
                imageAlt="App Development"
            />
            <WhatIsSection
                title="App Development"
                description="App development involves creating software applications for mobile devices. It includes designing, developing, testing, and deploying applications for iOS, Android, or cross-platform solutions."
                imageSrc="/web-services/software2.webp"
                imageAlt="What is App Development"
                features={[
                    "Native and cross-platform development",
                    "User-centered design",
                    "Performance optimization",
                    "Security implementation",
                    "API integration",
                    "App store deployment"
                ]}
            />
            <WhyChooseSection
                title="App Development"
                benefits={[
                    {
                        title: "User Experience",
                        description: "Create intuitive, engaging interfaces that keep users coming back."
                    },
                    {
                        title: "Cross-Platform",
                        description: "Reach users on both iOS and Android with a single codebase."
                    },
                    {
                        title: "Performance",
                        description: "Optimize for speed, battery life, and smooth operation."
                    },
                    {
                        title: "Security",
                        description: "Implement robust security measures to protect user data."
                    },
                    {
                        title: "Scalability",
                        description: "Build apps that can handle growing user bases and features."
                    },
                    {
                        title: "Support",
                        description: "Get ongoing maintenance and updates to keep your app current."
                    }
                ]}
            />
        </>
    );
} 