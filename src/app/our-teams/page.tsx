
import type { Metadata } from "next"
import { teams } from "./_components/team-data"
import TeamMember from "./_components/team-member"
import CareerSection from "@/section/CareerSection"

export const metadata: Metadata = {
    title: "Our Team | Company Name",
    description: "Meet our talented team of professionals",
}

export default function TeamPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {teams.map((member) => (
                        <TeamMember key={member.name} member={member} />
                    ))}
                </ul>
            </div>
            <CareerSection />
        </div>
    )
}
