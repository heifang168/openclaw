export default function ProductCategories() {
  const products = [
    {
      title: 'Gas Generator Sets',
      description: 'Cleaner and cost-effective power generation for continuous and industrial applications.',
    },
    {
      title: 'Diesel Generator Sets',
      description: 'Reliable backup and emergency power for factories, construction sites, hospitals, and remote projects.',
    },
    {
      title: 'Silent Generator Sets',
      description: 'Enclosed generator systems for lower noise and outdoor commercial applications.',
    },
    {
      title: 'Open Type Generator Sets',
      description: 'Cost-effective generator sets for machine rooms, workshops, and customized installations.',
    },
    {
      title: 'Containerized Generator Sets',
      description: 'Integrated power systems for large-scale, harsh-environment, and outdoor industrial projects.',
    },
    {
      title: 'Trailer Generator Sets',
      description: 'Mobile generator solutions for temporary power, rental power, emergency use, and field operations.',
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
            Generator Products for Different Project Needs
          </h2>
          <p style={{
            color: '#cccccc',
            fontSize: '1.1rem',
          }}>
            Choose gas or diesel generator sets based on your fuel type, power range, working condition, and installation requirement.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1a1a1a',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #333333',
                transition: 'all 0.3s ease',
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: '#ffd700',
              }}>
                {product.title}
              </h3>
              <p style={{
                color: '#cccccc',
                lineHeight: 1.6,
              }}>
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}