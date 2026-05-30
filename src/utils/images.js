export const imageSizes = {
  detailHero: '100vw',
  gallery: '(min-width: 1024px) 62vw, 100vw',
  cultureCard: '(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw',
  relatedCard: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
  qrPanel: '(min-width: 1024px) 40vw, 100vw',
}

export function getOptimizedSrcSet(src) {
  if (!src) return undefined

  if (src.endsWith('/logo-dm-96.webp')) {
    return '/images/optimized/logo-dm-96.webp 96w, /images/optimized/logo-dm-192.webp 192w'
  }

  const match = src.match(/^(.*)-1024\.webp$/)
  if (!match) return undefined

  return `${match[1]}-640.webp 640w, ${match[1]}-1024.webp 1024w`
}
