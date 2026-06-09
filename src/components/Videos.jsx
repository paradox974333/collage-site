import { useState } from 'react'
import Icon from './Icon.jsx'

// Real Kayaka Foundation event videos (YouTube).
const VIDEOS = [
  {
    id: 'U7mAZ7QfJ0k',
    poster: '/videos/U7mAZ7QfJ0k.jpg',
    title: 'Kayaka Foundation Annual Day',
    desc: 'Vaarshika Saanskrutika Sambhrama — our annual cultural celebration.',
  },
  {
    id: 'zq5rU7UPzrM',
    poster: '/videos/zq5rU7UPzrM.jpg',
    title: 'Kayaka Sambhrama — 13th Anniversary',
    desc: 'School & College anniversary by Kayaka Foundation Educational Institute.',
  },
]

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="rounded-2xl overflow-hidden bg-surface border border-surface-variant warm-shadow-hover transition-all">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Play ${video.title}`}
          >
            <img src={video.poster} alt={video.title} className="w-full h-full object-cover" />
            <span className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Icon name="play_arrow" fill className="text-4xl md:text-5xl" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{video.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{video.desc}</p>
      </div>
    </div>
  )
}

export default function Videos() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg">
      <div className="mb-5 md:mb-8 text-center">
        <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm rounded-full mb-3 uppercase tracking-wider">
          Watch
        </span>
        <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-1">
          Life at Kayaka, in Motion
        </h2>
        <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
          A look at our campus events and celebrations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {VIDEOS.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </section>
  )
}
