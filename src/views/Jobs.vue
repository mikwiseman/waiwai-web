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

    <section class="jobs__section">
      <h2 class="jobs__heading">
        {{ content.qualities.heading }}
      </h2>
      <ul class="jobs__qualities">
        <li
          v-for="(quality, i) in content.qualities.items"
          :key="i"
          class="jobs__quality"
        >
          {{ quality }}
        </li>
      </ul>
    </section>

    <section class="jobs__section jobs__section--wide">
      <div class="jobs__vacancies">
        <article
          v-for="vacancy in content.vacancies"
          :key="vacancy.title"
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
          <ul class="jobs-card__responsibilities">
            <li
              v-for="(item, i) in vacancy.responsibilities"
              :key="i"
            >
              {{ item }}
            </li>
          </ul>
          <template v-if="vacancy.conditions">
            <p class="jobs-card__conditions-heading">{{ vacancy.conditionsHeading }}</p>
            <ul class="jobs-card__conditions">
              <li v-for="(item, i) in vacancy.conditions" :key="i">{{ item }}</li>
            </ul>
          </template>
          <a
            :href="content.footer.telegramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="jobs-card__cta"
          >
            {{ vacancy.cta }}
          </a>
        </article>
      </div>
    </section>

    <section class="jobs__section jobs__section--wide">
      <h2 class="jobs__heading">
        {{ content.offer.heading }}
      </h2>
      <div class="jobs__offer-grid">
        <div
          v-for="item in content.offer.items"
          :key="item.title"
          class="jobs__offer-tile"
        >
          <h3 class="jobs__offer-title">
            {{ item.title }}
          </h3>
          <p class="jobs__offer-desc">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="jobs__footer">
      <p class="jobs__footer-text">
        {{ content.footer.contact }}
      </p>
      <p class="jobs__footer-text jobs__footer-text--muted">
        {{ content.footer.referral }}
      </p>
      <p class="jobs__footer-deadline">
        {{ content.footer.deadline }}
      </p>
      <a
        :href="content.footer.telegramUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="jobs__footer-cta"
      >
        {{ content.footer.cta }}
      </a>
      <a
        :href="content.footer.siteUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="jobs__footer-site"
      >
        mikwiseman.com
      </a>
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

.jobs__qualities {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.jobs__quality {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;
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
}

.jobs-card__responsibilities {
  list-style: none;
  padding: 0;
  margin: 0;
}

.jobs-card__responsibilities li {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  padding: 0.35rem 0;
  padding-left: 1rem;
  position: relative;
}

.jobs-card__responsibilities li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: rgba(0, 0, 0, 0.3);
}

.jobs-card__cta {
  align-self: flex-start;
  margin-top: auto;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  background: #0f5bff;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 12px rgba(15, 91, 255, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.jobs-card__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(15, 91, 255, 0.3);
}

.jobs__offer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.jobs__offer-tile {
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.jobs__offer-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.jobs__offer-title {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #111;
}

.jobs__offer-desc {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
}

.jobs__footer {
  max-width: 720px;
  margin: 2rem auto 0;
  text-align: center;
  padding-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.jobs__footer-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 1rem;
}

.jobs__footer-text--muted {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.45);
}

.jobs__footer-deadline {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111;
  margin: 1.5rem 0;
}

.jobs__footer-cta {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #0f5bff, #3b7dff);
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 16px rgba(15, 91, 255, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.jobs__footer-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(15, 91, 255, 0.4);
}

.jobs__footer-site {
  display: block;
  margin-top: 1rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s ease;
}

.jobs__footer-site:hover {
  color: rgba(0, 0, 0, 0.7);
}

.jobs-card__conditions-heading {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0, 0, 0, 0.4);
  margin: 0 0 0.5rem;
}

.jobs-card__conditions {
  list-style: none;
  padding: 0;
  margin: 0;
}

.jobs-card__conditions li {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  padding: 0.35rem 0;
  padding-left: 1rem;
  position: relative;
}

.jobs-card__conditions li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 640px) {
  .jobs {
    padding: 7rem 1rem 3rem;
  }

  .jobs__qualities {
    grid-template-columns: 1fr;
  }

  .jobs__vacancies {
    grid-template-columns: 1fr;
  }

  .jobs__offer-grid {
    grid-template-columns: 1fr;
  }

  .jobs-card {
    padding: 1.5rem;
  }
}
</style>
