const getBlogIndexPath = (locale = 'en') => {
  return locale === 'ru' ? '/blog-ru/index.html' : '/blog/index.html'
}

const fallbackBaseUrl = 'https://example.com'

const deriveBlogPath = (rawPath = '', locale = 'en') => {
  if (!rawPath) {
    return { slug: '', path: '' }
  }

  const withoutQuery = rawPath.split('?')[0]
  const withoutIndex = withoutQuery.replace(/index\.html?$/i, '')
  const normalized = withoutIndex
    .replace(/\\+/g, '/')
    .replace(/\/+/g, '/')
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')

  const segments = normalized.split('/').filter(Boolean)

  if (segments.length === 0) {
    return { slug: '', path: '' }
  }

  // Handle both /blog/ and /blog-ru/ paths
  const blogIndex = segments.findIndex(s => s === 'blog' || s === 'blog-ru')
  const postSegments = blogIndex === -1 ? segments : segments.slice(blogIndex + 1)

  if (postSegments.length === 0) {
    return { slug: '', path: '' }
  }

  const slug = postSegments[postSegments.length - 1]
  const blogDir = locale === 'ru' ? 'blog-ru' : 'blog'
  const path = `/${blogDir}/${postSegments.join('/')}/`

  return { slug, path }
}

const parseHref = (href = '', locale = 'en') => {
  const trimmed = href.trim()

  if (!trimmed) {
    return { slug: '', path: '' }
  }

  try {
    const url = new URL(trimmed, fallbackBaseUrl)
    return deriveBlogPath(url.pathname, locale)
  } catch (error) {
    return deriveBlogPath(trimmed, locale)
  }
}

const parseArticle = (article, locale = 'en') => {
  if (!article) {
    return null
  }

  const titleAnchor = article.querySelector('h2 a')
  const descriptionElement = article.querySelector('p')
  const timeElement = article.querySelector('time')

  const sourceHref = titleAnchor?.getAttribute('href') ?? ''
  const { slug, path } = parseHref(sourceHref, locale)

  if (!slug || !path) {
    return null
  }

  const datetime = timeElement?.getAttribute('datetime') ?? ''
  const parsedDate = datetime ? new Date(datetime) : null

  return {
    title: titleAnchor?.textContent?.trim() ?? '',
    description: descriptionElement?.textContent?.trim() ?? '',
    datetime,
    date: parsedDate instanceof Date && !Number.isNaN(parsedDate.getTime()) ? parsedDate : null,
    slug,
    path,
    sourceHref
  }
}

export const fetchBlogPosts = async (locale = 'en') => {
  if (typeof window === 'undefined') {
    return []
  }

  const blogIndexPath = getBlogIndexPath(locale)
  const response = await fetch(blogIndexPath, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error(`Unable to load blog index (${response.status})`)
  }

  const html = await response.text()

  if (typeof DOMParser === 'undefined') {
    throw new Error('DOMParser is not available in this environment')
  }

  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const articles = Array.from(doc.querySelectorAll('section.cards article.card'))

  const posts = articles
    .map(article => parseArticle(article, locale))
    .filter((post) => post && post.title && post.path)

  posts.sort((a, b) => {
    const aTime = a?.date?.getTime() ?? 0
    const bTime = b?.date?.getTime() ?? 0
    return bTime - aTime
  })

  return posts
}

export const formatBlogDate = (date, locale = 'en') => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return ''
  }

  const localeCode = locale === 'ru' ? 'ru-RU' : 'en-US'

  return new Intl.DateTimeFormat(localeCode, {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date)
}
