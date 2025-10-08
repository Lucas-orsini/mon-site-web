import { Instagram, Linkedin, Youtube } from "lucide-react"
import TikTokIcon from "./tiktok-icon"

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <div className="leading-tight text-center">
            <div>LO</div>
            <div>V/SUALS</div>
          </div>
        </div>

        {/* Center - Business Name */}
        <div className="text-gray-600 text-lg font-medium">Lucas Orsini Visuals</div>

        {/* Right - Social Media Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/ors_lucas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-orsini-b981b819b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com/@LOVISUALS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@lucas_ors_fpv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="TikTok"
          >
            <TikTokIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
