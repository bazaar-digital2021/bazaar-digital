import Script from 'next/script'

type BreadcrumbProps = {
    items: {
        name: string;
        url: string;
    }[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbProps) {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://bazaardigital.in${item.url}`
        }))
    }

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            strategy="afterInteractive"
        />
    )
} 