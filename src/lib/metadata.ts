import { Metadata } from 'next'

type PageMetadataProps = {
    title: string
    description: string
    canonicalPath?: string
    ogImage?: string
    ogImageAlt?: string
    keywords?: string[]
}

/**
 * Generate consistent metadata for different pages
 */
export function generatePageMetadata({
    title,
    description,
    canonicalPath = '',
    ogImage = '/og-image.jpg',
    ogImageAlt = 'Bazaar Digital - Digital Marketing Agency',
    keywords = [],
}: PageMetadataProps): Metadata {
    // Base keywords for all pages
    const baseKeywords = [
        'digital marketing',
        'web development',
        'Bihar digital agency',
        'social media management',
        'SEO services',
        'content marketing',
        'digital solutions'
    ]

    // Combine base keywords with page-specific keywords
    const combinedKeywords = [...baseKeywords, ...keywords].join(', ')

    return {
        title: `${title} | Bazaar Digital`,
        description,
        keywords: combinedKeywords,
        openGraph: {
            title: `${title} | Bazaar Digital`,
            description,
            type: 'website',
            url: `https://bazaardigital.in${canonicalPath}`,
            siteName: 'Bazaar Digital',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: ogImageAlt
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Bazaar Digital`,
            description,
            images: [ogImage]
        },
        alternates: {
            canonical: canonicalPath || '/',
        }
    }
} 