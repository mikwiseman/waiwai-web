<template>
  <div class="jobs">
    <section class="jobs__hero">
      <p class="jobs__badge">
        {{ content.meta.badge }}
      </p>
      <h1 class="jobs__title">
        {{ content.meta.title }}
      </h1>
      <div class="jobs__manifesto">
        <p
          v-for="(paragraph, i) in content.intro.paragraphs"
          :key="i"
          class="jobs__manifesto-p"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="jobs__section">
      <h2 class="jobs__heading">
        {{ content.products.heading }}
      </h2>
      <ul class="jobs__product-list">
        <li
          v-for="product in content.products.items"
          :key="product.name"
          class="jobs__product"
        >
          <strong>{{ product.name }}</strong> — {{ product.description }}
        </li>
      </ul>
      <p class="jobs__product-extra">
        {{ content.products.extra }}
      </p>
    </section>

    <section class="jobs__section jobs__section--wide">
      <div class="jobs__vacancies">
        <router-link
          v-for="vacancy in content.vacancies"
          :key="vacancy.slug"
          :to="{ name: 'job-vacancy', params: { slug: vacancy.slug } }"
          class="jobs-card"
        >
          <p class="jobs-card__badge">
            {{ vacancy.badge }}
          </p>
          <h3 class="jobs-card__title">
            {{ vacancy.title }}
          </h3>
          <p class="jobs-card__description">
            {{ vacancy.description }}
          </p>
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

.jobs__hero {
  max-width: 720px;
  margin: 0 auto 3rem;
  text-align: center;
}

.jobs__badge {
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0f5bff;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.jobs__title {
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 2.5rem;
  color: #111;
}

.jobs__manifesto {
  text-align: left;
}

.jobs__manifesto-p {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 1.5rem;
  white-space: pre-line;
}

.jobs__section {
  max-width: 720px;
  margin: 0 auto 3rem;
}

.jobs__section--wide {
  max-width: 960px;
}

.jobs__heading {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  color: #111;
}

.jobs__product-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
}

.jobs__product {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.jobs__product strong {
  color: #111;
}

.jobs__product-extra {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 0.75rem;
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

.jobs-card__badge {
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
  color: #0f5bff;
  margin: 0;
}

.jobs-card__title {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #111;
}

.jobs-card__description {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  white-space: pre-line;
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
