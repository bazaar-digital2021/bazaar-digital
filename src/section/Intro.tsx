import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
                <div className='flex gap-5 md:gap-8 flex-col md:flex-row justify-between items-center mb-5 md:mb-10'>
                    <div className="space-y-4 flex-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Bihar&apos;s Leading Digital Marketing Agency
                        </h1>
                    </div>

                    {/* Meta and Google Partner badges */}
                    <div className="flex  gap-4 items-center flex-1">
                        <div className="border border-gray-200 rounded-md p-3">
                            <Image
                                src="/meta.webp"
                                alt="Meta Business Partner"
                                width={180}
                                height={70}
                                className="h-auto w-auto"
                            />
                        </div>
                        <div className="border border-gray-200 rounded-md p-3">
                            <Image
                                src="/google.webp"
                                alt="Google Partner"
                                width={180}
                                height={70}
                                className="h-auto w-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Content Area */}
                    <div className="lg:col-span-6 space-y-6">


                        {/* About Us Section */}
                        <div className="pt-10 space-y-4">
                            <h2 className="flex items-center text-lg font-semibold gap-2 text-[#1a237e]">
                                <span className="w-2 h-2 bg-[#1a237e] rounded-full"></span>
                                ABOUT US
                            </h2>

                            <div className="space-y-2">
                                <h3 className="text-3xl sm:text-4xl font-bold">
                                    Helping Clients <span className="text-[#1a237e]">Build Digital Media</span> Presence <span className="text-[#1a237e]">Since 2021</span>
                                </h3>

                                <p className="text-gray-700 mt-4 mb-6">
                                    Founded in 2021, we are one of the leading
                                    <span className="text-[#1a237e] font-medium"> Digital Media Agencies In India</span>.
                                </p>

                                <Link
                                    href="/our-story"
                                    className="inline-flex items-center font-medium text-[#1a237e] hover:underline"
                                >
                                    <span>Read More</span>
                                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Images - Office and Team */}
                    <div className="lg:col-span-6">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
                                    <Image
                                        src="/office.webp"
                                        alt="Office Team"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* <div className="col-span-12 mt-4">
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="/office-space.png"
                                        alt="Office Space"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
