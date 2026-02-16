import * as enHome from './en/home'
import * as enToolbar from './en/toolbar'
import * as enApp from './en/app'
import * as enBlog from './en/blog'
import * as enMarketplace from './en/marketplace'
import * as enResearch from './en/research'

import * as ruHome from './ru/home'
import * as ruToolbar from './ru/toolbar'
import * as ruApp from './ru/app'
import * as ruBlog from './ru/blog'
import * as ruMarketplace from './ru/marketplace'
import * as ruResearch from './ru/research'

const locales = {
  en: {
    home: enHome,
    toolbar: enToolbar,
    app: enApp,
    blog: enBlog,
    marketplace: enMarketplace,
    research: enResearch
  },
  ru: {
    home: ruHome,
    toolbar: ruToolbar,
    app: ruApp,
    blog: ruBlog,
    marketplace: ruMarketplace,
    research: ruResearch
  }
}

export const getLocaleContent = (locale, namespace) => {
  const content = locales[locale]?.[namespace]
  if (!content) {
    // Fallback to English if locale or namespace not found
    return locales.en[namespace] || {}
  }
  return content
}

export const getContent = (locale) => {
  return locales[locale] || locales.en
}
