<template>
  <div class="vacancy-page">
    <template v-if="vacancy">
      <div class="vacancy__back">
        <router-link
          to="/jobs"
          class="vacancy__back-link"
        >
          ← {{ content.meta.backToJobs }}
        </router-link>
      </div>

      <article class="vacancy__card">
        <h1 class="vacancy__title">
          {{ vacancy.title }}
        </h1>
        <p
          v-for="(paragraph, i) in vacancy.paragraphs"
          :key="i"
          class="vacancy__paragraph"
        >
          {{ paragraph }}
        </p>

        <div class="vacancy__cta-block">
          <a
            :href="content.footer.telegramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="vacancy__cta"
          >
            {{ vacancy.cta }}
          </a>
          <p class="vacancy__deadline">
            {{ vacancy.deadline }}
          </p>
          <p class="vacancy__contact">
            {{ content.footer.contact }}
          </p>
          <p class="vacancy__referral">
            {{ content.footer.referral }}
          </p>
        </div>
      </article>

      <section class="vacancy__about">
        <h2 class="vacancy__about-heading">
          {{ content.about.heading }}
        </h2>
        <p class="vacancy__about-text">
          {{ content.about.text }}
        </p>
        <router-link
          :to="content.about.linkUrl"
          class="vacancy__about-link"
        >
          {{ content.about.linkText }} →
        </router-link>
      </section>
    </template>

    <template v-else>
      <div class="vacancy__not-found">
        <h1 class="vacancy__title">
          {{ content.meta.notFoundTitle }}
        </h1>
        <p class="vacancy__paragraph">
          {{ content.meta.notFoundText }}
        </p>
        <router-link
          to="/jobs"
          class="vacancy__back-link"
        >
          ← {{ content.meta.backToJobs }}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

export default defineComponent({
  name: 'JobVacancyPage',
  setup() {
    const route = useRoute()
    const { locale } = useLocale()
    const content = computed(() => getLocaleContent(locale.value, 'jobs'))

    const vacancy = computed(() => {
      const slug = route.params.slug
      return content.value.vacancies.find(v => v.slug === slug)
    })

    return { content, vacancy }
  }
})
</script>

<style scoped>
.vacancy-page {
  padding: 8rem 2rem 4rem;
  background: #ffffff;
  min-height: 100vh;
  color: #111;
}

.vacancy__back {
  max-width: 820px;
  margin: 0 auto 2rem;
}

.vacancy__back-link {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  color: #0f5bff;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: opacity 0.2s ease;
}

.vacancy__back-link:hover {
  opacity: 0.7;
}

.vacancy__card {
  max-width: 820px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 1.5rem;
  padding: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.vacancy__title {
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 2.5rem;
  color: #111;
  line-height: 1.3;
}

.vacancy__paragraph {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 1.5rem;
  white-space: pre-line;
}

.vacancy__cta-block {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.vacancy__cta {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #0f5bff, #3b7dff);
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 16px rgba(15, 91, 255, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.vacancy__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(15, 91, 255, 0.4);
}

.vacancy__deadline {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111;
  margin: 1.5rem 0 1rem;
}

.vacancy__contact {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 0.75rem;
  white-space: pre-line;
}

.vacancy__referral {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.45);
  margin: 0;
  white-space: pre-line;
}

.vacancy__about {
  max-width: 820px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.vacancy__about-heading {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: #111;
}

.vacancy__about-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 1rem;
}

.vacancy__about-link {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  color: #0f5bff;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: opacity 0.2s ease;
}

.vacancy__about-link:hover {
  opacity: 0.7;
}

.vacancy__not-found {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 640px) {
  .vacancy-page {
    padding: 7rem 1rem 3rem;
  }

  .vacancy__card {
    padding: 1.5rem;
    border-radius: 1rem;
  }
}
</style>
