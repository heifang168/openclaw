'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      position: 'relative',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          background: 'linear-gradient(135deg, #ffffff 0%, #ffd700 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Gas & Diesel Generator Solutions for Global Industrial Projects
        </h1>

        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          color: '#cccccc',
          maxWidth: '900px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
        }}>
          From 18kVA small generators to 1000kVA+ industrial power systems, we provide flexible gas and diesel generator solutions for factories, mining, construction, data centers, farms, oil & gas projects, and remote power applications.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <Link
            href="/contact"
            style={{
              backgroundColor: '#ffd700',
              color: '#000000',
              padding: '1rem 2rem',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Get a Quote
          </Link>
          <Link
            href="/products"
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '1rem 2rem',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              border: '2px solid #ffffff',
              transition: 'all 0.3s ease',
            }}
          >
            View Products
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section h1 {
            font-size: 2rem !important;
          }
          section p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  )
}