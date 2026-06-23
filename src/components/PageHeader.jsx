import { Link } from 'react-router-dom'

// Apple-style centered hero: small eyebrow, poster-scale headline, light subtext,
// and at most one azure pill CTA. Used at the top of every inner page.
export default function PageHeader({ eyebrow, title, subtitle, cta }) {
  return (
    <section className="w-full bg-background">
      <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop pt-lg pb-md md:pt-[104px] md:pb-xl text-center reveal">
        {eyebrow && <p className="eyebrow text-on-surface-variant mb-4">{eyebrow}</p>}
        <h1 className="text-hero text-on-surface text-balance mb-5">{title}</h1>
        {subtitle && (
          <p className="font-body-lg text-body-lg md:text-[21px] leading-relaxed text-on-surface-variant max-w-2xl mx-auto text-balance">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="mt-8 flex justify-center">
            <Link
              to={cta.to}
              className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-lg text-label-lg hover:bg-primary-container transition-colors"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
