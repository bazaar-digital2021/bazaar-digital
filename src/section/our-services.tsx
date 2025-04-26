import Link from 'next/link'

export default function OurServices() {
    return (
        <section className="w-full py-16 md:py-20 bg-primary text-white">
            <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight -tracking-tighter uppercase ">
                        <span className='block text-center text-secondary text-2xl  md:text-3xl font-medium'>We Believe In</span>
                        Giving Back</h2>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Our greatest satisfaction comes from seeing businesses succeed. That&apos;s why
                        we offer a variety of services to help you unlock your potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Digital Marketing Service */}
                    <div className="border-t border-white/30 pt-6">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl md:text-3xl font-[700]">Digital Marketing Services</h3>
                            <div className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors">
                                <Link href="/services/digital-marketing">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7h10v10" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <p className="text-white/80 text-lg mb-6">
                            Your #1 resource for comprehensive digital marketing solutions including SEO,
                            PPC, social media marketing, and content marketing to help you build a
                            successful online business.
                        </p>
                    </div>

                    {/* Web Development Service */}
                    <div className="border-t border-white/30 pt-6">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl md:text-3xl font-[700]">Website Development</h3>
                            <div className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors">
                                <Link href="/services/website-development">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7h10v10" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <p className="text-white/80 text-lg mb-6">
                            Find out how our expert web developers can create a stunning, responsive
                            website that represents your brand and drives conversions with modern
                            technologies and best practices.
                        </p>
                    </div>

                    {/* Social Media Service */}
                    <div className="border-t border-white/30 pt-6">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl md:text-3xl font-[700]">Social Media Management</h3>
                            <div className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors">
                                <Link href="/services/social-media">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7h10v10" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <p className="text-white/80 text-lg mb-6">
                            Get in-depth social media campaign management that helps you optimize
                            engagement, increase ROI, and reach your target audience more effectively
                            across all major platforms.
                        </p>
                    </div>

                    {/* Content Marketing Service */}
                    <div className="border-t border-white/30 pt-6">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl md:text-3xl font-[700]">Content Marketing</h3>
                            <div className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors">
                                <Link href="/services/content-marketing">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7h10v10" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <p className="text-white/80 text-lg mb-6">
                            Our proprietary content strategy helps drive innovation and efficiencies
                            for your business with engaging blogs, videos, infographics, and other
                            high-quality content that converts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
