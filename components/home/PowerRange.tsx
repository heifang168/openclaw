export default function PowerRange() {
  const ranges = [
    {
      title: 'Below 50kVA',
      description: 'Small commercial use, shops, small facilities, and light-duty backup power.',
    },
    {
      title: '50kVA - 100kVA',
      description: 'Commercial buildings, small factories, farms, and backup applications.',
    },
    {
      title: '100kVA - 500kVA',
      description: 'Industrial plants, construction sites, hospitals, and medium-scale projects.',
    },
    {
      title: '500kVA - 1000kVA',
      description: 'Large factories, mining, data centers, and heavy-duty backup power.',
    },
    {
      title: '1000kVA+',
      description: 'Large industrial power systems, remote power stations, and project-based power solutions.',
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
            Power Range from 18kVA to 1000kVA+
          </h2>
          <p style={{
            color: '#cccccc',
            fontSize: '1.1rem',
          }}>
            Whether you need a small commercial generator or a large industrial power system, we can help match the right configuration.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {ranges.map((range, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1a1a1a',
                padding: '1.5rem',
                borderRadius: '4px',
                textAlign: 'center',
                border: '1px solid #333333',
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#ffd700',
              }}>
                {range.title}
              </h3>
              <p style={{
                color: '#cccccc',
                lineHeight: 1.6,
              }}>
                {range.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}