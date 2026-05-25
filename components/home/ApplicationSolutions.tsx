export default function ApplicationSolutions() {
  const applications = [
    {
      title: 'Mining Power',
      description: 'Reliable power for mining sites, crushers, conveyors, camps, and remote operations.',
    },
    {
      title: 'Data Center Backup Power',
      description: 'Stable backup generator solutions for critical power continuity.',
    },
    {
      title: 'Oil & Gas Projects',
      description: 'Generator systems for remote oilfield, gas processing, and industrial energy projects.',
    },
    {
      title: 'Construction Site Power',
      description: 'Durable generator sets for temporary and long-term construction power needs.',
    },
    {
      title: 'Factory Backup Power',
      description: 'Backup and continuous power support for production lines and industrial facilities.',
    },
    {
      title: 'Hospital Emergency Power',
      description: 'Emergency generator solutions for critical medical and facility backup power.',
    },
    {
      title: 'Farm & Irrigation Power',
      description: 'Power support for farms, irrigation systems, greenhouses, and agricultural facilities.',
    },
    {
      title: 'Remote Power Projects',
      description: 'Flexible gas and diesel generator solutions for off-grid and remote locations.',
    },
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
            Generator Solutions for Industrial Applications
          </h2>
          <p style={{
            color: '#cccccc',
            fontSize: '1.1rem',
          }}>
            Our gas and diesel generator sets can support different industries and working conditions.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {applications.map((app, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#0a0a0a',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease',
              }}
            >
              <h3 style={{
                fontSize: '1.15rem',
                marginBottom: '1rem',
                color: '#ffd700',
              }}>
                {app.title}
              </h3>
              <p style={{
                color: '#cccccc',
                lineHeight: 1.5,
              }}>
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}