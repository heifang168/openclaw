export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-dark-gray)',
      borderTop: '1px solid var(--color-gray)',
      padding: '3rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          marginBottom: '2rem',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: 'var(--color-white)',
          }}>
            Flexible gas and diesel generator solutions for global industrial and commercial power projects.
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: 'var(--color-industrial-yellow)',
            }}>
              Products
            </h4>
            <ul style={{
              listStyle: 'none',
              lineHeight: '2',
            }}>
              <li>
                <a href="/products/gas-generator-sets" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Gas Generator Sets
                </a>
              </li>
              <li>
                <a href="/products/diesel-generator-sets" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Diesel Generator Sets
                </a>
              </li>
              <li>
                <a href="/products/silent-generator-sets" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Silent Generator Sets
                </a>
              </li>
              <li>
                <a href="/products/containerized-generator-sets" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Containerized Generator Sets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: 'var(--color-industrial-yellow)',
            }}>
              Solutions
            </h4>
            <ul style={{
              listStyle: 'none',
              lineHeight: '2',
            }}>
              <li>
                <a href="/solutions/mining-power-solution" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Mining Power
                </a>
              </li>
              <li>
                <a href="/solutions/data-center-backup-power" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Data Center Backup
                </a>
              </li>
              <li>
                <a href="/solutions/oil-gas-power-solution" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Oil & Gas Projects
                </a>
              </li>
              <li>
                <a href="/solutions/construction-site-power" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Construction Site Power
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: 'var(--color-industrial-yellow)',
            }}>
              Markets
            </h4>
            <ul style={{
              listStyle: 'none',
              lineHeight: '2',
            }}>
              <li>
                <a href="/markets/middle-east" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Middle East
                </a>
              </li>
              <li>
                <a href="/markets/south-africa" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  South Africa
                </a>
              </li>
              <li>
                <a href="/markets/southeast-asia" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  Southeast Asia
                </a>
              </li>
              <li>
                <a href="/markets/north-america" style={{
                  color: 'var(--color-light-gray)',
                  textDecoration: 'none',
                }}>
                  North America
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              marginBottom: '1rem',
              color: 'var(--color-industrial-yellow)',
            }}>
              Contact
            </h4>
            <p style={{
              color: 'var(--color-light-gray)',
              marginBottom: '1rem',
            }}>
              Need a generator solution for your project?
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
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
        </div>

        <div style={{
          borderTop: '1px solid var(--color-gray)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'var(--color-light-gray)',
        }}>
          <p>&copy; 2024 B2B Generator Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'