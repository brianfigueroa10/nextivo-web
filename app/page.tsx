import Hero from "@/components/hero"
import ServicesSection from "@/components/services-section"
import PlanSection from "@/components/plan-section"
import ProjectsSection from "@/components/projects-section"
import AboutUs from "@/components/about-us"
import TestimonialSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"


export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PlanSection />
      <ProjectsSection />
      <AboutUs />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
    </>
  )
}
