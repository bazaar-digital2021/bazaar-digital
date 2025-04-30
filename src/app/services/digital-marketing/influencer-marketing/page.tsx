import { Metadata } from "next";
import { ServiceHero } from "../_components/service-hero";
import { ServiceFeatures } from "../_components/service-features";
import { ServiceCollaboration } from "../_components/service-collaboration";

export const metadata: Metadata = {
    title: "Influencer Marketing Services | Bazaar Digital",
    description: "Amplify your brand message through strategic influencer partnerships. Connect with your target audience through authentic influencer collaborations.",
};

const serviceData = {
    hero: {
        title: "Influencer Marketing",
        description: "Leverage the power of influencers to amplify your brand message and connect with your target audience through authentic partnerships.",
        image: "/digital/digital.webp",
    },
    features: {
        title: "What Our Influencer Marketing Can Do For Your Brand",
        items: [
            {
                title: "Brand Awareness",
                description: "Increase your brand's visibility through strategic influencer partnerships",
                icon: "awareness-icon",
            },
            {
                title: "Authentic Engagement",
                description: "Build genuine connections with your target audience through influencer content",
                icon: "engagement-icon",
            },
            {
                title: "Targeted Reach",
                description: "Access specific demographics through carefully selected influencer collaborations",
                icon: "reach-icon",
            },
        ],
    },
    collaboration: {
        title: "Techfluencers X Brands",
        description: "Partner with us to create impactful influencer campaigns that drive real results. Our team of experts will help you identify and collaborate with the right influencers for your brand.",
        features: [
            {
                title: "Influencer Selection",
                description: "Strategic matching with influencers who align with your brand values",
            },
            {
                title: "Campaign Management",
                description: "End-to-end management of influencer partnerships and content creation",
            },
            {
                title: "Performance Tracking",
                description: "Comprehensive analytics to measure campaign success and ROI",
            },
        ],
    },
};

export default function InfluencerMarketingPage() {
    return (
        <main className="min-h-screen">
            <ServiceHero {...serviceData.hero} />
            <ServiceFeatures {...serviceData.features} />
            <ServiceCollaboration {...serviceData.collaboration} />
        </main>
    );
} 