import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-xl text-center flex flex-col items-center">
      <Icon name="travel_explore" className="text-primary text-6xl mb-4" />
      <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-2">404</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
        We couldn't find that page. Let's get you back to familiar ground.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all warm-shadow-hover font-bold tracking-wide"
      >
        <Icon name="home" /> Back to Home
      </Link>
    </section>
  )
}
