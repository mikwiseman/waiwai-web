<template>
  <div class="jobs">
    <section class="jobs__list">
      <h1 class="jobs__title">
        {{ content.meta.title }}
      </h1>
      <div class="jobs__vacancies">
        <router-link
          v-for="vacancy in content.vacancies"
          :key="vacancy.slug"
          :to="{ name: 'job-vacancy', params: { slug: vacancy.slug } }"
          class="jobs-card"
        >
          <h3 class="jobs-card__title">
            {{ vacancy.title }}
          </h3>
          <span class="jobs-card__cta-link">
            {{ content.meta.learnMore }} →
          </span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

export default defineComponent({
  name: 'JobsPage',
  setup() {
    const { locale } = useLocale()
    const content = computed(() => getLocaleContent(locale.value, 'jobs'))

    return { content }
  }
})
</script>

<style scoped>
.jobs {
  padding: 8rem 2rem 4rem;
  background: #ffffff;
  min-height: 100vh;
  color: #111;
}

.jobs__list {
  max-width: 820px;
  margin: 0 auto;
}

.jobs__title {
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 2.5rem;
  color: #111;
}

.jobs__vacancies {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.jobs-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.jobs-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.jobs-card__title {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #111;
  line-height: 1.4;
}

.jobs-card__cta-link {
  align-self: flex-start;
  margin-top: auto;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0f5bff;
  font-weight: 600;
}

@media (max-width: 640px) {
  .jobs {
    padding: 7rem 1rem 3rem;
  }

  .jobs__vacancies {
    grid-template-columns: 1fr;
  }

  .jobs-card {
    padding: 1.5rem;
  }
}
</style>
