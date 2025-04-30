export type NavItem = {
    title: string;
    href?: string;
    items?: NavItem[];
};

export type Navigation = NavItem[];

export const navigation: Navigation = [

    {
        title: 'Our Story',
        href: '/our-story',
    },
    {

        "title": "Our Services",
        "items": [
            {
                "title": "Development",
                "items": [
                    {
                        "title": "Wordpress Development",
                        "href": "/services/web-services#wordpress-development"
                    },
                    {
                        "title": "Shopify Web Development",
                        "href": "/services/web-services#shopify-development"
                    },
                    {
                        "title": "Custom Web Development",
                        "href": "/services/web-services#custom-web-development"
                    },
                    {
                        "title": "Software Development",
                        "href": "/services/web-services#software-development"
                    },
                    {
                        "title": "App Development",
                        "href": "/services/web-services#app-development"
                    },
                    {
                        "title": "CRM Development",
                        "href": "/services/web-services#crm-development"
                    },
                    {
                        "title": "Technical SEO",
                        "href": "/services/web-services#technical-seo"
                    },
                    {
                        "title": "Local SEO",
                        "href": "/services/web-services#local-seo"
                    },
                ]
            },
            {
                "title": "Digital Marketing",
                "items": [
                    {
                        "title": "Social Media Marketing",
                        "href": "/services/digital-marketing#social-media-marketing"
                    },
                    {
                        "title": "Influencer Marketing",
                        "href": "/services/digital-marketing#influencer-marketing"
                    },
                    {
                        "title": "Content Marketing",
                        "href": "/services/digital-marketing#content-marketing"
                    },
                    {
                        "title": "Public Relations (PR)",
                        "href": "/services/digital-marketing#public-relations-pr"
                    },
                    {
                        "title": "Neuro Marketing",
                        "href": "/services/digital-marketing#neuro-marketing"
                    },
                    {
                        "title": "Diversity Marketing",
                        "href": "/services/digital-marketing#diversity-marketing"
                    },
                    {
                        "title": "Email Marketing",
                        "href": "/services/digital-marketing#email-marketing"
                    },
                    {
                        "title": "Online Reputation Management (ORM)",
                        "href": "/services/digital-marketing#online-reputation-management-orm"
                    },
                    {
                        "title": "B2C Marketing",
                        "href": "/services/digital-marketing#b2c-marketing"
                    },
                    {
                        "title": "Whatsapp Marketing",
                        "href": "/services/digital-marketing#whatsapp-marketing"
                    }
                ]
            },
            {
                "title": "PPC/Paid Marketing",
                "items": [
                    {
                        "title": "Facebook & Instagram Ads",
                        "href": "/services/ppc#facebook-instagram-ads"
                    },
                    {
                        "title": "Google Ads",
                        "href": "/services/ppc#google-ads"
                    },
                    {
                        "title": "Youtube Ads",
                        "href": "/services/ppc#youtube-ads"
                    },
                    {
                        "title": "Marketplace Ads",
                        "href": "/services/ppc#marketplace-ads"
                    },
                    {
                        "title": "LinkedIn Ads",
                        "href": "/services/ppc#linkedin-ads"
                    }
                ]
            },
            {
                "title": "Designing",
                "items": [
                    {
                        "title": "Label & Package Designing",
                        "href": "/services/designing#label-package"
                    },
                    {
                        "title": "Flyers & Billboard Banners Designing",
                        "href": "/services/designing#flyers-billboards"
                    },
                    {
                        "title": "Presentation/Brochure Designing",
                        "href": "/services/designing#presentation-brochure"
                    },
                    {
                        "title": "Video Creation/Editing",
                        "href": "/services/designing#video-editing"
                    },
                    {
                        "title": "UI/UX Designing",
                        "href": "/services/designing#ui-ux"
                    }
                ]
            }

        ]
    },
    {
        title: 'Plan & Pricing',
        items: [
            {
                title: 'Content Creation Plan & Pricing',
                href: '/plan-and-pricing/content-creation-plan-and-pricing'
            },
            {
                title: 'Digital Marketing Plan & Pricing',
                href: '/plan-and-pricing/digital-media-marketing-plan-and-pricing'
            },
            {
                title: 'Web Services Plan & Pricing',
                href: '/plan-and-pricing/web-services-plan-and-pricing'
            }

        ]
    },
    {
        title: 'Contact Us',
        href: '/contact-us'
    }


]; 