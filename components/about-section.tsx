"use client"

import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide">À PROPOS</h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/bali-beach.JPG"
                alt="Pilote de drone FPV sur une plage"
                className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Le drone FPV, pour des prises de vues <span className="font-black">époustouflantes.</span>
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Les drones FPV repoussent les limites de la captation visuelle en permettant d'obtenir des perspectives
                aériennes inédites, impossibles à réaliser avec d'autres technologies de caméra.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Des poursuites spectaculaires à grande vitesse aux plans-séquences immersifs dans des lieux étroits, en
                passant par la mise en valeur dynamique des paysages, ces drones ouvrent un champ créatif sans limite.
              </p>

              <div className="pt-4">
                <Button
                  onClick={() => window.open("https://calendly.com/lucas-orsini-fpv/30min", "_blank")}
                  className="bg-gray-900 hover:bg-gray-800 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/25 text-white px-8 py-3 text-sm font-semibold tracking-wider border-l-4 border-[#ff9e0d] hover:border-l-6 transition-all duration-300 ease-out transform-gpu"
                >
                  PRENDRE RDV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
