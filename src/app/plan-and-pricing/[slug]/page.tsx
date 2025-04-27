import ModernComingSoon from "@/components/coming-soon";

export default async function PlanAndPricingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <div>
            <ModernComingSoon />
        </div>
    )
}
