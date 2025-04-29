'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ServiceHeaderProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    buttonText?: string;
    buttonHref?: string;
}

export function ServiceHeader({
    title,
    description,
    imageSrc,
    imageAlt,
    buttonText = "Get Started",
    buttonHref = "/plan-and-pricing/web-services-plan-and-pricing",
}: ServiceHeaderProps) {
    return (
        <section id={title.toLowerCase().replace(/\s+/g, "-")} className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">
                            {title}
                        </h1>
                        <p className="text-lg text-muted-foreground">{description}</p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                            <Link href={buttonHref}>
                                {buttonText}
                            </Link>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full"
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 