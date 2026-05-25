export default function FactorySupport() {
  const supportItems = [
    'Product selection support',
    'Technical configuration discussion',
    'Factory production coordination',
    'Testing and quality control',
    'Packing and delivery support',
    'Project-based communication',
  ]

  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#1a1a1a',
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
            Factory and Project Support for B2B Buyers
          </h2>
          <p style={{
            color: '#cccccc',
            fontSize: '1.1rem',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            We support overseas B2B buyers with product selection, configuration discussion, technical data, factory production coordination, testing, packing, and delivery support.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {supportItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#0a0a0a',
                padding: '1.5rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #333333',
              }}
            >
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#ffd700',
                borderRadius: '50%',
                marginRight: '1rem',
                flexShrink: 0,
              }}></div>
              <span style={{
                color: '#ffffff',
                fontSize: '1rem',
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}