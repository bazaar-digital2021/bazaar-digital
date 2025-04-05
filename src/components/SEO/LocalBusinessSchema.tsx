import Script from 'next/script'

export default function LocalBusinessSchema() {
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://bazaardigital.in/#LocalBusiness',
        name: 'Bazaar Digital',
        description: "Bihar's Leading Digital Marketing Agency offering comprehensive digital marketing solutions, web development, social media management, and content marketing services.",
        url: 'https://bazaardigital.in/',
        telephone: '+918210546110',
        email: 'bazaardigitalinfo@gmail.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Patna',
            addressRegion: 'Bihar',
            postalCode: '800001',
            addressCountry: 'IN',
            streetAddress: '123 Digital Street'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '25.5941',
            longitude: '85.1376'
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday'],
                opens: '10:00',
                closes: '16:00'
            }
        ],
        sameAs: [
            'https://www.facebook.com/bazaardigital',
            'https://www.instagram.com/bazaardigital',
            'https://www.linkedin.com/company/bazaardigital',
            'https://twitter.com/bazaardigital'
        ],
        paymentAccepted: 'Cash, Credit Card, UPI',
        priceRange: '₹₹',
        image: 'https://bazaardigital.in/logo.png',
        founder: {
            '@type': 'Person',
            name: 'Gagan Kumar'
        },
        foundingDate: '2021',
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: '25.5941',
                longitude: '85.1376'
            },
            geoRadius: '300000'
        },
        serviceArea: {
            '@type': 'Place',
            name: 'Bihar and surrounding regions'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Marketing Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Digital Marketing',
                        description: 'Comprehensive digital marketing solutions including SEO, PPC, and content strategy.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Website Development',
                        description: 'Professional website development services with responsive design and modern technologies.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Social Media Management',
                        description: 'Effective social media management across platforms to increase brand engagement.'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Content Marketing',
                        description: 'Strategic content creation and marketing to drive traffic and conversions.'
                    }
                }
            ]
        }
    }

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            strategy="afterInteractive"
        />
    )
} 