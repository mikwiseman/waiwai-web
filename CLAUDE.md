# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WaiWai is a Vue 3 bilingual website (Russian + English). Russian is the default language. The canonical domain is https://waiwai.is.

## Commands

### Development
```bash
npm run serve       # Start development server
npm run build       # Build for production (includes pre-rendering)
npm run lint        # Lint and fix files
```

## Deployment

### Platform: Coolify (self-hosted)

The site is deployed via **Coolify** as a static site with a build step. Vercel is NOT used (see `vercel.json` — `buildCommand: null`).

### Build Pipeline

1. Coolify triggers a build on push to `main`
2. Runs `npm install` (installs Puppeteer + Chrome for pre-rendering)
3. Runs `npm run build` which:
   - Compiles Vue 3 app via webpack (Vue CLI)
   - **Pre-renders** routes `/`, `/blog`, `/ai-marketplace` using `@prerenderer/webpack-plugin` + Puppeteer
   - Outputs static files to `dist/`
4. Coolify serves `dist/` as static files

### Pre-rendering ([vue.config.js](vue.config.js))

- Uses `@prerenderer/webpack-plugin` with `@prerenderer/renderer-puppeteer`
- Pre-rendered routes: `/`, `/blog`, `/ai-marketplace`
- Puppeteer waits 5 seconds (`renderAfterTime: 5000`) for Vue to hydrate before capturing HTML
- Adds `data-server-rendered="true"` to `<div id="app">`
- Only runs in production (`NODE_ENV === 'production'`)
- **Requires Puppeteer/Chrome on the build server** — this is why Vercel builds were abandoned (Puppeteer unavailable there)

### Critical: Why changes may not appear after deploy

- `dist/` is in `.gitignore` — it is NOT committed to git
- Coolify MUST run `npm run build` to generate fresh `dist/` output
- If Coolify is configured as "static site" without a build command, it will not rebuild and changes won't apply
- If Puppeteer fails during pre-rendering (missing Chrome deps), the build may fail or produce stale HTML
- Ensure Coolify build settings include: **Build Command**: `npm run build`, **Output Directory**: `dist`

## Architecture

### Internationalization (i18n)
- Custom locale system in [src/locales/](src/locales/) with `en/` and `ru/` subdirectories
- Each locale has modules: `home.js`, `toolbar.js`, `app.js`, `blog.js`, `marketplace.js`
- Locale loading: [src/locales/index.js](src/locales/index.js) — `getLocaleContent(locale, namespace)`
- Locale composable: [src/composables/useLocale.js](src/composables/useLocale.js) — provides `locale` and `isRussian`
- Russian-only sections use `v-if="isRussian"` (manifesto, FAQ, cases, grant support)
- Default language: Russian (set in `public/index.html` `lang="ru"`)

### Meta Tags & SEO
- **Dynamic Meta Tags**: [src/App.vue](src/App.vue) uses `@vueuse/head` to set meta tags
- Meta tags include title, description, keywords, Open Graph, and Twitter Card data
- Canonical URL: https://waiwai.is

### Routing
- **Router**: [src/router/index.js](src/router/index.js) uses Vue Router 4 with `createWebHistory`
- Routes:
  - `/` → [Home.vue](src/views/Home.vue)
  - `/blog` → [Blog.vue](src/views/Blog.vue)
  - `/ai-marketplace` → [AiMarketplace.vue](src/views/AiMarketplace.vue)
  - Presentation redirects: `/sales`, `/hr`, `/agents`, `/trinity`, `/waiuni`

### External Integrations
- **Luxy.js**: Smooth scrolling library initialized in [App.vue](src/App.vue), disabled on mobile devices

### Styling
- Uses Webflow-exported CSS located in [src/assets/css/](src/assets/css/)
- Main stylesheets: `normalize.css`, `webflow.css`, `waiwaidiy.webflow.css`, `deep-blue-overrides.css`
- Component styles use scoped CSS with `Inter Tight`, `Roboto Mono`, and `Inter` font families

### Build Configuration
- **[vue.config.js](vue.config.js)**: Configures webpack + pre-rendering (see Deployment section above)
- PWA icon paths configured for various devices
- Pre-existing lint errors in `vue.config.js` (unused `path` import and `config` parameter) — these are not blockers

## Key Files

- [src/main.js](src/main.js) - App entry point, initializes router and head management
- [src/App.vue](src/App.vue) - Root component with meta tags and Luxy.js initialization
- [src/router/index.js](src/router/index.js) - Vue Router configuration with presentation redirects
- [vue.config.js](vue.config.js) - Vue CLI + pre-rendering configuration
- [src/locales/index.js](src/locales/index.js) - Locale content loader
- [src/composables/useLocale.js](src/composables/useLocale.js) - Locale detection composable
