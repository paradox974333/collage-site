import Icon from './Icon.jsx'

// Shared hero/banner used at the top of every inner page.
export default function PageHeader({ eyebrow, title, subtitle, icon }) {
  return (
    <section className="w-full bg-gradient-to-b from-surface-container to-surface-container-low border-b border-surface-variant">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl reveal">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container font-label-sm rounded-full mb-4 uppercase tracking-wider">
          {icon && <Icon name={icon} className="text-base" />}
          {eyebrow}
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
