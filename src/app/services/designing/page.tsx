'use client'
import { HeroSection } from "./_components/hero-section";
import { DesignServiceSection } from "./_components/design-service-section";
import { designServices } from "./_data/design-services";

export default function DesigningPage() {
    return (
        <main className="min-h-screen">
            <HeroSection />

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Make Your Presence Bold With Bazaar Digital Designs
                        </h2>
                        <p className="text-xl text-gray-600">
                            We specialise in a comprehensive range of design services that empower businesses to captivate their audience, leave a memorable impact, and drive engagement. We have the expertise and creativity to elevate your brand!
                        </p>
                    </div>
                </div>
            </section>

            {/* Design Services */}
            {designServices.map((service, index) => (
                <DesignServiceSection
                    key={service.id}
                    {...service}
                    reverse={index % 2 === 1}
                />
            ))}
        </main>
    );
}
