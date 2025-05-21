'use client'
import Image from 'next/image'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Breadcrumbs from '@/components/SEO/Breadcrumbs'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { useRouter } from '@bprogress/next/app'

// export const metadata: Metadata = generatePageMetadata({
//     title: 'Our Story',
//     description: 'From humble beginnings to Bihar\'s leading digital marketing agency — discover the journey of Bazaar Digital, our values, and the team behind our success.',
//     canonicalPath: '/our-story',
//     keywords: ['agency history', 'digital marketing Bihar', 'Bazaar Digital story', 'creative agency Patna', 'marketing team']
// })

export default function OurStory() {
    const router = useRouter();
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const slideIn = {
        hidden: { x: -60, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
    }

    const slideRight = {
        hidden: { x: 60, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
    }

    const scaleUp = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    }

    return (
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">


            {/* Hero Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-center mb-16 md:mb-24"
            >
                <motion.h1
                    variants={scaleUp}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary uppercase mb-6"
                >
                    Our Story
                </motion.h1>
                <motion.p
                    variants={fadeIn}
                    className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-700"
                >
                    From humble beginnings to Bihar&apos;s leading digital creative agency — our journey of passion, innovation, and growth.
                </motion.p>
            </motion.div>

            {/* Timeline Section */}
            <div className="space-y-20 md:space-y-32">
                {/* Founding */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                    <motion.div variants={slideIn} className="order-2 md:order-1">
                        <div className=" inline-block rounded-lg ">
                            <span className="text-primary/15 text-4xl  md:text-7xl font-bold block">2021</span>
                        </div>
                        <h2 className="text-3xl font-bold -mt-8 mb-4 text-primary">The Beginning - Inception of Dreams</h2>
                        <p className="text-gray-700 mb-4">
                            Welcome to the heart of Bazaar Digital , where our journey from a humble beginning to a thriving digital media agency unfolds. It all began in 2021 when our visionaries, Gagan ( Founder & CEO of Bazaar Digital ) , dared to embark on a digital odyssey at a time when the digital landscape was an uncharted territory.
                        </p>
                        <p className="text-gray-700">
                            Our founder&apos;s vision was clear—to bridge the digital divide and bring world-class marketing solutions to businesses in Bihar and India that were struggling to adapt to the rapidly evolving digital landscape.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={scaleUp}
                        className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl h-[300px] md:h-[400px]"
                    >
                        <Image
                            src="/beginning.webp"
                            alt="Bazaar Digital's first office"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>

                {/* Growth */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                    <motion.div
                        variants={scaleUp}
                        className="relative rounded-lg overflow-hidden shadow-xl h-[300px] md:h-[400px]"
                    >
                        <Image
                            src="/modest.webp"
                            alt="Growing team at Bazaar Digital"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div variants={slideRight}>
                        <div className=" inline-block rounded-lg ">
                            <span className="text-primary/15 text-3xl md:text-7xl font-bold block">2021 - 2023</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 -mt-8 text-primary">A Modest Beginning</h2>
                        <p className="text-gray-700 mb-4">
                            We started our Journey from a small cafe with a purpose to connect brands with their target audience on social media. It was was in this unconventional settings that the seeds of creativity were sown. In the face of challenges, our determination to succeed blossomed
                        </p>
                        <h3 className='text-xl font-bold my-2 text-black/80'>From 1 to 50+ Teammates</h3>
                        <p className="text-gray-700 mb-4">
                            What started with just Gagan has now grown into a powerhouse of over 50 talented individuals. The journey was not just expanding in numbers but cultivating a family of digital enthusiasts who share a common passion for innovation and excellence.
                        </p>
                        <h3 className='text-xl font-bold my-2 text-black/80'>Embracing the Unknown</h3>
                        <p className="text-gray-700">
                            In 2021 , the digital media landscape was a vast canvas of untapped potential in Bihar. With the backgrounds in Technical and Sales , Gagan dove headfirst into the sea of opportunities. Little did he know , he was destined to redefine the narrative of digital media for brands.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Recognition */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                    <motion.div variants={slideIn} className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-4 -mt-8 text-primary">Geographical Location </h2>

                        <p className="text-gray-700 mb-4">
                            From a small cafe , we've transcended boundaries to establish our presence in two key locations- Darbhanga and Patna. Each office is not just a workspace but a hub of creativity and collaboration, echoing the growth and success of Bazaar Digital.
                        </p>
                        <h3 className='text-xl font-bold my-2 text-black/80'>The Digital Revolution</h3>
                        <p className="text-gray-700">
                            In a world where digital media was evolving at breakneck speed , we stood as pioneers , shaping the narrative, and steering brands towards digital excellence. What once seemed like an endless array of opportunities has now become a testament to our unwavering commitment and passion.
                        </p>
                        <h3 className='text-xl font-bold my-2 text-black/80'>Our Promise to You</h3>
                        <p className="text-gray-700">
                            As we reflect on our journey, we carry forward the spirit of innovation, resilience, and client-centric Values. At Bazaar Digital , we don't just navigate the digital landscape; we sculpt it , ensuring that your brand story stands out in a world of endless possibilities.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={scaleUp}
                        className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl h-[300px] md:h-[400px]"
                    >
                        <Image
                            src="/geographical.webp"
                            alt="Partnership ceremony"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </motion.div>

                {/* Present Day */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                    <motion.div
                        variants={scaleUp}
                        className="relative rounded-lg overflow-hidden shadow-xl h-[300px] md:h-[400px]"
                    >
                        <Image
                            src="/creative.webp"
                            alt="Modern Bazaar Digital office"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div variants={slideRight}>
                        <div className="bg-blue-50 p-1 inline-block rounded-lg mb-4">
                            <span className="text-primary font-bold py-1 px-3 block">Today</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-primary">Bihar&apos;s Creative Agency</h2>
                        <p className="text-gray-700 mb-4">
                            Today, Bazaar Digital stands as Bihar&apos;s leading creative company and digital marketing agency. With a team of over 30 specialists across various digital disciplines, we serve clients ranging from local startups to established regional businesses.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our modern office in the heart of Patna houses dedicated departments for web development, content creation, social media management, and digital advertising—all working together to deliver integrated marketing solutions.
                        </p>
                        <p className="text-gray-700">
                            What hasn&apos;t changed since our founding is our commitment to helping businesses unlock their potential through innovative digital strategies tailored to their unique needs and goals.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Future Vision */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeIn}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="bg-blue-50 p-1 inline-block rounded-lg mb-4">
                        <span className="text-primary font-bold py-1 px-3 block">Looking Forward</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
                    <p className="text-gray-700 mb-8">
                        As we continue to grow, our vision is to expand our reach beyond Bihar to become a recognized digital marketing leader across Eastern India and beyond. We&apos;re investing in emerging technologies like AI-driven marketing and immersive experiences to ensure our clients stay ahead of digital trends.
                    </p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                        className="text-xl text-primary font-medium"
                    >
                        Our journey is just beginning, and we invite you to be part of our story.
                    </motion.p>
                </motion.div>
            </div>

            {/* Values Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="mt-20 md:mt-32 bg-primary text-white py-16 px-6 md:px-12 rounded-2xl"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Core Values</h2>
                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <motion.div variants={scaleUp} className="text-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">Innovation</h3>
                        <p className="text-white/80">Constantly exploring new digital strategies and technologies to keep our clients ahead of the curve.</p>
                    </motion.div>
                    <motion.div variants={scaleUp} className="text-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                        <p className="text-white/80">Working closely with clients as partners, ensuring their voice is heard and their goals are achieved.</p>
                    </motion.div>
                    <motion.div variants={scaleUp} className="text-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">Integrity</h3>
                        <p className="text-white/80">Maintaining transparency, honesty, and ethical practices in all our business dealings.</p>
                    </motion.div>
                    <motion.div variants={scaleUp} className="text-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
                        <p className="text-white/80">Focused on delivering measurable outcomes that directly impact our clients&apos; business success.</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Team Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="mt-20 md:mt-32 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-primary">Meet Our Leadership</h2>
                <p className="text-xl max-w-3xl mx-auto text-gray-700 mb-12">
                    Behind every successful campaign is our talented team of digital experts led by individuals who are passionate about innovation and excellence.
                </p>

                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <motion.div
                        variants={scaleUp}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="relative h-[300px]">
                            <Image
                                src="/founder.JPG"
                                alt="Founder & CEO"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary">Gagan Kumar</h3>
                            <p className="text-gray-500 mb-4">Founder & CEO</p>
                            <p className="text-gray-700">
                                With over 15 years of experience in digital marketing, Gagan founded Bazaar Digital with a vision to transform how businesses in Bihar approach digital presence.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={scaleUp}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="relative h-[300px]">
                            <Image
                                src="/creative-director.jpg"
                                alt="Creative Director"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary">Akash Jha</h3>
                            <p className="text-gray-500 mb-4">Creative Director</p>
                            <p className="text-gray-700">
                                Akash brings his artistic vision and creative design expertise to every project, transforming concepts into compelling visuals that help our clients&apos; brands stand out in the crowded digital space.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={scaleUp}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <div className="relative h-[300px]">
                            <Image
                                src="/team/saurabh.jpeg"
                                alt="Technology Lead"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary">Saurabh Kumar</h3>
                            <p className="text-gray-500 mb-4">Technology Lead</p>
                            <p className="text-gray-700">
                                Saurabh leads our web development team, combining cutting-edge technical skills with user experience expertise to build responsive, high-performance websites and web applications that deliver exceptional results for our clients.
                            </p>
                        </div>
                    </motion.div>


                </motion.div>
                <Button
                    onClick={() => router.push('/our-teams')}
                    className='mt-4 md:mt-8 -pt-2'>
                    View All Team <FaArrowCircleRight className='ml-2 h-6 w-6' />
                </Button>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="mt-20 md:mt-32 text-center bg-gray-50 py-16 px-6 rounded-xl border border-gray-200"
            >
                <h2 className="text-3xl font-bold mb-6 text-primary">Become Part of Our Story</h2>
                <p className="text-xl max-w-3xl mx-auto text-gray-700 mb-8">
                    Whether you&apos;re looking for a digital marketing partner or interested in joining our team, we&apos;d love to connect with you.
                </p>
                <motion.div
                    variants={staggerContainer}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.a
                        variants={scaleUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary pt-4"
                    >
                        Contact Us
                    </motion.a>
                    <motion.a
                        variants={scaleUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/career"
                        className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-full text-primary bg-white hover:bg-blue-50 pt-4"
                    >
                        Join Our Team
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    )
} 