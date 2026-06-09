import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

// Hero slides — landscape campus images that auto-rotate.
const SLIDES = [
  { src: '/photos/IMG_2139.jpg', alt: 'Kayaka PU College — Education for Character, Knowledge for Life' },
  { src: '/photos/hero-banner-4.png', alt: 'Admissions Open 2026-27 — the best PU College in Kalaburagi' },
  { src: '/photos/hero-banner.png', alt: 'Kayaka PU College Kalaburagi — the best college' },
]

const AUTOPLAY_MS = 4000

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = SLIDES.length

  const goTo = (i) => setIndex((i + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  // Auto-advance unless the user is hovering.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, count])

  return (
    <section className="w-full px-2 md:px-3 py-2 md:py-3">
      <div
        className="relative w-full overflow-hidden rounded-xl aspect-[3/2] bg-surface-container-low shadow-sm group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides (crossfade) — object-cover fills, only a tiny outer margin for the gap */}
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Prev / Next */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-surface/70 backdrop-blur-sm text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors opacity-0 group-hover:opacity-100"
        >
          <Icon name="chevron_left" className="text-2xl" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-surface/70 backdrop-blur-sm text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors opacity-0 group-hover:opacity-100"
        >
          <Icon name="chevron_right" className="text-2xl" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
