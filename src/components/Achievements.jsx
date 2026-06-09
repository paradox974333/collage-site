import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

const ACHIEVEMENTS = [
  {
    img: '/carosalpics/puc-result-2015.jpg',
    stat: '99%',
    title: 'PU College Results',
    desc: '11 Distinctions and 85 First Classes out of 107 students.',
    year: '2015–16',
  },
  {
    img: '/carosalpics/sslc-results-2016.jpg',
    stat: '98%',
    title: 'SSLC Results',
    desc: '21 Distinctions with a school topper scoring 96.16%.',
    year: '2015–16',
  },
  {
    img: '/carosalpics/puc-the-hindu.jpg',
    stat: 'Press',
    title: 'Featured in The Hindu',
    desc: 'Science & Commerce PUC-II results celebrated in the press.',
    year: '2015–16',
  },
  {
    img: '/carosalpics/puc-udayavani.jpg',
    stat: 'Press',
    title: 'Featured in Udayavani',
    desc: '9 Distinctions, 70 First Classes and a 99% overall result.',
    year: '2015–16',
  },
  {
    img: '/carosalpics/puc-sanjevani.jpg',
    stat: 'Press',
    title: 'Featured in Sanjevani',
    desc: 'Full-page coverage of our PU College achievements.',
    year: '2015–16',
  },
]

export default function Achievements() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [paused, setPaused] = useState(false)

  // Keep the arrow enabled/disabled state in sync with scroll position.
  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 8)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }

  useEffect(() => {
    updateEdges()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // Auto-advance the carousel; loops back to the start at the end. Pauses on hover.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      const el = trackRef.current
      if (!el) return
      const atRightEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
      if (atRightEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCard(1)
      }
    }, 3500)
    return () => clearInterval(id)
  }, [paused])

  return (
    <section
      className="w-full bg-surface-container-low py-md md:py-lg overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header row */}
        <div className="flex items-end justify-between mb-5 md:mb-8">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm rounded-full mb-3 uppercase tracking-wider">
              Achievements
            </span>
            <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-1">
              Results That Speak for Themselves
            </h2>
            <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-xl">
              Year after year, our students excel — and the press takes notice.
            </p>
          </div>
          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous achievements"
              className="w-12 h-12 rounded-full bg-surface border border-surface-variant text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-30 disabled:hover:bg-surface disabled:hover:text-on-surface"
            >
              <Icon name="arrow_back" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next achievements"
              className="w-12 h-12 rounded-full bg-surface border border-surface-variant text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-30 disabled:hover:bg-surface disabled:hover:text-on-surface"
            >
              <Icon name="arrow_forward" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll track (Apple-style: snap, peeking cards, edge padding) */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-margin-mobile md:px-margin-desktop [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {ACHIEVEMENTS.map((a) => (
          <article
            key={a.img}
            data-card
            className="snap-start shrink-0 w-[80vw] sm:w-[340px] md:w-[400px]"
          >
            <a
              href={a.img}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group rounded-2xl overflow-hidden bg-surface-container warm-shadow"
            >
              {/* Width-based card; object-contain shows the whole clipping with no overflow/cutoff */}
              <div className="aspect-[3/4] flex items-center justify-center">
                <img
                  src={a.img}
                  alt={`${a.title} — ${a.year}`}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            </a>
            {/* Minimal caption */}
            <div className="px-1 pt-3">
              <h3 className="font-headline-md text-headline-md text-on-surface">{a.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{a.year}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile arrows */}
      <div className="flex md:hidden items-center justify-center gap-3 mt-2">
        <button
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Previous achievements"
          className="w-11 h-11 rounded-full bg-surface border border-surface-variant text-on-surface flex items-center justify-center disabled:opacity-30"
        >
          <Icon name="arrow_back" />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Next achievements"
          className="w-11 h-11 rounded-full bg-surface border border-surface-variant text-on-surface flex items-center justify-center disabled:opacity-30"
        >
          <Icon name="arrow_forward" />
        </button>
      </div>
    </section>
  )
}
