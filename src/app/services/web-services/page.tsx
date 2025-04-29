import { Metadata } from "next";
import { WordpressDevelopment } from "./_components/wordpress-development";
import { ShopifyDevelopment } from "./_components/shopify-development";
import { CustomWebDevelopment } from "./_components/custom-web-development";
import { SoftwareDevelopment } from "./_components/software-development";
import { AppDevelopment } from "./_components/app-development";
import { CRMDevelopment } from "./_components/crm-development";
import { TechnicalSEO } from "./_components/technical-seo";
import { LocalSEO } from "./_components/local-seo";

export const metadata: Metadata = {
    title: "Web Services | Bazaar Digital",
    description: "Explore our comprehensive web services including WordPress development, Shopify development, custom web development, and more.",
};

export default function WebServicesPage() {
    return (
        <div className="space-y-20">
            <WordpressDevelopment />
            <ShopifyDevelopment />
            <CustomWebDevelopment />
            <SoftwareDevelopment />
            <AppDevelopment />
            <CRMDevelopment />
            <TechnicalSEO />
            <LocalSEO />
        </div>
    );
}
