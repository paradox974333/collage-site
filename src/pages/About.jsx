import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

const VALUES = [
  {
    icon: 'lightbulb',
    title: 'Curiosity',
    text: 'We champion bold questions and the relentless pursuit of understanding.',
  },
  {
    icon: 'diversity_3',
    title: 'Community',
    text: 'A welcoming, inclusive home where every student belongs and thrives.',
  },
  {
    icon: 'public',
    title: 'Impact',
    text: 'We translate knowledge into action that improves the world around us.',
  },
  {
    icon: 'verified',
    title: 'Integrity',
    text: 'Honesty, accountability, and respect guide everything we do.',
  },
]

const MILESTONES = [
  {
    year: '2009',
    text: 'Kayaka Foundation Education Trust (R) established in Kalaburagi by Sri. Shivaraj Patil.',
  },
  {
    year: '2013',
    text: 'PU College of Science & Commerce launched on the Kesaratagi Road residential campus.',
  },
  {
    year: '2016',
    text: 'Students achieve 99% in PUC and 98% in SSLC — featured in The Hindu, Udayavani and Sanjevani.',
  },
  {
    year: '2023',
    text: 'Kayaka Sambhrama celebrates the institution’s 13th school & college anniversary.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        icon="school"
        title="A Legacy of Learning."
        subtitle="Founded by Sri. Shivaraj Patil under Kayaka Foundation Education Trust (R), our residential campus in Kalaburagi nurtures students in Science and Commerce to learn, grow, and excel."
      />

      {/* Mission */}
      <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl reveal">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-4">Our Mission</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
              Kayaka Foundation PU College of Science &amp; Commerce empowers students through rigorous
              academics, hands-on laboratory learning, and a caring residential community.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Affiliated to the Department of Pre-University Education, Government of Karnataka, and run
              by Kayaka Foundation Education Trust (R), we prepare students in Science and Commerce to
              lead with knowledge, character, and discipline.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden warm-shadow min-h-[320px]">
            <img
              alt="Kayaka PU College faculty and students together at a college function"
              className="w-full h-full object-cover"
              src="/photos/community-group.webp"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low py-lg md:py-xl">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop reveal">
          <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-2 text-center">
            What We Stand For
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 text-center">
            The values that shape our community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-surface rounded-xl border border-surface-variant p-6 warm-shadow-hover transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-4">
                  <Icon name={v.icon} fill />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{v.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl reveal">
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-6 md:mb-12">Our Journey</h2>
        <div className="space-y-6">
          {MILESTONES.map((m) => (
            <div key={m.year} className="flex gap-6 items-start">
              <span className="font-display-lg-mobile text-display-lg-mobile text-primary w-28 shrink-0">
                {m.year}
              </span>
              <p className="font-body-lg text-body-lg text-on-surface-variant border-l-2 border-primary/30 pl-6 py-2">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
