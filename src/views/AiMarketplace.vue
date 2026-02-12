<template>
  <div class="marketplace">
    <section class="marketplace__hero">
      <p class="marketplace__badge">
        {{ content.hero.badge }}
      </p>
      <h1 class="marketplace__title">
        {{ content.hero.title }}
      </h1>
      <p class="marketplace__description">
        {{ content.hero.description }}
      </p>
    </section>

    <section class="marketplace__grid">
      <article
        v-for="agent in content.agents"
        :key="agent.key"
        class="marketplace-card"
      >
        <header class="marketplace-card__header">
          <h2>{{ agent.title }}</h2>
          <p>{{ agent.description }}</p>
        </header>
        <dl
          v-if="agent.stats.length"
          class="marketplace-card__stats"
        >
          <div
            v-for="stat in agent.stats"
            :key="stat.id"
            class="marketplace-card__stat"
          >
            <dt>{{ stat.label }}</dt>
            <dd>{{ stat.value }}</dd>
          </div>
        </dl>
        <a
          v-if="agent.presentationLink"
          :href="agent.presentationLink"
          target="_blank"
          rel="noopener noreferrer"
          class="marketplace-card__cta"
        >
          {{ content.buttons.presentation }}
        </a>
      </article>
    </section>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

export default defineComponent({
  name: 'AiMarketplace',
  setup() {
    const { locale } = useLocale()
    const content = computed(() => getLocaleContent(locale.value, 'marketplace'))

    return { content }
  }
})
</script>

<style scoped>
.marketplace {
  padding: 8rem 2rem 4rem;
  background: #ffffff;
  min-height: 100vh;
  color: #111;
}

.marketplace__hero {
  max-width: 960px;
  margin: 0 auto 3rem;
  text-align: center;
}

.marketplace__badge {
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0f5bff;
  margin-bottom: 1rem;
}

.marketplace__title {
  font-family: 'Roboto Mono', monospace;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
  color: #111;
}

.marketplace__description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.6);
}

.marketplace__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

.marketplace-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.marketplace-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.marketplace-card__header h2 {
  margin: 0 0 0.5rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
}

.marketplace-card__header p {
  margin: 0;
  color: rgba(0, 0, 0, 0.6);
}

.marketplace-card__stats {
  display: grid;
  gap: 1rem;
  margin: 0;
}

.marketplace-card__stat {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 0.75rem;
}

.marketplace-card__stat dt {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0, 0, 0, 0.45);
}

.marketplace-card__stat dd {
  margin: 0;
  font-weight: 600;
  color: #111;
}

.marketplace-card__cta {
  align-self: flex-start;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  background: #0f5bff;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 12px rgba(15, 91, 255, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.marketplace-card__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(15, 91, 255, 0.3);
}

@media (max-width: 640px) {
  .marketplace {
    padding: 7rem 1rem 3rem;
  }

  .marketplace-card {
    padding: 1.5rem;
  }
}
</style>
