import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const LINK_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About us', to: '/about' },
      { label: 'Academics', to: '/academics' },
      { label: 'Student Life', to: '/student-life' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Admissions', to: '/admissions' },
      { label: 'Courses', to: '/academics' },
      { label: 'Campus Life', to: '/student-life' },
      { label: 'Directory', to: '/academics' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact us', to: '/contact' },
      { label: 'Financial Aid', to: '/admissions' },
      { label: 'Visit Campus', to: '/contact' },
      { label: 'Careers', to: '/about' },
    ],
  },
]

const CONTACT = [
  { icon: 'location_on', text: 'Kesaratagi Road, Kotnur-D, Ring Road, Kalaburagi 585102' },
  { icon: 'call', text: '09686569898 · 8123439659' },
  { icon: 'mail', text: 'shivaraj.patil1@gmail.com' },
]

const SOCIALS = [
  { icon: 'public', label: 'Website', href: 'https://www.kayaka.net' },
  { icon: 'play_circle', label: 'YouTube', href: 'https://www.youtube.com/watch?v=U7mAZ7QfJ0k' },
]

const LEGAL = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Accessibility', to: '/accessibility' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-surface-container-highest dark:bg-surface-container-low text-on-surface dark:text-on-surface-variant font-body-md text-body-md w-full mt-xl border-t border-surface-variant">
      {/* Main footer body */}
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-8 py-lg md:py-xl">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-8 md:gap-10">
          {/* Brand + contact + socials */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="font-headline-md text-headline-md text-on-surface flex items-center gap-3 mb-4">
              <img
                src="/IMG_1587-removebg-preview.png"
                alt="Kayaka Foundation Education Trust logo"
                className="h-12 w-auto object-contain"
              />
              Kayaka PU College
            </Link>
            <p className="text-on-surface-variant max-w-xs mb-6">
              A residential PU College of Science &amp; Commerce under Kayaka Foundation Education Trust
              (R), Kalaburagi — where ambitious minds learn, grow, and excel.
            </p>
            <ul className="space-y-2 mb-6">
              {CONTACT.map((c) => (
                <li key={c.text} className="flex items-center gap-3 text-on-surface-variant">
                  <Icon name={c.icon} className="text-on-surface-variant text-base" />
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors border border-surface-variant"
                >
                  <Icon name={s.icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all">
                        <Icon name="chevron_right" className="text-sm" />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-on-surface-variant mb-4">Get campus news and event updates in your inbox.</p>
            {subscribed ? (
              <p className="flex items-center gap-2 text-secondary font-label-lg text-label-lg">
                <Icon name="check_circle" fill />
                You're subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-full border border-surface-variant bg-surface text-on-surface focus:border-primary focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-label-lg text-label-lg px-6 py-2.5 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors font-bold tracking-wide"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-variant">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-on-surface-variant text-body-sm">
            © 2026 Kayaka PU College. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            {LEGAL.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-on-surface-variant hover:text-primary transition-colors text-body-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Built-by watermark */}
      <div className="border-t border-surface-variant/60">
        <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-8 py-4 flex items-center justify-center">
          <a
            href="https://www.socialbuzzz18.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built by Social_buzzz18 — opens socialbuzzz18.in in a new tab"
            className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-body-sm"
          >
            <span>Built by</span>
            <img
              src="/photos/IMG_7199.PNG"
              alt="Social_buzzz18 logo"
              className="h-6 w-auto object-contain"
            />
            <span className="font-medium group-hover:underline">Social_buzzz18</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
