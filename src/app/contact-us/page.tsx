"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaFacebook, FaThreads, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        company: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Here you would add your actual form submission logic
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", website: "", company: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-8">
                    <h2 className="text-lg font-medium uppercase text-gray-600 mb-2">DO YOU HAVE ANY QUESTIONS?</h2>
                    <h1 className="text-5xl font-bold text-primary mb-4">Let's Talk!</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Images and Text */}
                    <div className="space-y-8 items-start">

                        <div className='grid grid-cols-2 gap-8 mt-4 md:mt-20'>
                            <div className='relative rounded-2xl overflow-hidden h-[400px] w-[300px]'>
                                <Image src="/contact-us.webp" alt="About Us" fill className='rounded-2xl' />
                            </div>
                            <div className='relative rounded-2xl overflow-hidden h-[400px] w-[300px] -mt-10'>
                                <Image src="/helping-client2.webp" alt="About Us" fill className='object-cover' />
                            </div>
                        </div>


                        <div className="space-y-6 ">
                            <div >
                                <h3 className="text-2xl font-bold">Welcome to <span className="font-bold">Bazaar Digital</span>, where innovation meets impact.</h3>

                                <p className="text-gray-600 text-lg">
                                    We're thrilled to connect with you. Whether you have a
                                    project in mind, questions about our services, or just want
                                    to say hello, we'd love to hear from you.
                                </p>

                            </div>


                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white rounded-xl shadow-sm p-1">
                        <div className="space-y-2 mb-6">
                            <h3 className="text-2xl font-semibold">Send us a <span className="underline">message</span></h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-gray-200 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                    placeholder="Name"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-gray-200 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                    placeholder="Email ID"
                                />
                            </div>

                            <div className="flex">
                                <div className="inline-flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md">
                                    <div className="flex items-center">

                                        <span>+91</span>
                                    </div>
                                </div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-gray-200 border rounded-r-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                    placeholder="81234 56789"
                                />
                            </div>

                            <div>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-gray-200 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                    placeholder="Website"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-gray-200 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                    placeholder="Company Name"
                                />
                            </div>

                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border-gray-200 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                    placeholder="Please share your requirement in detail"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md transition-all duration-200 disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Send"}
                            </button>

                            {isSubmitted && (
                                <div className="p-3 bg-green-100 text-green-700 rounded-md text-center">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full  overflow-hidden shadow-lg mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    <Card className="w-full">
                        <CardTitle className="text-4xl text-secondary font-bold text-center"> Darbhanga, Bihar </CardTitle>
                        <CardContent>
                            <div className="space-y-3 mt-6">



                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.308627892453!2d85.89920769999999!3d26.154076399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb945892f55a9%3A0x5671bdac3ed6ed84!2sBazaar%20Digital%20-%20A%20Creative%20Agency!5e0!3m2!1sen!2sin!4v1745674205505!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>

                                <div className="flex items-center gap-3">

                                    <p className="text-gray-700">V.Mart Mall, near, Rajkumarganj, Kathalbari, Darbhanga, Bihar 846004</p>
                                </div>

                                <div className="flex items-center gap-3">

                                    <p className="text-gray-700">+91 8210546110, +91 9128102314</p>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardTitle className="text-4xl text-secondary font-bold text-center"> Patna, Bihar </CardTitle>
                        <CardContent>
                            <div className="space-y-3 mt-6">




                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.927168029339!2d85.141257!3d25.607336299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed591e915a6bd1%3A0x53230249687aa320!2sBazaar%20Digital%20Patna!5e0!3m2!1sen!2sin!4v1745731356547!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade" />
                                </div>

                                <div className="flex items-center gap-3 mt-4">

                                    <p className="text-gray-700">Office No : 307, 3rd Floor, Brindawankunj, Exhibition Rd, Fraser Road Area, Patna, Bihar 800001</p>
                                </div>

                                <div className="flex items-center gap-3 mt-3">

                                    <p className="text-gray-700">+91 8210546110 , +91 9128102314</p>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
                <div className="w-full py-8 md:py-16 text-white flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl font-bold text-primary">Checkout Our Social Handles  </h1>
                    <div className="flex items-center gap-4">
                        <Link href="https://www.facebook.com/share/1ZFrXHYR4Q/?mibextid=wwXIfr" target="_blank">
                            <FaFacebook className="text-2xl text-black" />
                        </Link>
                        <Link href="https://www.instagram.com/bazaardigitalofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                            <FaInstagram className="text-2xl text-black" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/bazaardigital" target="_blank">
                            <FaLinkedin className="text-2xl text-black" />
                        </Link>

                        <Link href="https://www.threads.com/@bazaardigitalofficial?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                            <FaThreads className="text-2xl text-black" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );

}