export default function ConfigurationSupport() {
  const requirements = [
    'Required Power',
    'Fuel Type',
    'Voltage & Frequency',
    'Country',
    'Application',
    'Working Environment',
  ]

  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#0a0a0a',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
          }}>
            Get the Right Generator Configuration
          </h2>
          <p style={{
            color: '#cccccc',
            fontSize: '1.1rem',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            To recommend a suitable generator solution, please provide your power requirement, fuel type, voltage, frequency, country, and application. Our team will help match a practical configuration for your project.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {requirements.map((req, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1a1a1a',
                padding: '2rem',
                borderRadius: '8px',
                textAlign: 'center',
                border: '2px solid #333333',
              }}
            >
              <p style={{
                color: '#ffd700',
                fontSize: '1.25rem',
                fontWeight: 600,
                margin: 0,
              }}>
                {req}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}