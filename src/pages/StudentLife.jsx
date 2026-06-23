import PageHeader from '../components/PageHeader.jsx'
import Icon from '../components/Icon.jsx'

const FEATURE_IMG = '/photos/cultural-function.webp'

const GALLERY = [
  { src: '/photos/cultural-stage.webp', caption: 'Annual Cultural Sambhrama' },
  { src: '/photos/costumes-group.webp', caption: 'Mythological Drama Troupe' },
  { src: '/photos/costumes-students.webp', caption: 'Costume & Theatre' },
]

const ORGS = [
  { icon: 'theater_comedy', title: 'Arts & Culture', text: 'Drama, dance and music at our annual Kayaka Sambhrama.' },
  { icon: 'sports_cricket', title: 'Sports', text: 'Sports academy, gymnasium and a swimming pool for fitness.' },
  { icon: 'military_tech', title: 'NCC, Scouts & Guides', text: 'Discipline, leadership and service through uniformed programs.' },
  { icon: 'science', title: 'Science Exhibitions', text: 'Project displays, seminars and hands-on lab activities.' },
  { icon: 'self_improvement', title: 'Yoga & Wellness', text: 'Daily yoga and aerobics to keep students healthy and focused.' },
  { icon: 'hotel', title: 'Residential Life', text: 'Separate hostels for boys and girls with caring wardens.' },
]

const EVENTS = [
  { date: 'Jun', title: 'New Academic Year Begins', place: 'Kesaratagi Road Campus' },
  { date: 'Aug', title: 'Independence Day Celebration', place: 'College Ground' },
  { date: 'Jan', title: 'Kayaka Sambhrama — Annual Day', place: 'Open-air Stage' },
  { date: 'Feb', title: 'Science Exhibition & Seminars', place: 'Laboratories' },
]

export default function StudentLife() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        icon="diversity_3"
        title="Find Your People."
        subtitle="From the quad to the clubs, life at Kayaka is vibrant, welcoming, and always buzzing with energy."
      />

      {/* Feature image */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl">
        <div className="relative rounded-xl overflow-hidden min-h-[420px] flex items-end warm-shadow group">
          <img
            alt="Kayaka PU College students performing at the annual cultural function"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src={FEATURE_IMG}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="relative z-10 p-6 md:p-8 max-w-xl">
            <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-white mb-2 drop-shadow">
              A Home Away From Home
            </h2>
            <p className="font-body-lg text-body-lg text-white/90 drop-shadow">
              A residential campus with hostels, transport, and long day-boarding — designed to turn
              classmates into lifelong friends.
            </p>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pb-lg reveal">
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-2">Activities & Facilities</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Beyond the classroom — where students grow in every direction.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORGS.map((o) => (
            <div
              key={o.title}
              className="bg-surface rounded-xl border border-surface-variant p-6 warm-shadow-hover transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <Icon name={o.icon} fill />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{o.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="bg-surface-container-low py-lg md:py-xl">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-6 md:mb-12">Upcoming Events</h2>
          <div className="space-y-4">
            {EVENTS.map((e) => (
              <div
                key={e.title}
                className="flex items-center gap-6 bg-surface rounded-xl border border-surface-variant p-5 warm-shadow-hover transition-all"
              >
                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-primary text-on-primary shrink-0">
                  <span className="font-label-sm text-label-sm uppercase">{e.date.split(' ')[0]}</span>
                  <span className="font-headline-md text-headline-md leading-none">{e.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{e.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
                    <Icon name="location_on" className="text-sm text-primary" />
                    {e.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-lg md:py-xl reveal">
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-2">Campus Gallery</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Moments from our cultural functions and student activities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY.map((g) => (
            <div
              key={g.src}
              className="relative rounded-xl overflow-hidden group warm-shadow-hover transition-all min-h-[260px]"
            >
              <img
                alt={g.caption}
                src={g.src}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 right-4 font-label-lg text-label-lg text-white drop-shadow">
                {g.caption}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
