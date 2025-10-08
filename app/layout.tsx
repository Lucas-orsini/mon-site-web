import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  applicationName: "Lucas Orsini Visuals",
  generator: "Next.js",
  title: {
    default: "Lucas Orsini Visuals — Pilote de drone FPV professionnel",
    template: "%s — Lucas Orsini Visuals",
  },
  description:
    "Pilote de drone FPV professionnel. Prises de vues aériennes cinématiques pour pub, clip, événementiel et immobilier. Devis rapide — France & Europe.",
  keywords: [
    "drone FPV",
    "drone",
    "pilote drone",
    "aérien",
    "vidéo",
    "vidéo fpv",
    "cinématique",
    "publicité",
    "immobilier",
    "événementiel",
    "France",
  ],
  authors: [{ name: "Lucas Orsini" }],
  creator: "Lucas Orsini Visuals",
  publisher: "Lucas Orsini Visuals",
  category: "Professional Services",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
