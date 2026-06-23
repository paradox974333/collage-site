import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

const STEPS = [
  {
    n: '01',
    icon: 'call',
    title: 'Enquire & Apply',
    text: 'Visit the campus or call us to collect and submit the admission form for Science or Commerce.',
  },
  {
    n: '02',
    icon: 'folder_shared',
    title: 'Submit Documents',
    text: 'Provide your SSLC / 10th marks card, transfer certificate, and passport-size photographs.',
  },
  {
    n: '03',
    icon: 'forum',
    title: 'Counselling',
    text: 'Meet our faculty to choose the right combination — PCMB, PCMC or Commerce.',
  },
  {
    n: '04',
    icon: 'celebration',
    title: 'Confirm Admission',
    text: 'Pay fees, opt for hostel and transport, and join the Kayaka family.',
  },
]

const DATES = [
  { label: 'SSLC Results & Enquiry', date: 'May' },
  { label: 'Admissions Open', date: 'May – June' },
  { label: 'Classes Begin', date: 'June' },
  { label: 'Hostel Allotment', date: 'June' },
]

export default function Admissions() {
  return (
    <>
      <Seo
        title="Admissions 2026-27"
        path="/admissions"
        description="Admissions are open at Kayaka PU College, Kalaburagi for Science & Commerce. Learn how to apply, key dates, and hostel & transport options. Call 09686569898."
      />
      <PageHeader
        eyebrow="Admissions"
        title="Your journey starts here."
        subtitle="Joining Kayaka is the first step toward a future without limits. Here's everything you need to apply."
        cta={{ label: 'Contact Admissions', to: '/contact' }}
      />

      {/* Process steps */}
      <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl reveal">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-section text-on-surface mb-3">How to Apply</h2>
          <p className="font-body-lg text-body-lg md:text-[21px] text-on-surface-variant">
            Four simple steps to becoming a Kayaka student.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="bg-surface rounded-xl border border-surface-variant p-6 warm-shadow-hover transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display-lg-mobile text-display-lg-mobile text-on-surface/10">{s.n}</span>
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <Icon name={s.icon} fill />
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{s.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deadlines + Aid */}
      <section className="bg-surface-container-low py-lg md:py-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-section text-on-surface mb-6">Key Dates</h2>
            <ul className="space-y-3">
              {DATES.map((d) => (
                <li
                  key={d.label}
                  className="flex items-center justify-between bg-surface rounded-lg border border-surface-variant px-5 py-4"
                >
                  <span className="font-body-md text-body-md text-on-surface flex items-center gap-3">
                    <Icon name="event" className="text-on-surface-variant" />
                    {d.label}
                  </span>
                  <span className="font-label-lg text-label-lg text-on-surface-variant">{d.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-tertiary-fixed rounded-xl border border-outline-variant p-8 flex flex-col justify-center">
            <Icon name="hotel" fill className="text-tertiary text-4xl mb-4" />
            <h3 className="font-headline-lg text-headline-lg text-on-tertiary-container mb-3">
              Hostel, Transport & Boarding
            </h3>
            <p className="font-body-md text-body-md text-on-tertiary-container/80 mb-6">
              Separate well-equipped hostels for boys and girls, our own fleet of buses with citywide
              stops, and long day-boarding — so students can focus fully on learning.
            </p>
            <Link
              to="/contact"
              className="w-max bg-tertiary text-on-tertiary font-label-lg text-label-lg px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-bold tracking-wide"
            >
              Ask About Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl text-center reveal">
        <h2 className="text-section text-on-surface mb-4">Ready to Apply?</h2>
        <p className="font-body-lg text-body-lg md:text-[21px] text-on-surface-variant mb-8 max-w-xl mx-auto">
          Admissions are open for Science &amp; Commerce. Call{' '}
          <span className="text-on-surface font-semibold">09686569898</span> or{' '}
          <span className="text-on-surface font-semibold">8123439659</span> to begin your Kayaka story.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:09686569898"
            className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-10 py-4 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all warm-shadow-hover font-bold tracking-wide"
          >
            <Icon name="call" /> Call to Apply
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-label-lg text-label-lg px-10 py-4 rounded-full hover:bg-primary hover:text-on-primary transition-all font-bold tracking-wide"
          >
            Contact Us <Icon name="arrow_forward" />
          </Link>
        </div>
      </section>
    </>
  )
}
