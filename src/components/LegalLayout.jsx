import PageHeader from './PageHeader.jsx'

// Shared layout for the legal/policy pages: Apple hero + a clean reading column.
export default function LegalLayout({ eyebrow, title, subtitle, updated, sections }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="max-w-[820px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl reveal">
        {updated && (
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-10">Last updated: {updated}</p>
        )}

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-3">{s.heading}</h2>
              {s.body?.map((p, i) => (
                <p
                  key={i}
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  {s.list.map((it) => (
                    <li key={it} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
