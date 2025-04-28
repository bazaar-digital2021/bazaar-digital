import PricingHeadingTitle from './_components/pricing-heading-title';
import ContentCreationPlan from './_components/content-creation-plan';

export default function PlanAndPricingPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4">
                <PricingHeadingTitle
                    title="Content Creation Plans and Pricing"
                    subtitle="Choose the perfect plan for your content creation needs"
                />
                <ContentCreationPlan />
            </div>
        </main>
    );
} 