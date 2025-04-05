import Script from 'next/script'

export default function FAQSchema() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What digital marketing services does Bazaar Digital offer?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bazaar Digital offers a comprehensive range of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing, Content Marketing, Web Development, and Digital Strategy Consulting.'
                }
            },
            {
                '@type': 'Question',
                name: 'How can digital marketing help my business in Bihar?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Digital marketing can help Bihar-based businesses increase online visibility, reach targeted local and regional audiences, generate more qualified leads, build brand awareness, and ultimately drive business growth. Our tailored strategies focus on the unique market dynamics of Bihar and surrounding regions.'
                }
            },
            {
                '@type': 'Question',
                name: 'How long does it take to see results from digital marketing?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The timeline for digital marketing results varies based on your goals and chosen strategies. Typically, paid advertising can show results immediately, while SEO and content marketing are longer-term investments that show significant results within 3-6 months. We provide regular reporting and transparent metrics to track progress from day one.'
                }
            },
            {
                '@type': 'Question',
                name: 'What makes Bazaar Digital different from other digital marketing agencies?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Bazaar Digital stands out as Bihar's leading creative company with our deep understanding of local market dynamics, certified partnerships with Google and Meta, our results-driven approach, transparency in reporting, and commitment to delivering measurable ROI for every client."
                }
            },
            {
                '@type': 'Question',
                name: 'How much does digital marketing cost?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our digital marketing packages start from ₹15,000 per month, but we tailor solutions based on your specific business goals, industry, competition, and budget. We focus on delivering maximum ROI regardless of your investment level.'
                }
            },
            {
                '@type': 'Question',
                name: 'Do you work with businesses outside of Bihar?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely! While we have deep expertise in the Bihar market, we successfully serve clients throughout Eastern India and beyond. Our digital strategies can be adapted to target any regional or national audience.'
                }
            },
            {
                '@type': 'Question',
                name: 'How do you measure the success of digital marketing campaigns?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We establish clear KPIs aligned with your business objectives and use advanced analytics tools to track metrics such as website traffic, conversion rates, engagement, lead generation, and ROI. We provide regular, transparent reporting that demonstrates the direct impact of our strategies on your business growth.'
                }
            }
        ]
    }

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            strategy="afterInteractive"
        />
    )
} 