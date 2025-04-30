'use client'
import { HeroSection } from "./_components/hero-section";
import { BenefitsSection } from "./_components/benefits-section";
import { WhyChooseUs } from "./_components/why-choose-us";
import { AdPlatformSection } from "./_components/ad-platform-section";
import { ContactSection } from "./_components/contact-section";
import { ppcData } from "./_data/ppc-data";

export default function PPCPage() {
    return (
        <main className="min-h-screen">
            <HeroSection />

            {ppcData.map((platform, index) => (
                <AdPlatformSection
                    key={platform.id}
                    {...platform}
                    reverse={index % 2 === 1}
                />
            ))}

            <BenefitsSection />
            <WhyChooseUs />
            {/* <ContactSection /> */}
        </main>
    );
}
