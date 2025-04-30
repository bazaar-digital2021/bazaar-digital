
import { Metadata } from "next";
import { HeroSection } from "./_components/hero-section";
import { ServicesNavigation } from "./_components/services-navigation";
import { ServiceSection } from "./_components/service-section";
import { servicesData } from "./_data/services-data";

export const metadata: Metadata = {
    title: "Digital Marketing Services | Bazaar Digital",
    description: "Comprehensive digital marketing solutions to grow your business online. From social media to influencer marketing, we've got you covered.",
};

export default function DigitalMarketingPage() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <ServicesNavigation />
            {servicesData.map((service) => (
                <ServiceSection key={service.id} {...service} />
            ))}
        </main>
    );
}
