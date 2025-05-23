import Hero from "@/section/Hero"
import Intro from "@/section/Intro"
import OurServices from "@/section/our-services"
import OurWork from "@/section/our-work"
import Testimonial from "@/section/Testimonial"
import CareerSection from "@/section/CareerSection"
import OurClients from "@/section/our-clients"


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <OurServices />
      <Intro />
      <OurWork />
      <OurClients />
      <CareerSection />
      <Testimonial />
    </main>
  )
}
