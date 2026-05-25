'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What power range can you provide?',
      answer: 'We can support generator requirements from 18kVA small generators to 1000kVA+ industrial power systems, depending on the project application.',
    },
    {
      question: 'Do you provide both gas and diesel generator sets?',
      answer: 'Yes. We can provide gas generator sets, diesel generator sets, and related supporting electrical equipment for different project needs.',
    },
    {
      question: 'What information is needed for a quotation?',
      answer: 'Please provide the required power, fuel type, voltage, frequency, country, application, and working environment. This helps us recommend a suitable configuration.',
    },
    {
      question: 'Can the generator be customized for different countries?',
      answer: 'Generator configuration can be discussed based on local voltage, frequency, fuel type, climate, installation condition, and project requirements.',
    },
    {
      question: 'Do you provide supporting power equipment?',
      answer: 'Yes. Supporting equipment such as ATS, control panels, switchgear, distribution cabinets, enclosures, and related electrical equipment can be supplied depending on the project.',
    },
  ]

  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#1a1a1a',
    }}>
      <div style={{
        maxWidth: '1000px',
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
            Frequently Asked Questions
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#0a0a0a',
                marginBottom: '1rem',
                borderRadius: '4px',
                border: '1px solid #333333',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                }}>
                  {faq.question}
                </span>
                <span style={{
                  color: '#ffd700',
                  fontSize: '1.5rem',
                  fontWeight: 300,
                }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div style={{
                  padding: '0 1.5rem 1.5rem',
                  borderTop: '1px solid #333333',
                }}>
                  <p style={{
                    color: '#cccccc',
                    lineHeight: 1.6,
                    margin: '1rem 0 0',
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}