import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
const siteUrl = "https://www.lucasorsinivisuals.com"; // ← remplace par ton domaine

export const metadata: Metadata = {
   metadataBase: new URL(siteUrl), // important
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
    "Lucas",
    "Orsini",
    "Lucas Orsini Visuals",
    "Visuals",
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
  },openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Lucas Orsini Visuals",
    title: "Lucas Orsini Visuals — Pilote de drone FPV professionnel",
    description:
      "Prises de vues aériennes FPV ciné & pub. Showreel, prestations, devis rapide.",
    locale: "fr_FR",
    images: [
      {
        url: `${siteUrl}/logo-lovisuals.png`, // 1200x630 recommandé
        width: 1200,
        height: 630,
        alt: "Lucas Orsini Visuals — Drone FPV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Orsini Visuals — Pilote de drone FPV professionnel",
    description:
      "Prises de vues aériennes FPV ciné & pub. Showreel, prestations, devis rapide.",
    creator: "@ton_handle", // optionnel
    images: [`${siteUrl}/logo-lovisuals.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
