import { useEffect } from 'react'
import site from '../data/site'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function absoluteUrl(path) {
  if (!path) return undefined
  if (/^https?:\/\//.test(path)) return path
  const origin = typeof window !== 'undefined' ? window.location.origin : site.url
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

function SEO({
  title = site.title,
  description = site.description,
  path = '/',
  image = site.defaultImage,
  type = 'website',
  noindex = false,
}) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)

    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex,nofollow' : 'index,follow',
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: site.name,
    })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: site.locale })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })
  }, [description, image, noindex, path, title, type])

  return null
}

export default SEO
