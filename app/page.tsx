import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/home/HeroSection'
import ProductCategories from '../components/home/ProductCategories'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PowerRange from '../components/home/PowerRange'
import ApplicationSolutions from '../components/home/ApplicationSolutions'
import RegionalMarkets from '../components/home/RegionalMarkets'
import FactorySupport from '../components/home/FactorySupport'
import ConfigurationSupport from '../components/home/ConfigurationSupport'
import FAQ from '../components/home/FAQ'
import FinalCTA from '../components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Gas & Diesel Generator Solutions for Global Industrial Projects',
  description: 'Flexible gas and diesel generator solutions from 18kVA to 1000kVA+ for factories, mining, construction, data centers, farms, oil and gas projects, and remote power applications. Send your power requirement to get a suitable configuration.',
}

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ marginTop: '80px' }}>
        <HeroSection />
        <ProductCategories />
        <WhyChooseUs />
        <PowerRange />
        <ApplicationSolutions />
        <RegionalMarkets />
        <FactorySupport />
        <ConfigurationSupport />
        <FAQ />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}