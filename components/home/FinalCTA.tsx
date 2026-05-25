'use client'

import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#0a0a0a',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
        }}>
          Need a Generator Solution for Your Project?
        </h2>
        <p style={{
          color: '#cccccc',
          fontSize: '1.1rem',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
        }}>
          Tell us your required power, fuel type, voltage, frequency, country, and application. Our team will recommend a suitable generator configuration for your project.
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
            href="/contact"
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
            Talk to Our Engineer
          </Link>
        </div>
      </div>
    </section>
  )
}