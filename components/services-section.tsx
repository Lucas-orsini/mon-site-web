import { Camera, Megaphone, Home } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Camera,
      title: "Événementiel",
      description:
        "Faites vibrer vos événements ! Concerts, festivals, mariages ou soirées privées : grâce à la captation d'images par drone FPV.",
      link: "#",
    },
    {
      icon: Megaphone,
      title: "Publicité",
      description:
        "Le drone FPV révolutionne vos publicités avec des images spectaculaires, dynamiques et totalement immersives.",
      link: "#",
    },
    {
      icon: Home,
      title: "Immobilier",
      description:
        "Le drone FPV sublime vos propriétés, hôtels et lieux de vacances avec des vues spectaculaires et modernes.",
      link: "#",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <IconComponent className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-[#ff9e0d] font-semibold hover:text-[#e8890c] transition-colors duration-200"
                >
                  Prochainement...
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
