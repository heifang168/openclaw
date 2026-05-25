export default function RegionalMarkets() {
  const markets = [
    {
      title: 'Middle East',
      description: 'Generator solutions for hot climate, desert projects, oil & gas, construction, and remote power.',
    },
    {
      title: 'South Africa',
      description: 'Backup power solutions for load shedding, mining, factories, farms, and commercial facilities.',
    },
    {
      title: 'Southeast Asia',
      description: 'Cost-effective generator solutions for factories, farms, humid environments, and remote sites.',
    },
    {
      title: 'North America',
      description: 'Industrial-grade generator systems for commercial backup, construction, data centers, and emergency power.',
    },
    {
      title: 'South America',
      description: 'Flexible generator solutions for mining, agriculture, remote projects, and industrial plants.',
    },
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
            Serving Global B2B Power Projects
          </h2>
          <p style={{
            color: '#cccccc',
            fontSize: '1.1rem',
          }}>
            We support generator project needs across different markets and working environments.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {markets.map((market, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1a1a1a',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #333333',
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: '#ffd700',
              }}>
                {market.title}
              </h3>
              <p style={{
                color: '#cccccc',
                lineHeight: 1.6,
              }}>
                {market.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}