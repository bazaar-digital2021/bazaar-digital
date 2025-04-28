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
                        "href": "/plan-and-pricing/web-services-plan-and-pricing"
                    },
                    {
                        "title": "Shopify Web Development",
                        "href": "/plan-and-pricing/web-services-plan-and-pricing"
                    },
                    {
                        "title": "Custom Web Development",
                        "href": "/plan-and-pricing/web-services-plan-and-pricing"
                    },
                    {
                        "title": "Software Development",
                        "href": "/plan-and-pricing/web-services-plan-and-pricing"
                    },
                    {
                        "title": "App Development",
                        "href": "/plan-and-pricing/web-services-plan-and-pricing"
                    },
                    {
                        "title": "CRM Development",
                        "href": "/plan-and-pricing/web-services-plan-and-pricing"
                    }
                ]
            },
            // {
            //     "title": "Search Engine Optimisation",
            //     "items": [
            //         {
            //             "title": "Technical SEO",
            //             "href": "/services/seo/technical-seo"
            //         },
            //         {
            //             "title": "Local SEO",
            //             "href": "/services/seo/local-seo"
            //         },
            //         {
            //             "title": "International SEO",
            //             "href": "/services/seo/international-seo"
            //         },
            //         {
            //             "title": "Franchise SEO",
            //             "href": "/services/seo/franchise-seo"
            //         },
            //         {
            //             "title": "Youtube SEO",
            //             "href": "/services/seo/youtube-seo"
            //         }
            //     ]
            // },
            {
                "title": "Digital Marketing",
                "items": [
                    {
                        "title": "Social Media Marketing",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "Influencer Marketing",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "Content Marketing",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "Public Relations (PR)",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "Neuro Marketing",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "Diversity Marketing",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "Email Marketing",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "Online Reputation Management (ORM)",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "B2C Marketing",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
                    },
                    {
                        "title": "Whatsapp Marketing",
                        "href": "/plan-and-pricing/digital-media-marketing-plan-and-pricing"
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