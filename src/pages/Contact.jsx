import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

const CONTACT_INFO = [
  {
    icon: 'location_on',
    title: 'Campus',
    lines: ['Kesaratagi Road, Kotnur-D', 'Ring Road, Kalaburagi, Karnataka 585102'],
  },
  {
    icon: 'call',
    title: 'Call',
    lines: ['09686569898 · 8123439659', '8123439640 · 9448652080'],
  },
  {
    icon: 'mail',
    title: 'Email & Web',
    lines: ['shivaraj.patil1@gmail.com', 'www.kayaka.net'],
  },
]

// Google Maps embed for Kesaratagi Road, Kalaburagi, Karnataka 585102
const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=Kesaratagi+Road,+Kalaburagi,+Karnataka+585102&output=embed'
const MAP_LINK = 'https://maps.app.goo.gl/dwYHe3yxdxTLMV88A'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((errs) => ({ ...errs, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length > 0) {
      setErrors(next)
      return
    }
    setSubmitted(true)
    setForm(initialForm)
  }

  const fieldClass = (name) =>
    `w-full px-4 py-3 rounded-lg border bg-surface text-on-surface focus:ring-primary focus:border-primary ${
      errors[name] ? 'border-error' : 'border-surface-variant'
    }`

  return (
    <>
      <Seo
        title="Contact Us"
        path="/contact"
        description="Get in touch with Kayaka PU College, Kalaburagi. Visit us at Kesaratagi Road, Kotnur-D, call 09686569898 / 8123439659, or send us a message."
      />
      <PageHeader
        eyebrow="Contact Us"
        icon="contact_support"
        title="Let's Talk."
        subtitle="Questions about admissions, academics, or campus life? Reach out — we'd love to hear from you."
      />

      <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl grid lg:grid-cols-3 gap-8 md:gap-12">
        {/* Info cards */}
        <div className="space-y-6">
          {CONTACT_INFO.map((c) => (
            <div
              key={c.title}
              className="bg-surface rounded-xl border border-surface-variant p-6 warm-shadow flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <Icon name={c.icon} fill />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line} className="font-body-md text-body-md text-on-surface-variant">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-surface-container-low rounded-xl border border-surface-variant p-6 md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-4">
                <Icon name="check_circle" fill className="text-3xl" />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Message Sent!</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-md">
                Thanks for reaching out. A member of our team will get back to you within two business
                days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors font-bold tracking-wide"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">
                Send Us a Message
              </h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-1.5" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={fieldClass('name')}
                    placeholder="Sachin Kadli"
                  />
                  {errors.name && <p className="text-error font-body-sm text-body-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={fieldClass('email')}
                    placeholder="sachin@example.com"
                  />
                  {errors.email && (
                    <p className="text-error font-body-sm text-body-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mb-5">
                <label className="block font-label-lg text-label-lg text-on-surface mb-1.5" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={fieldClass('subject')}
                  placeholder="How can we help?"
                />
              </div>
              <div className="mb-6">
                <label className="block font-label-lg text-label-lg text-on-surface mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={fieldClass('message')}
                  placeholder="Write your message here…"
                />
                {errors.message && (
                  <p className="text-error font-body-sm text-body-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all warm-shadow-hover font-bold tracking-wide"
              >
                Send Message <Icon name="send" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-8 pb-lg md:pb-xl reveal">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-section text-on-surface mb-1">Find Us on the Map</h2>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
              <Icon name="location_on" className="text-primary" />
              Kesaratagi Road, Kalaburagi, Karnataka 585102
            </p>
          </div>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container font-label-lg text-label-lg px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-bold tracking-wide whitespace-nowrap"
          >
            <Icon name="directions" />
            Get Directions
          </a>
        </div>
        <div className="rounded-xl overflow-hidden border border-surface-variant warm-shadow">
          <iframe
            title="Kayaka PU College location map"
            src={MAP_EMBED_SRC}
            className="w-full h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  )
}
