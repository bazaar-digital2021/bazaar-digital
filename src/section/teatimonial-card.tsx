import Image from "next/image"
import { cn } from "@/lib/utils"

interface Testimonial {
    id: number
    name: string
    role: string
    content: string
    image: string
    video: string
}

interface TestimonialCardProps {
    testimonial: Testimonial
    position: "prev" | "active" | "next" | "hidden"
    setVideoRef: (el: HTMLVideoElement | null) => void
    isActive: boolean
}

export default function TestimonialCard({ testimonial, position, setVideoRef, isActive }: TestimonialCardProps) {
    // Position-based styles
    const cardStyles = {
        prev: "absolute top-0 left-0 transform -translate-x-[30%] scale-75 opacity-60 z-10",
        active: "absolute top-0 left-0 transform translate-x-0 scale-100 opacity-100 z-20",
        next: "absolute top-0 left-0 transform translate-x-[130%] scale-75 opacity-60 z-10",
        hidden: "absolute top-0 left-0 transform translate-x-[200%] scale-50 opacity-0 z-0",
    }

    return (
        <div className={cn("w-full max-w-4xl mx-auto transition-all duration-500 ease-in-out", cardStyles[position])}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Video section */}
                    <div className="relative  bg-slate-900">
                        <video
                            ref={setVideoRef}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            loop
                            poster="/placeholder.svg?height=360&width=640"
                        >
                            <source src={testimonial.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Play status indicator */}
                        <div
                            className={cn(
                                "absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full",
                                isActive ? "opacity-100" : "opacity-0",
                            )}
                        >
                            {isActive ? "Now Playing" : "Paused"}
                        </div>
                    </div>

                    {/* Content section */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="mb-6">
                            <blockquote className="text-lg md:text-xl italic text-slate-700 mb-6">"{testimonial.content}"</blockquote>

                            <div className="flex items-center">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                                    <p className="text-slate-600">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
