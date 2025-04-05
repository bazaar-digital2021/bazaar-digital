import Script from 'next/script'

type ServiceSchemaProps = {
    serviceName: string
    description: string
    imageUrl: string
    price?: string
    minPrice?: string
    maxPrice?: string
    priceCurrency?: string
}

export default function ServiceSchema({
    serviceName,
    description,
    imageUrl,
    price,
    minPrice,
    maxPrice,
    priceCurrency = "INR"
}: ServiceSchemaProps) {
    const serviceSchema = {
        '@context': 'https://schema.org/',
        '@type': 'Service',
        name: serviceName,
        description: description,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Bazaar Digital',
            image: 'https://bazaardigital.in/logo.png',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Digital Avenue',
                addressLocality: 'Patna',
                addressRegion: 'Bihar',
                postalCode: '800001',
                addressCountry: 'IN'
            },
            telephone: '+919876543210',
            priceRange: '₹₹₹',
            sameAs: [
                'https://facebook.com/bazaardigital',
                'https://twitter.com/bazaardigital',
                'https://instagram.com/bazaardigital',
                'https://linkedin.com/company/bazaar-digital'
            ]
        },
        image: `https://bazaardigital.in${imageUrl}`,
        offers: {
            '@type': 'Offer',
            ...(price ? { price, priceCurrency } : {}),
            ...(minPrice && maxPrice ? {
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    minPrice,
                    maxPrice,
                    priceCurrency
                }
            } : {}),
            availability: 'https://schema.org/InStock'
        },
        serviceType: serviceName,
        areaServed: {
            '@type': 'State',
            name: 'Bihar'
        }
    }

    return (
        <Script
            id={`service-schema-${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            strategy="afterInteractive"
        />
    )
} 