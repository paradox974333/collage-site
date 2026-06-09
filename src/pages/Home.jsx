import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import Carousel from '../components/Carousel.jsx'
import Achievements from '../components/Achievements.jsx'
import Videos from '../components/Videos.jsx'

const HUB_IMG = '/photos/science-lab.webp'
const QUAD_IMG = '/photos/students-group.webp'

export default function Home() {
  return (
    <>
      {/* Hero Section — auto-moving carousel */}
      <HeroCarousel />

      {/* Achievements Carousel (Apple-style) */}
      <Achievements />

      {/* Bento Grid: Campus Life Highlights */}
      <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg">
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[260px] md:auto-rows-[320px]">
          {/* Highlight 1: Large */}
          <div className="md:col-span-8 rounded-xl overflow-hidden relative group warm-shadow-hover transition-all bg-surface-container-low border border-surface-variant">
            <img
              alt="Kayaka PU College students conducting a hands-on physics experiment in the lab."
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90"
              src={HUB_IMG}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-variant/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm text-primary font-label-sm rounded-full mb-3 shadow-sm">
                Science & Commerce
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 drop-shadow-sm">
                Modern Laboratories
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg drop-shadow-sm">
                Dedicated Physics, Chemistry, Biology and Computer labs for real, hands-on practicals.
              </p>
            </div>
          </div>

          {/* Highlight 2: Small */}
          <div className="md:col-span-4 rounded-xl overflow-hidden relative group warm-shadow-hover transition-all bg-surface-container border border-surface-variant p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <Icon name="hotel" fill />
              </div>
              <span className="inline-block px-3 py-1 bg-surface text-secondary font-label-sm rounded-full shadow-sm border border-surface-variant">
                Residential
              </span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Hostel & Boarding</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Separate hostels for boys and girls, with long day-boarding facilities.
              </p>
              <Link
                to="/admissions"
                className="font-label-lg text-label-lg text-primary hover:underline flex items-center gap-1"
              >
                Learn more <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Highlight 3: Small */}
          <div className="md:col-span-4 rounded-xl overflow-hidden relative group warm-shadow-hover transition-all bg-tertiary-fixed border border-outline-variant p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-on-tertiary-container">
                <Icon name="directions_bus" fill />
              </div>
              <span className="inline-block px-3 py-1 bg-white/50 text-tertiary font-label-sm rounded-full shadow-sm">
                Transport
              </span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-tertiary-container mb-2">
                Own Bus Fleet
              </h3>
              <p className="font-body-md text-body-md text-on-tertiary-container/80 mb-4">
                Safe, convenient college buses with pick-up stops across Kalaburagi.
              </p>
              <Link
                to="/admissions"
                className="font-label-lg text-label-lg text-tertiary hover:underline flex items-center gap-1"
              >
                View Facilities <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Highlight 4: Medium/Wide */}
          <div className="md:col-span-8 rounded-xl overflow-hidden relative group warm-shadow-hover transition-all bg-surface-container-low border border-surface-variant">
            <img
              alt="Kayaka PU College students gathered together on the campus steps."
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90"
              src={QUAD_IMG}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-variant/90 via-surface-variant/40 to-transparent"></div>
            <div className="absolute top-0 left-0 h-full flex flex-col justify-center p-6 md:p-8 w-full md:w-2/3">
              <span className="inline-block px-3 py-1 w-max bg-white/80 backdrop-blur-sm text-primary font-label-sm rounded-full mb-3 shadow-sm">
                Community
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2 drop-shadow-sm">
                A Close-Knit Family
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 drop-shadow-sm max-w-md">
                Students from across Kalaburagi learn, celebrate, and grow together at Kayaka.
              </p>
              <Link
                to="/student-life"
                className="w-max bg-surface text-primary font-label-lg text-label-lg px-6 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-colors shadow-sm font-bold tracking-wide border border-primary/20"
              >
                Explore Student Life
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Gallery */}
      <Carousel />

      {/* Videos */}
      <Videos />

      {/* Stats / Progress Bar Section */}
      <section className="w-full bg-surface-container-low py-lg md:py-xl mt-lg">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                value: '99%',
                title: 'PUC Result',
                width: '99%',
                note: 'Science & Commerce results in 2015–16.',
              },
              {
                value: '85',
                title: 'First Class Students',
                width: '80%',
                note: 'Plus 11 distinctions out of 107 students.',
              },
              {
                value: '98%',
                title: 'SSLC Result',
                width: '98%',
                note: '21 distinctions across the high school.',
              },
            ].map((stat) => (
              <div
                key={stat.title}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <span className="font-display-lg text-display-lg text-primary mb-2">{stat.value}</span>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-4">{stat.title}</h4>
                <div className="w-full h-2 bg-secondary-fixed rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: stat.width }}></div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
