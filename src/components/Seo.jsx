import { useEffect } from 'react'

// Update this if the production domain changes.
const SITE_URL = 'https://www.kayaka.net'
const SITE_NAME = 'Kayaka PU College'
const DEFAULT_DESC =
  'Kayaka PU College, Kalaburagi — a residential Pre-University College of Science & Commerce with modern labs, hostel, transport and a 99% PUC result.'
const DEFAULT_IMAGE = `${SITE_URL}/photos/hero-banner.png`

function upsertMeta(attr, key, content) {
  if (content == null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-route SEO: title, description, canonical, Open Graph and Twitter cards.
 * Renders nothing — it just keeps document <head> in sync with the active route.
 */
export default function Seo({
  title,
  description = DEFAULT_DESC,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Science & Commerce PU College in Kalaburagi`
  const url = `${SITE_URL}${path}`

  useEffect(() => {
    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    upsertLink('canonical', url)

    // Open Graph
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:site_name', SITE_NAME)

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
  }, [fullTitle, description, url, image, type, noindex])

  return null
}
