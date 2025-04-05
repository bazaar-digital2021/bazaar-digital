'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-16">
                    {/* Logo (Left) */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/blue-logo.png"
                                alt="Bazaar Digital Logo"
                                width={140}
                                height={60}
                                className="h-8 w-auto md:h-10"
                            />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navigation Links (Middle) - Desktop */}
                    <nav className="hidden md:flex items-center justify-center space-x-8 flex-1 mx-10">
                        <Link
                            href="/our-story"
                            className="text-gray-700 hover:text-blue-800 font-medium"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/careers"
                            className="text-gray-700 hover:text-blue-800 font-medium"
                        >
                            Careers
                        </Link>
                        <Link
                            href="/our-clients"
                            className="text-gray-700 hover:text-blue-800 font-medium"
                        >
                            Our Clients
                        </Link>
                    </nav>

                    {/* Contact Button (Right) - Desktop */}
                    <div className="hidden md:block">
                        <Button
                            variant="outline"
                            className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white"
                            asChild
                        >
                            <Link href="tel:+918210546110">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                +91 8210546110
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/about-us"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/career"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Career
                        </Link>
                        <Link
                            href="/our-clients"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Clients
                        </Link>
                        <div className="px-3 py-2">
                            <Button
                                variant="outline"
                                className="w-full text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white"
                                asChild
                            >
                                <Link href="tel:+918210546110">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    +91 8210546110
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
} 