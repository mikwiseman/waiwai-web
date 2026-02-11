<template>
  <header class="site-toolbar">
    <div class="site-toolbar__inner">
      <div class="site-toolbar__brand">
        <img
          :src="logo"
          class="site-toolbar__logo"
          alt="WaiWai"
        >
        <span class="site-toolbar__brand-text">WaiWai × Trinity Monsters</span>
      </div>
      <nav
        class="site-toolbar__nav"
        aria-label="Primary"
      >
        <router-link
          v-for="item in localizedNavItems"
          :key="item.key"
          :to="item.to"
          class="site-toolbar__link"
        >
          {{ item.label }}
        </router-link>
      </nav>
      <a
        class="site-toolbar__cta"
        href="https://calendly.com/mikwiseman/hi"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ content.cta }}
      </a>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

const logo = new URL('../assets/images/logo_01.svg', import.meta.url).href

export default {
  name: 'SiteToolbar',
  setup() {
    const { locale } = useLocale()

    const content = computed(() => getLocaleContent(locale.value, 'toolbar'))

    const routes = {
      home: { name: 'home', hash: '#home' },
      howItWorks: { name: 'home', hash: '#how-it-works' },
      cases: { name: 'home', hash: '#cases' },
      about: { name: 'home', hash: '#about' },
      media: { name: 'home', hash: '#media' },
      blog: { name: 'home', hash: '#blog' }
    }

    const localizedNavItems = computed(() =>
      content.value.navItems.map(item => ({
        ...item,
        to: routes[item.key]
      }))
    )

    return { content, localizedNavItems, logo }
  }
}
</script>

<style scoped>
.site-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
}

.site-toolbar__inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 2.5rem;
}

.site-toolbar__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.site-toolbar__logo {
  height: 30px;
  width: auto;
}

.site-toolbar__brand-text {
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(214, 228, 255, 0.9);
  white-space: nowrap;
}

.site-toolbar__nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  text-transform: uppercase;
}

.site-toolbar__link {
  color: rgba(214, 228, 255, 0.78);
  font-size: 0.92rem;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: color 0.2s ease;
}

.site-toolbar__link:hover,
.site-toolbar__link:focus-visible {
  color: var(--deep-blue-bright);
}

/* Only highlight active when on non-home pages */
.site-toolbar__link.router-link-exact-active:not([href^="/#"]) {
  color: var(--deep-blue-bright);
}

.site-toolbar__cta {
  margin-left: 0;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  text-transform: uppercase;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  border: 1px solid rgba(15, 91, 255, 0.45);
  box-shadow: 0 12px 32px rgba(5, 16, 59, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.site-toolbar__cta:hover,
.site-toolbar__cta:focus-visible {
  transform: translateY(-1px);
  box-shadow: 0 16px 40px rgba(5, 16, 59, 0.6);
}

@media (max-width: 1024px) {
  .site-toolbar__inner {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .site-toolbar__brand {
    flex: 0 0 auto;
  }

  .site-toolbar__nav {
    flex: 1 1 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    order: 2;
  }

  .site-toolbar__cta {
    order: 1;
  }
}

@media (max-width: 600px) {
  .site-toolbar__inner {
    padding: 0.75rem 1rem;
  }

  .site-toolbar__brand-text {
    display: none;
  }

  .site-toolbar__logo {
    height: 24px;
  }

  .site-toolbar__nav {
    font-size: 0.78rem;
    gap: 0.75rem;
  }

  .site-toolbar__cta {
    width: 100%;
  }
}
</style>
