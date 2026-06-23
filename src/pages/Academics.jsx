import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

const COURSES = [
  {
    icon: 'biotech',
    name: 'Science — PCMB',
    text: 'Physics, Chemistry, Mathematics & Biology. Ideal for NEET and medical aspirants.',
    tag: 'Science',
  },
  {
    icon: 'computer',
    name: 'Science — PCMC',
    text: 'Physics, Chemistry, Mathematics & Computer Science. Built for CET / JEE and engineering.',
    tag: 'Science',
  },
  {
    icon: 'trending_up',
    name: 'Commerce — Accountancy',
    text: 'Accountancy, Business Studies, Economics & Statistics for future finance leaders.',
    tag: 'Commerce',
  },
  {
    icon: 'devices',
    name: 'Commerce — Computer Science',
    text: 'Accountancy, Business Studies, Economics & Computer Science.',
    tag: 'Commerce',
  },
  {
    icon: 'workspace_premium',
    name: 'CA-CPT / CS Coaching',
    text: 'Integrated CA Foundation and Company Secretary coaching under expert CA guidance.',
    tag: 'Professional',
  },
  {
    icon: 'science',
    name: 'Modern Laboratories',
    text: 'Dedicated Physics, Chemistry, Biology and Computer labs for hands-on practicals.',
    tag: 'Facilities',
  },
]

export default function Academics() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        icon="menu_book"
        title="Learn Without Limits."
        subtitle="Two-year Pre-University programmes in Science and Commerce, affiliated to the Department of Pre-University Education, Government of Karnataka — with focused CA-CPT and CS coaching."
      />

      {/* Stats strip */}
      <section className="bg-surface-container-low border-b border-surface-variant">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: '99%', l: 'PUC Result (2016)' },
            { v: '11', l: 'Distinctions' },
            { v: '85', l: 'First Classes' },
            { v: '40+', l: 'Faculty Members' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-primary">{s.v}</div>
              <div className="font-body-md text-body-md text-on-surface-variant">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature image */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-lg md:pt-xl reveal">
        <div className="relative rounded-xl overflow-hidden min-h-[360px] flex items-end warm-shadow group">
          <img
            alt="Kayaka PU College students using microscopes in the science laboratory"
            src="/photos/microscope-lab.webp"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="relative z-10 p-6 md:p-8 max-w-xl">
            <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-white mb-2 drop-shadow">
              Hands-On Learning
            </h2>
            <p className="font-body-lg text-body-lg text-white/90 drop-shadow">
              Modern laboratories and practical sessions that turn theory into discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Colleges grid */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl reveal">
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-2">Courses We Offer</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Choose the stream that fits your ambition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((c) => (
            <div
              key={c.name}
              className="bg-surface rounded-xl border border-surface-variant p-6 warm-shadow-hover transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4">
                <Icon name={c.icon} fill />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{c.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">{c.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary bg-secondary-container px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <Link
                  to="/admissions"
                  className="font-label-lg text-label-lg text-primary hover:underline flex items-center gap-1"
                >
                  Learn more <Icon name="arrow_forward" className="text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pb-lg md:pb-xl reveal">
        <div className="rounded-xl bg-primary text-on-primary p-8 md:p-xl flex flex-col md:flex-row items-center justify-between gap-6 warm-shadow">
          <div>
            <h3 className="font-headline-lg text-headline-lg mb-2">Ready to find your program?</h3>
            <p className="font-body-lg text-body-lg opacity-90">
              Our advisors can help you map the perfect academic path.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-surface text-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-surface-container transition-colors font-bold tracking-wide whitespace-nowrap"
          >
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </>
  )
}
