"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"



import { Menu, X } from "lucide-react"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import { useRouter } from "@bprogress/next/app"
import { navigation } from "@/lib/navigation"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            if (scrollPosition > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg"
                : "bg-white "
                }`}
        >
            <div className="w-full mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
                <div className="flex w-full items-center justify-between gap-8">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/logo1.svg"
                                alt="Bazaar Digital Logo"
                                width={200}
                                height={200}
                                className="h-8 w-auto md:h-12"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-end">
                        <DesktopNav items={navigation} />
                        <Button
                            className=" text-white hover:text-white/80 rounded-full px-4 pt-3 mb-2 ml-2 animate-pulse"
                            asChild
                        >
                            <Link href="tel:+918210546110">
                                Book a Call
                            </Link>
                        </Button>
                    </nav>

                </div>



                {/* Mobile Navigation */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden ">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 hover:bg-primary/10 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            <Menu className="h-8 w-8" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="w-[85%] max-w-sm  border-l shadow-lg">
                        {/* <Link href="/" className="flex items-cente z-10 pt-4">
                            <div className="relative h-24 md:h-64 w-48 sm:w-64">
                                <Image src="/vi-logo.png" alt="VAIDEHI INSTITUTE" fill className="object-contain" />
                            </div>
                        </Link> */}
                        <MobileNav items={navigation} setOpen={setOpen} />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
} 