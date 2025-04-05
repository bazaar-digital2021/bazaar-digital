'use client'

import { usePathname } from 'next/navigation'
import LocalBusinessSchema from './LocalBusinessSchema'
import FAQSchema from './FAQSchema'
import BreadcrumbSchema from './BreadcrumbSchema'

export default function StructuredData() {
    const pathname = usePathname()

    // Define breadcrumbs for different pages
    const getBreadcrumbs = () => {
        const breadcrumbs = {
            '/our-story': [
                { name: 'Home', url: '/' },
                { name: 'Our Story', url: '/our-story' }
            ],
            '/services': [
                { name: 'Home', url: '/' },
                { name: 'Services', url: '/services' }
            ],
            '/contact': [
                { name: 'Home', url: '/' },
                { name: 'Contact', url: '/contact' }
            ],
            '/blog': [
                { name: 'Home', url: '/' },
                { name: 'Blog', url: '/blog' }
            ]
        }

        return breadcrumbs[pathname as keyof typeof breadcrumbs] || null
    }

    const breadcrumbs = getBreadcrumbs()

    return (
        <>
            <LocalBusinessSchema />
            <FAQSchema />
            {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
        </>
    )
} 