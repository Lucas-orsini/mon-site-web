"use client"

import { Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import TikTokIcon from "./tiktok-icon"

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    console.log(`[v0] Navigation clicked for section: ${sectionId}`)

    setTimeout(() => {
      if (sectionId === "top") {
        console.log("[v0] Scrolling to top...")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        return
      }

      const section = document.getElementById(sectionId)
      console.log(`[v0] Section found for ${sectionId}:`, section)

      if (section) {
        const rect = section.getBoundingClientRect()
        const offsetTop = section.offsetTop
        const elementHeight = section.offsetHeight
        const windowHeight = window.innerHeight

        console.log(`[v0] Section ${sectionId} - offsetTop: ${offsetTop}, rect:`, rect)
        console.log(`[v0] Element height: ${elementHeight}, window height: ${windowHeight}`)

        // Calculate position to center the element on screen
        const centerPosition = offsetTop - windowHeight / 2 + elementHeight / 2
        console.log(`[v0] Calculated center position: ${centerPosition}`)

        if (offsetTop > 0) {
          console.log(`[v0] Using offsetTop method for ${sectionId}`)
          window.scrollTo({
            top: centerPosition,
            behavior: "smooth",
          })
        } else if (rect.top > 0) {
          console.log(`[v0] Using getBoundingClientRect method for ${sectionId}`)
          const currentScrollY = window.scrollY
          const elementTop = currentScrollY + rect.top
          const centeredPosition = elementTop - windowHeight / 2 + rect.height / 2

          window.scrollTo({
            top: centeredPosition,
            behavior: "smooth",
          })
        } else {
          console.log(`[v0] No valid position found for ${sectionId}, using fallback positions`)
          const fallbackPositions = {
            about: 800,
            "realisation-slider": 1600,
            services: 2400,
            contact: 3200,
          }

          const fallbackPosition = fallbackPositions[sectionId as keyof typeof fallbackPositions] || 1000
          console.log(`[v0] Using fallback position ${fallbackPosition} for ${sectionId}`)

          window.scrollTo({
            top: fallbackPosition - windowHeight / 2,
            behavior: "smooth",
          })
        }
      } else {
        console.log(`[v0] Section ${sectionId} not found in DOM`)
      }
    }, 100)
  }

  return (
   <div className="relative min-h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="loop-site-web.mp4" type="video/mp4" />
        {/* Fallback to image if video fails to load */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-ikJpftxrdnzkrZr8jbp2L3CnXHNhwF.jpeg')`,
          }}
        />
      </video>

    
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wider group cursor-pointer">
          <span
            className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff9e0d] group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "0ms" }}
          >
            L
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff9e0d] group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "50ms" }}
          >
            O
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff9e0d] group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "100ms" }}
          >
            V
          </span>
          <span
            className="text-[#ff9e0d] inline-block transition-all duration-300 group-hover:scale-125 group-hover:text-white group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "150ms" }}
          >
            /
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff9e0d] group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "200ms" }}
          >
            S
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff9e0d] group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "250ms" }}
          >
            U
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff9e0d] group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "300ms" }}
          >
            A
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff9e0d] group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "350ms" }}
          >
            L
          </span>
          <span
            className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-[#ff9e0d] group-hover:rotate-12 transform-gpu"
            style={{ transitionDelay: "400ms" }}
          >
            S
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("top")}
            className="text-[#ff9e0d] font-semibold pb-1 border-b-2 border-[#ff9e0d]"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-[#ff9e0d] transition-colors font-medium"
          >
            A PROPOS
          </button>
          <button
            onClick={() => scrollToSection("realisation-slider")}
            className="text-white hover:text-[#ff9e0d] transition-colors font-medium"
          >
            REALISATION
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-[#ff9e0d] transition-colors font-medium"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-[#ff9e0d] transition-colors font-medium"
          >
            CONTACT
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/ors_lucas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff9e0d] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-orsini-b981b819b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff9e0d] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.youtube.com/@LOVISUALS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff9e0d] transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@lucas_ors_fpv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff9e0d] transition-colors"
            aria-label="TikTok"
          >
            <TikTokIcon size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 max-w-6xl leading-tight tracking-wide">
          CAPTUREZ VOS PROJETS SOUS UN NOUVEL ANGLE
        </h1>

        <Button
          variant="outline"
          size="lg"
          className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl transition-all duration-300 transform-gpu px-8 py-4 text-lg font-semibold tracking-wider"
          onClick={() => scrollToSection("realisation-slider")}
        >
          DÉCOUVREZ MES RÉALISATIONS
        </Button>
      </div>
    </div>
  )
}
