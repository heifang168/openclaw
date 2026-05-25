export default function WhyChooseUs() {
  const advantages = [
    {
      title: 'Wide Power Range',
      description: 'From 18kVA small units to 1000kVA+ industrial power systems.',
    },
    {
      title: 'Gas & Diesel Options',
      description: 'Flexible fuel choices for backup power, continuous power, and project-based energy needs.',
    },
    {
      title: 'Project-Based Configuration',
      description: 'Generator solutions can be configured by power range, voltage, frequency, fuel type, and application.',
    },
    {
      title: 'Supporting Electrical Equipment',
      description: 'ATS, control panels, switchgear, distribution cabinets, enclosures, and other supporting equipment can be supplied.',
    },
    {
      title: 'Flexible Supply Support',
      description: 'More flexible configuration and faster communication for global B2B project buyers.',
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
            Why B2B Buyers Choose Our Generator Solutions
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {advantages.map((advantage, index) => (
            <div
              key={index}
              style={{
                padding: '2rem',
                borderLeft: '4px solid #ffd700',
                backgroundColor: '#0a0a0a',
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: '#ffd700',
              }}>
                {advantage.title}
              </h3>
              <p style={{
                color: '#cccccc',
                lineHeight: 1.6,
              }}>
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}