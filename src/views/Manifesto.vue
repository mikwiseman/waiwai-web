<template>
  <div class="manifesto-page">
    <div class="manifesto-container">
      <router-link
        to="/"
        class="back-link"
      >
        &larr; {{ backText }}
      </router-link>

      <h1 class="manifesto-title">
        {{ content.manifesto.title }}
      </h1>
      <p class="manifesto-intro">
        {{ content.manifesto.intro }}
      </p>
      <p class="manifesto-intro">
        {{ content.manifesto.introCompass }}
      </p>
      <ol class="manifesto-list">
        <li
          v-for="p in content.manifesto.principles"
          :key="p.number"
          class="manifesto-item"
        >
          <strong>{{ p.title }}</strong> {{ p.text }}
        </li>
      </ol>

      <div class="manifesto-footer">
        <a
          href="https://calendly.com/mikwiseman/hi"
          target="_blank"
          class="cta-button"
        >
          {{ content.hero.bookCall }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

export default defineComponent({
  name: 'ManifestoPage',
  setup() {
    const { locale, isRussian } = useLocale()
    const content = computed(() => getLocaleContent(locale.value, 'home'))

    const backText = computed(() => isRussian.value ? 'На главную' : 'Back to home')

    return {
      content,
      isRussian,
      backText
    }
  }
})
</script>

<style scoped>
.manifesto-page {
  min-height: 100vh;
  background-color: #fff;
  padding: 4rem 2rem;
}

.manifesto-container {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 2rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: #0f5bff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #0a47cc;
}

.manifesto-title {
  font-family: 'Roboto Mono', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 2rem;
}

.manifesto-intro {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 1.5rem;
}

.manifesto-list {
  list-style: none;
  counter-reset: manifesto-counter;
  padding: 0;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.manifesto-item {
  counter-increment: manifesto-counter;
  position: relative;
  padding-left: 3rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.6);
}

.manifesto-item::before {
  content: counter(manifesto-counter) ".";
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 600;
  color: #0f5bff;
  font-size: 1.2rem;
}

.manifesto-item strong {
  color: #111;
  font-weight: 600;
}

.manifesto-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(4, 26, 82, 0.1);
  text-align: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 999px;
  background: #0f5bff;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 12px rgba(15, 91, 255, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 91, 255, 0.3);
}

@media screen and (max-width: 767px) {
  .manifesto-page {
    padding: 2rem 1.5rem;
  }

  .manifesto-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .manifesto-intro {
    font-size: 1rem;
  }

  .manifesto-item {
    padding-left: 2.5rem;
    font-size: 0.95rem;
  }

  .manifesto-list {
    gap: 1.5rem;
  }
}
</style>
