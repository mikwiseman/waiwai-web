import { ref, computed } from 'vue'

const detectLocale = () => {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const hostname = window.location.hostname

  // Check for Russian subdomain
  if (hostname.startsWith('ru.')) {
    return 'ru'
  }

  // Development: allow locale override via query param (?locale=ru)
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    const params = new URLSearchParams(window.location.search)
    const localeParam = params.get('locale')
    if (localeParam === 'ru') {
      return 'ru'
    }
  }

  return 'en'
}

const currentLocale = ref(detectLocale())

export const useLocale = () => {
  const locale = computed(() => currentLocale.value)
  const isRussian = computed(() => currentLocale.value === 'ru')
  const isEnglish = computed(() => currentLocale.value === 'en')

  const getCanonicalUrl = (path = '') => {
    const baseUrl = currentLocale.value === 'ru'
      ? 'https://ru.waiwai.is'
      : 'https://waiwai.is'
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
