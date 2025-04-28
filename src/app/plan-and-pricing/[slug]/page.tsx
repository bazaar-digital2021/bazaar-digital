import ModernComingSoon from "@/components/coming-soon";
import PricingHeadingTitle from "../_components/pricing-heading-title";
import ContentCreationPlan from "../_components/content-creation-plan";
import DigitalMarketingPricing from "../_components/digital-marketing-pricing";
import WebServicesPlanPricing from "../_components/web-services-plan-pricing";
export default async function PlanAndPricingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <div>
            {slug === 'content-creation-plan-and-pricing'
                &&
                <>
                    <PricingHeadingTitle title='Content Creation Plan & Pricing' />
                    <ContentCreationPlan />
                </>
            }
            {slug === 'digital-media-marketing-plan-and-pricing'
                &&
                <>
                    <PricingHeadingTitle title='Digital Marketing Plan & Pricing' />
                    <DigitalMarketingPricing />
                </>
            }
            {slug === 'web-services-plan-and-pricing'
                &&
                <>
                    <PricingHeadingTitle title='Web Services Plan & Pricing' />
                    <WebServicesPlanPricing />
                </>
            }
        </div>
    )
}
