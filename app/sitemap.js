const SITE = 'https://yorimiti.jp'
const routes = ['', '/services', '/works', '/pricing', '/graphic', '/graphic-service', '/about', '/moon', '/ayumi', '/news', '/contact']

export default function sitemap() {
  const now = new Date()
  return routes.map((r) => ({
    url: SITE + r,
    lastModified: now,
    changeFrequency: r === '/news' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : ['/services', '/works', '/pricing'].includes(r) ? 0.8 : 0.6,
  }))
}
