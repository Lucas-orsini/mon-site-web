"use client"

import { useState, useEffect, useRef } from "react"
import { Play, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Mon Showreel",
    date: "OCTOBRE 2025",
    thumbnail: "/photo-showreel.png",
    videoUrl: "https://www.youtube.com/watch?v=YSg7HkOVu2o",
  },
  {
    id: 2,
    title: "Mariage Laura & Jordan",
    date: "JUIN 2025",
    thumbnail: "/chateau-wedding-aerial.jpg",
    videoUrl: "https://www.youtube.com/watch?v=y1nXZJJCFq0",
  },
  {
    id: 3,
    title: "Phillipines From The Sky",
    date: "AVRIL 2025",
    thumbnail: "/drone-philippines.jpg",
    videoUrl: "https://www.youtube.com/watch?v=OrimMUGE9fw",
  },
   {
    id: 3,
    title: "FPV In Asia",
    date: "JANVIER 2025",
    thumbnail: "/bali-riz.png",
    videoUrl: "https://www.youtube.com/watch?v=fTPvP7m3GWI",
  },
]

export default function RealizationSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startAutoTransition = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length)
      }, 3000)
    }

    startAutoTransition()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleSlideChange = (index: number) => {
    if (index === currentSlide || isAnimating) return

    setIsAnimating(true)
    setCurrentSlide(index)

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, 3000)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const handlePlayVideo = () => {
    setIsModalOpen(true)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, 3000)
  }

  const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0]
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }

  return (
    <>
      <section id="realisation-slider" className="relative min-h-screen bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
          <h2 className="text-base font-light tracking-[0.3em] uppercase mb-16">RÉALISATION</h2>

          <div
            className={`mb-8 transition-all duration-500 ease-in-out transform ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-4xl md:text-6xl font-light mb-4 text-balance">{projects[currentSlide].title}</h3>
            <p className="text-2xl md:text-3xl font-light tracking-wide">{projects[currentSlide].date}</p>
          </div>

          <button
            className={`group mb-20 transition-all duration-500 ease-in-out transform ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
            onClick={handlePlayVideo}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/80 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 fill-white" />
            </div>
          </button>

          <div className="flex space-x-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`transition-all duration-500 ease-out hover:scale-110 ${
                  index === currentSlide
                    ? "w-16 h-1 bg-white shadow-lg"
                    : "w-12 h-1 bg-white/50 hover:bg-white/70 hover:w-14"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative aspect-video">
              <iframe
                src={getEmbedUrl(projects[currentSlide].videoUrl)}
                title={projects[currentSlide].title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{projects[currentSlide].title}</h3>
              <p className="text-gray-300">{projects[currentSlide].date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
