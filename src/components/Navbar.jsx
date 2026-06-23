import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Student Life', to: '/student-life' },
  { label: 'Contact us', to: '/contact' },
]

// Searchable content index — maps keywords to the page that answers them.
const SEARCH_INDEX = [
  { label: 'Home', to: '/', keywords: 'home campus life main hero' },
  { label: 'About us', to: '/about', keywords: 'about mission values history legacy journey vision' },
  { label: 'Academics', to: '/academics', keywords: 'academics programs colleges courses science arts commerce degree faculty labs' },
  { label: 'Admissions', to: '/admissions', keywords: 'admissions apply application fees deadline scholarship financial aid enroll' },
  { label: 'Student Life', to: '/student-life', keywords: 'student life clubs events gallery cultural sports activities organizations' },
  { label: 'Contact us', to: '/contact', keywords: 'contact address phone email map directions location kalaburagi' },
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // Live results: match the query against each page's label + keywords.
  const q = query.trim().toLowerCase()
  const results = q
    ? SEARCH_INDEX.filter(
        (item) =>
          item.label.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q),
      )
    : SEARCH_INDEX

  const openSearch = () => {
    setSearchOpen(true)
    setMenuOpen(false)
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setQuery('')
  }

  const goToResult = (to) => {
    navigate(to)
    closeSearch()
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (results.length > 0) goToResult(results[0].to)
  }

  // Focus the input when the search opens.
  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus()
  }, [searchOpen])

  // Close on outside click or Escape key.
  useEffect(() => {
    if (!searchOpen) return
    const onClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) closeSearch()
    }
    const onKey = (e) => {
      if (e.key === 'Escape') closeSearch()
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [searchOpen])

  // Track scroll position: hide on scroll-down / reveal on scroll-up, and note when at the top.
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setAtTop(y <= 8)
      if (y > lastY && y > 120) setHidden(true)
      else if (y < lastY) setHidden(false)
      if (y <= 8) setHidden(false)
      lastY = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Always keep the bar visible while a panel is open.
  const navHidden = hidden && !menuOpen && !searchOpen

  // On the home page, the bar is transparent over the hero until you scroll.
  const transparent = isHome && atTop && !menuOpen && !searchOpen

  const desktopLinkClass = ({ isActive }) =>
    transparent
      ? isActive
        ? 'text-white border-b-2 border-white pb-1'
        : 'text-white/85 hover:text-white transition-colors'
      : isActive
        ? 'text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1'
        : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors'

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? 'block px-margin-mobile py-3 text-primary font-bold bg-surface-container rounded-lg'
      : 'block px-margin-mobile py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-colors'

  return (
    <header
      className={`font-label-lg text-label-lg w-full top-0 z-50 fixed transition-all duration-300 ${
        navHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        transparent
          ? 'bg-gradient-to-b from-black/55 to-transparent'
          : 'bg-snow/80 backdrop-blur-xl border-b border-surface-variant'
      }`}
      id="main-nav"
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-8 py-4">
        {/* Brand */}
        <Link
          to="/"
          className={`font-headline-lg text-headline-lg font-bold flex items-center gap-3 group ${
            transparent ? 'text-white' : 'text-on-surface'
          }`}
        >
          <img
            src="/IMG_1587-removebg-preview.png"
            alt="Kayaka Foundation Education Trust logo"
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="hidden sm:inline">Kayaka PU College</span>
        </Link>

        {/* Right cluster: nav links + actions, pushed to the far right */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={openSearch}
              aria-label="Search"
              className={`transition-colors p-2 rounded-full ${
                transparent
                  ? 'text-white hover:bg-white/15'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              <Icon name="search" />
            </button>
            <Link
              to="/admissions"
              className="bg-primary text-on-primary font-label-lg px-6 py-3 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm min-h-[48px] font-bold tracking-wide flex items-center"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={openSearch}
            aria-label="Search"
            className={`p-2 ${transparent ? 'text-white' : 'text-on-surface-variant'}`}
          >
            <Icon name="search" />
          </button>
          <button
            className={`p-2 ${transparent ? 'text-white' : 'text-on-surface-variant'}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Search panel */}
      {searchOpen && (
        <div className="border-t border-surface-variant bg-surface-container-low" ref={searchRef}>
          <div className="w-full px-margin-mobile md:px-8 py-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Icon
                name="search"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the site… (e.g. admissions, academics, contact)"
                className="w-full pl-12 pr-12 py-3 rounded-full border border-surface-variant bg-surface text-on-surface focus:border-primary focus:ring-primary"
              />
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary p-1 rounded-full"
              >
                <Icon name="close" />
              </button>
            </form>

            {/* Results */}
            <ul className="mt-3 max-h-72 overflow-auto">
              {results.length > 0 ? (
                results.map((item) => (
                  <li key={item.to}>
                    <button
                      onClick={() => goToResult(item.to)}
                      className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-surface-container transition-colors"
                    >
                      <Icon name="arrow_forward" className="text-primary text-base" />
                      <span className="font-label-lg text-label-lg text-on-surface">{item.label}</span>
                    </button>
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-on-surface-variant font-body-md text-body-md">
                  No results for “{query}”.
                </li>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-surface-variant bg-surface-container-low pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="px-margin-mobile mt-3">
            <Link
              to="/admissions"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-primary text-on-primary font-label-lg px-6 py-3 rounded-full hover:bg-primary-container transition-colors font-bold tracking-wide"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
