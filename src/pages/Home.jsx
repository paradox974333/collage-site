import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import Carousel from '../components/Carousel.jsx'
import Achievements from '../components/Achievements.jsx'
import Videos from '../components/Videos.jsx'

// Modern campus imagery sourced from Unsplash, with local photos as fallbacks
// so a card never shows a broken image if the network/source is unavailable.
const BENTO = [
  {
    to: '/academics',
    badge: 'Science & Commerce',
    title: 'Modern Laboratories',
    text: 'Dedicated Physics, Chemistry, Biology and Computer labs for real, hands-on practicals.',
    span: 'md:col-span-8 md:row-span-2',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    fallback: '/photos/science-lab.webp',
  },
  {
    to: '/admissions',
    badge: 'Residential',
    title: 'Hostel & Boarding',
    text: 'Separate hostels for boys and girls, with long day-boarding facilities.',
    span: 'md:col-span-4',
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    fallback: '/photos/campus-building.webp',
  },
  {
    to: '/admissions',
    badge: 'Transport',
    title: 'Own Bus Fleet',
    text: 'Safe, convenient college buses with pick-up stops across Kalaburagi.',
    span: 'md:col-span-4',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    fallback: '/photos/campus-building.webp',
  },
  {
    to: '/student-life',
    badge: 'Community',
    title: 'A Close-Knit Family',
    text: 'Students from across Kalaburagi learn, celebrate, and grow together at Kayaka.',
    span: 'md:col-span-12',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80',
    fallback: '/photos/community-group.webp',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section — auto-moving carousel */}
      <HeroCarousel />

      {/* Achievements Carousel (Apple-style) */}
      <Achievements />

      {/* Bento Grid: Campus Life Highlights */}
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg reveal">
        <div className="mb-6 md:mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-1 md:mb-2">
              Life at Kayaka
            </h2>
            <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
              A community built for growth and energy.
            </p>
          </div>
          <Link
            to="/student-life"
            className="hidden md:flex items-center gap-1 font-label-lg text-label-lg text-primary hover:text-primary-container transition-colors group"
          >
            View All{' '}
            <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[215px]">
          {BENTO.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className={`${card.span} group relative rounded-2xl overflow-hidden warm-shadow-hover block`}
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = card.fallback
                }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-7 w-full">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary font-label-sm rounded-full mb-3 shadow-sm">
                  {card.badge}
                </span>
                <h3 className="font-headline-lg text-headline-lg text-white mb-1.5 drop-shadow">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-white/85 max-w-lg drop-shadow">
                  {card.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 font-label-lg text-label-lg text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Learn more <Icon name="arrow_forward" className="text-sm" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Carousel Gallery */}
      <Carousel />

      {/* Videos */}
      <Videos />

    </>
  )
}
