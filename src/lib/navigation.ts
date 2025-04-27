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
                        "href": "/services/development/wordpress-development"
                    },
                    {
                        "title": "Shopify Web Development",
                        "href": "/services/development/shopify-web-development"
                    },
                    {
                        "title": "Custom Web Development",
                        "href": "/services/development/custom-web-development"
                    },
                    {
                        "title": "Software Development",
                        "href": "/services/development/software-development"
                    },
                    {
                        "title": "App Development",
                        "href": "/services/development/app-development"
                    },
                    {
                        "title": "CRM Development",
                        "href": "/services/development/crm-development"
                    }
                ]
            },
            {
                "title": "Search Engine Optimisation",
                "items": [
                    {
                        "title": "Technical SEO",
                        "href": "/services/seo/technical-seo"
                    },
                    {
                        "title": "Local SEO",
                        "href": "/services/seo/local-seo"
                    },
                    {
                        "title": "International SEO",
                        "href": "/services/seo/international-seo"
                    },
                    {
                        "title": "Franchise SEO",
                        "href": "/services/seo/franchise-seo"
                    },
                    {
                        "title": "Youtube SEO",
                        "href": "/services/seo/youtube-seo"
                    }
                ]
            },
            {
                "title": "Digital Marketing",
                "items": [
                    {
                        "title": "Social Media Marketing",
                        "href": "/services/digtital-marketing/social-media-marketing"
                    },
                    {
                        "title": "Influencer Marketing",
                        "href": "/services/digtital-marketing/influencer-marketing"
                    },
                    {
                        "title": "Content Marketing",
                        "href": "/services/digtital-marketing/content-marketing"
                    },
                    {
                        "title": "Public Relations (PR)",
                        "href": "/services/digtital-marketing/public-relations"
                    },
                    {
                        "title": "Neuro Marketing",
                        "href": "/services/digtital-marketing/neuro-marketing"
                    },
                    {
                        "title": "Diversity Marketing",
                        "href": "/services/digtital-marketing/diversity-marketing"
                    },
                    {
                        "title": "Email Marketing",
                        "href": "/services/digtital-marketing/email-marketing"
                    },
                    {
                        "title": "Online Reputation Management (ORM)",
                        "href": "/services/digtital-marketing/online-reputation-management"
                    },
                    {
                        "title": "B2C Marketing",
                        "href": "/services/digtital-marketing/b2c-marketing"
                    },
                    {
                        "title": "Whatsapp Marketing",
                        "href": "/services/digtital-marketing/whatsapp-marketing"
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
                href: '/plan-and-pricing/social-media-marketing-plan-and-pricing'
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