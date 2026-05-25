'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--color-dark-gray)',
      borderBottom: '1px solid var(--color-gray)',
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <nav style={{
          display: 'flex',
          gap: '2rem',
          flex: 1,
        }}>
          <Link href="/" style={{
            color: 'var(--color-white)',
            fontWeight: 600,
          }}>
            Home
          </Link>
          <Link href="/products" style={{
            color: 'var(--color-white)',
            fontWeight: 500,
          }}>
            Products
          </Link>
          <Link href="/solutions" style={{
            color: 'var(--color-white)',
            fontWeight: 500,
          }}>
            Solutions
          </Link>
          <Link href="/markets" style={{
            color: 'var(--color-white)',
            fontWeight: 500,
          }}>
            Markets
          </Link>
          <Link href="/factory" style={{
            color: 'var(--color-white)',
            fontWeight: 500,
          }}>
            Factory
          </Link>
          <Link href="/cases" style={{
            color: 'var(--color-white)',
            fontWeight: 500,
          }}>
            Cases
          </Link>
          <Link href="/resources" style={{
            color: 'var(--color-white)',
            fontWeight: 500,
          }}>
            Resources
          </Link>
          <Link href="/about-us" style={{
            color: 'var(--color-white)',
            fontWeight: 500,
          }}>
            About Us
          </Link>
          <Link href="/contact" style={{
            color: 'var(--color-white)',
            fontWeight: 500,
          }}>
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          style={{
            backgroundColor: 'var(--color-industrial-yellow)',
            color: 'var(--color-black)',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Get a Quote
        </Link>
      </div>
    </header>
  )
}