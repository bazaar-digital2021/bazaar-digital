import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, Briefcase, Heart, Star, Search, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Career() {
    return (
        <main className="flex-1 overflow-x-hidden">
            <section className="w-full py-4 md:py-8 lg:py-12 ">
                <div className=" px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">

                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <p className=" tracking-wide">
                                    Looking to be a part of an industry that’s constantly evolving and shaping the future?
                                </p>
                                <h1 className="max-w-[600px] font-bold text-[#6C6C6C] text-3xl md:text-5xl lg:text-7xl">
                                    We are <br className="hidden lg:block" />
                                    <span className="text-primary"> HIRING  </span>
                                    creative
                                    & awesome people
                                </h1>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                We’d love to hear from you, so please click below to view our job listings and send us your resume. Tell us a little bit about yourself so we can understand you.
                            </div>
                        </div>

                        <div className="relative lg:block">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 md:mt-20'>
                                <div className='relative rounded-2xl overflow-hidden  '>
                                    <Image src="/career/creative.png" alt="About Us" height={1000} width={1000} className='rounded-2xl' />
                                </div>
                                <div className='relative rounded-2xl overflow-hidden lg:-mt-10 '>
                                    <Image src="/helping-client2.webp" alt="About Us" height={1000} width={1000} className='object-cover rounded-2xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                <div className=" px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-flex text-white items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                                Our Culture
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-4 text-primary">Why Work With Us?</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                We're building a culture where innovation thrives and every voice matters. Join a team that values
                                creativity, collaboration, and growth.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary">Collaborative Environment</h3>
                            <p className="text-muted-foreground">
                                Work alongside talented individuals who are passionate about what they do. We believe in teamwork and
                                supporting each other.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                <Briefcase className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary">Career Growth</h3>
                            <p className="text-muted-foreground">
                                We invest in your development with mentorship, learning opportunities, and a clear path for
                                advancement.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary">Work-Life Balance</h3>
                            <p className="text-muted-foreground">
                                We value your wellbeing with flexible work arrangements, competitive benefits, and a supportive
                                culture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className=" px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm font-medium">
                                Open Positions
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Find Your Perfect Role</h2>
                            <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Explore our current openings and find where your skills and passion align with our mission.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-5xl py-8">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <Tabs defaultValue="all" className="w-full">
                                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <TabsList className="grid w-full grid-cols-4 md:w-auto">
                                        <TabsTrigger value="all">All</TabsTrigger>
                                        <TabsTrigger value="engineering">Engineering</TabsTrigger>
                                        <TabsTrigger value="design">Design</TabsTrigger>
                                        <TabsTrigger value="marketing">Marketing</TabsTrigger>
                                    </TabsList>
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="search"
                                            placeholder="Search positions..."
                                            className="w-full appearance-none bg-background pl-8 md:w-[300px]"
                                        />
                                    </div>
                                </div>
                                <TabsContent value="all" className="mt-6 space-y-4">
                                    <JobCard
                                        title="Senior Frontend Developer"
                                        department="Engineering"
                                        location="Remote"
                                        type="Full-time"
                                    />
                                    <JobCard title="UX/UI Designer" department="Design" location="San Francisco, CA" type="Full-time" />
                                    <JobCard
                                        title="Marketing Manager"
                                        department="Marketing"
                                        location="New York, NY"
                                        type="Full-time"
                                    />
                                    <JobCard title="Backend Engineer" department="Engineering" location="Remote" type="Full-time" />
                                    <JobCard title="Product Manager" department="Product" location="Remote" type="Full-time" />
                                </TabsContent>
                                <TabsContent value="engineering" className="mt-6 space-y-4">
                                    <JobCard
                                        title="Senior Frontend Developer"
                                        department="Engineering"
                                        location="Remote"
                                        type="Full-time"
                                    />
                                    <JobCard title="Backend Engineer" department="Engineering" location="Remote" type="Full-time" />
                                    <JobCard title="DevOps Engineer" department="Engineering" location="Remote" type="Full-time" />
                                </TabsContent>
                                <TabsContent value="design" className="mt-6 space-y-4">
                                    <JobCard title="UX/UI Designer" department="Design" location="San Francisco, CA" type="Full-time" />
                                    <JobCard title="Senior Product Designer" department="Design" location="Remote" type="Full-time" />
                                </TabsContent>
                                <TabsContent value="marketing" className="mt-6 space-y-4">
                                    <JobCard
                                        title="Marketing Manager"
                                        department="Marketing"
                                        location="New York, NY"
                                        type="Full-time"
                                    />
                                    <JobCard title="Content Strategist" department="Marketing" location="Remote" type="Contract" />
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                <div className=" px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-flex items-center text-white rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                                Testimonials
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hear From Our Team</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our employees are our greatest asset. Here's what they have to say about working with us.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                        <TestimonialCard
                            name="Ajay Kumar Thakur"
                            role="Senior Graphic Designer"
                            image="/team/ajay.jpeg"
                            quote="I've grown so much professionally since joining the team. The collaborative environment and challenging projects keep me engaged every day."
                        />
                        <TestimonialCard
                            name="Anushka Suman"
                            role="Content Creator"
                            image="/team/anushka.jpeg"
                            quote="The culture here truly values creativity and innovation. I'm empowered to bring my ideas to the table and see them come to life."
                        />
                        <TestimonialCard
                            name="Priyanshu Kumar "
                            role="Video Editor"
                            image="/team/priyanshu.JPG"
                            quote="The work-life balance is amazing. I feel supported both professionally and personally, which makes me more productive and happier at work."
                        />
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
                <div className=" px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                    Ready to Join Our Team?
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                                    We're always looking for talented individuals to join our growing team. Check out our open positions
                                    or send us your resume.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button className="inline-flex h-10 items-center justify-center rounded-md px-8">
                                    View Open Positions
                                </Button>
                                <Button variant="outline" className="inline-flex h-10 items-center justify-center rounded-md px-8">
                                    Send Your Resume
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="rounded-lg border bg-background p-8 shadow-lg">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold">Stay Updated</h3>
                                    <p className="text-muted-foreground">
                                        Subscribe to our careers newsletter to get notified about new opportunities.
                                    </p>
                                    <div className="space-y-2">
                                        <Input type="email" placeholder="Enter your email" />
                                        <Button className="w-full">Subscribe</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

function JobCard({ title, department, location, type }: { title: string, department: string, location: string, type: string }) {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-0">
                <div className="grid grid-cols-1 items-start gap-4 p-6 sm:grid-cols-3">
                    <div className="col-span-2 space-y-1">
                        <h3 className="font-semibold">{title}</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{department}</Badge>
                            <Badge variant="outline">{location}</Badge>
                            <Badge variant="outline">{type}</Badge>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button>
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function TestimonialCard({ name, role, image, quote }: { name: string, role: string, image: string, quote: string }) {
    return (
        <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover object-top" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-center">
                            <Star className="h-5 w-5 fill-primary text-primary" />
                            <Star className="h-5 w-5 fill-primary text-primary" />
                            <Star className="h-5 w-5 fill-primary text-primary" />
                            <Star className="h-5 w-5 fill-primary text-primary" />
                            <Star className="h-5 w-5 fill-primary text-primary" />
                        </div>
                        <p className="text-muted-foreground">"{quote}"</p>
                        <div>
                            <h4 className="font-semibold">{name}</h4>
                            <p className="text-sm text-muted-foreground">{role}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

