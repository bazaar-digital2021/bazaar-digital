"use client"

import { useState } from "react"
import Image from "next/image"

import { motion } from "framer-motion"



export default function TeamMember({ member }: any) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.li
            className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-[3/4] w-full overflow-hidden">
                <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 ease-in-out"
                    style={{
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                    }}
                />
            </div>
            <motion.div
                className="p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                <p className="text-base leading-7 text-indigo-600">{member.role}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-3">{member.desc}</p>
            </motion.div>
        </motion.li>
    )
}
