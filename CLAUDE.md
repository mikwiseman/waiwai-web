# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WaiWai is a Vue 3 website. The site serves English content with hardcoded text and uses https://waiwai.is as the canonical domain.

## Commands

### Development
```bash
npm run serve       # Start development server
npm run build       # Build for production
npm run lint        # Lint and fix files
```

## Architecture

### Content
- All content is hardcoded in English within Vue components
- No internationalization (i18n) system - single language only

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

### Build Configuration
- **vue.config.js**: Configures webpack settings
- PWA icon paths configured for various devices

## Key Files

- [src/main.js](src/main.js) - App entry point, initializes router and head management
- [src/App.vue](src/App.vue) - Root component with meta tags and Luxy.js initialization
- [src/router/index.js](src/router/index.js) - Vue Router configuration with presentation redirects
- [vue.config.js](vue.config.js) - Vue CLI configuration
