import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

const RESOURCES = [
  { icon: 'menu_book', title: 'Reference & Textbooks', text: 'A well-stocked collection of textbooks and reference books for Science & Commerce.' },
  { icon: 'workspace_premium', title: 'Competitive Exams', text: 'Study material for NEET, CET, JEE, CA-CPT and CS preparation.' },
  { icon: 'computer', title: 'Computer Access', text: 'Computers with internet for research and digital learning.' },
  { icon: 'menu_book_2', title: 'Reading Hall', text: 'A quiet, well-lit reading hall for focused individual study.' },
]

const HOURS = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Exam Season', time: 'Extended hours' },
]

export default function Library() {
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    setSearched(query.trim().length > 0)
  }

  return (
    <>
      <PageHeader
        eyebrow="Library"
        icon="local_library"
        title="The Heart of Knowledge."
        subtitle="A well-stocked library with textbooks, reference materials, competitive-exam resources, and a quiet reading hall for focused study."
      />

      {/* Catalog search */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl">
        <div className="bg-surface-container-low rounded-xl border border-surface-variant p-6 md:p-8">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Search the Catalog</h2>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Icon
                name="search"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search books, journals, articles…"
                className="w-full pl-12 pr-4 py-3 rounded-full border border-surface-variant bg-surface text-on-surface focus:border-primary focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors font-bold tracking-wide"
            >
              Search
            </button>
          </form>
          {searched && (
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 flex items-center gap-2">
              <Icon name="info" className="text-primary" />
              Showing catalog results for “{query}”. Connect to the campus network for full access.
            </p>
          )}
        </div>
      </section>

      {/* Resources */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pb-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((r) => (
            <div
              key={r.title}
              className="bg-surface rounded-xl border border-surface-variant p-6 warm-shadow-hover transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4">
                <Icon name={r.icon} fill />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{r.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hours */}
      <section className="bg-surface-container-low py-lg md:py-xl">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-6 flex items-center gap-3">
              <Icon name="schedule" className="text-primary" />
              Opening Hours
            </h2>
            <ul className="divide-y divide-surface-variant">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-4">
                  <span className="font-body-md text-body-md text-on-surface">{h.day}</span>
                  <span className="font-label-lg text-label-lg text-primary">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary-container rounded-xl p-8">
            <Icon name="support_agent" fill className="text-on-secondary-container text-4xl mb-4" />
            <h3 className="font-headline-lg text-headline-lg text-on-secondary-container mb-3">
              Ask a Librarian
            </h3>
            <p className="font-body-md text-body-md text-on-secondary-container/80">
              Our research specialists are available in person, by chat, and over email to help with
              citations, sources, and study strategies.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
