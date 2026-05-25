import type { Metadata } from 'next'
import '../components/Header'
import '../components/Footer'
import '../components/home/HeroSection'
import '../components/home/ProductCategories'
import '../components/home/WhyChooseUs'
import '../components/home/PowerRange'
import '../components/home/ApplicationSolutions'
import '../components/home/RegionalMarkets'
import '../components/home/FactorySupport'
import '../components/home/ConfigurationSupport'
import '../components/home/FAQ'
import '../components/home/FinalCTA'

import './globals.css'

export const metadata: Metadata = {
  title: 'B2B Generator Website',
  description: 'Gas & Diesel Generator Solutions for Global Industrial Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}