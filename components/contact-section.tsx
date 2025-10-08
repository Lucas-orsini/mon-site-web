"use client"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading */}
          <div>
            <div className="mb-8">
              <span className="text-gray-600 text-sm tracking-wider uppercase relative">
                CONTACT
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ff9e0d] mt-1"></div>
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              UN PROJET, PRENEZ RENDEZ-VOUS POUR EN PARLER
            </h2>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl font-medium text-gray-900">
                Discutons ensemble de vos idées et transformons-les en images spectaculaires
              </p>
              <p className="text-gray-600 leading-relaxed">
                Simplifiez l'organisation de votre projet grâce à un rendez-vous en ligne. Plus besoin de vous déplacer
                : où que vous soyez, nous échangeons directement par visioconférence pour comprendre vos besoins.
              </p>
            </div>

            <button
              onClick={() => window.open("https://calendly.com/lucas-orsini-fpv/30min", "_blank")}
              className="bg-gray-900 text-white px-8 py-4 font-semibold tracking-wider uppercase border-l-4 border-[#ff9e0d] hover:bg-gray-800 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/25 hover:border-l-6 transition-all duration-300 ease-out transform-gpu"
            >
              PRENDRE RDV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
