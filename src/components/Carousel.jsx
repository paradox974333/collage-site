import { useCallback, useEffect, useState } from 'react'
import Icon from './Icon.jsx'

const SLIDES = [
  { src: '/photos/campus-building.webp', title: 'Our Campus', caption: 'A welcoming home for learning and growth.' },
  { src: '/photos/students-group.webp', title: 'Our Students', caption: 'A vibrant, close-knit community.' },
  { src: '/photos/science-lab.webp', title: 'Hands-On Science', caption: 'Practical learning in modern labs.' },
  { src: '/photos/cultural-function.webp', title: 'Cultural Sambhrama', caption: 'Celebrating talent and tradition.' },
  { src: '/photos/microscope-lab.webp', title: 'Research & Discovery', caption: 'Curiosity sparked in every class.' },
  { src: '/photos/community-group.webp', title: 'One Family', caption: 'Faculty and students, together.' },
]

const AUTOPLAY_MS = 4000

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const count = SLIDES.length
  const goTo = useCallback((i) => setIndex((i + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  // Auto-advance unless the user is hovering/interacting.
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg">
      <div className="mb-5 md:mb-8 text-center">
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-1">
          Campus Gallery
        </h2>
        <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
          A glimpse into life at Kayaka PU College.
        </p>
      </div>

      <div
        className="relative w-full rounded-xl overflow-hidden shadow-sm group aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] max-h-[68vh]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides */}
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden={i !== index}
          >
            <img src={slide.src} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-2xl">
              <h3 className="font-headline-lg text-headline-lg text-white mb-1 drop-shadow">{slide.title}</h3>
              <p className="font-body-lg text-body-lg text-white/90 drop-shadow">{slide.caption}</p>
            </div>
          </div>
        ))}

        {/* Prev / Next */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface/80 backdrop-blur-sm text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm"
        >
          <Icon name="chevron_left" className="text-2xl" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface/80 backdrop-blur-sm text-on-surface flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors shadow-sm"
        >
          <Icon name="chevron_right" className="text-2xl" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 right-6 flex items-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => goTo(i)}
            aria-label={`Show ${slide.title}`}
            className={`relative rounded-lg overflow-hidden aspect-[4/3] transition-all ${
              i === index ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img src={slide.src} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  )
}
