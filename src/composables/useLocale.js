import { ref, computed } from 'vue'

const detectLocale = () => {
  if (typeof window === 'undefined') {
    return 'ru'
  }

  const hostname = window.location.hostname

  // Check for English subdomain
  if (hostname.startsWith('en.')) {
    return 'en'
  }

  // Development: allow locale override via query param (?locale=en)
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    const params = new URLSearchParams(window.location.search)
    const localeParam = params.get('locale')
    if (localeParam === 'en') {
      return 'en'
    }
  }

  return 'ru'
}

const currentLocale = ref(detectLocale())

export const useLocale = () => {
  const locale = computed(() => currentLocale.value)
  const isRussian = computed(() => currentLocale.value === 'ru')
  const isEnglish = computed(() => currentLocale.value === 'en')

  const getCanonicalUrl = (path = '') => {
    const baseUrl = currentLocale.value === 'ru'
      ? 'https://waiwai.is'
      : 'https://en.waiwai.is'
    return `${baseUrl}${path}`
  }

  const getBlogPath = () => {
    return currentLocale.value === 'ru' ? '/blog-ru' : '/blog'
  }

  return {
    locale,
    isRussian,
    isEnglish,
    getCanonicalUrl,
    getBlogPath
  }
}
