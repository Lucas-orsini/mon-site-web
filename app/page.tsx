import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import RealizationSlider from "@/components/realization-slider"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <RealizationSlider />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
