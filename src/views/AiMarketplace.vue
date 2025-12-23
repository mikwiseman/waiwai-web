<template>
  <div class="marketplace">
    <section class="marketplace__hero">
      <p class="marketplace__badge">
        AI Marketplace
      </p>
      <h1 class="marketplace__title">
        Agents for Sales, Hiring, Knowledge Search, and Content
      </h1>
      <p class="marketplace__description">
        Choose a ready-made agent or connect DeepWai and WaiWai bots to launch search and communication scenarios without development.
      </p>
    </section>

    <section class="marketplace__grid">
      <article
        v-for="agent in agents"
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
          Presentation
        </a>
      </article>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AiMarketplace',
  setup() {
    const agents = [
      {
        key: 'sales',
        title: 'WaiSales',
        description: 'Automates and boosts sales. Finds potential clients, initiates contact, and maintains dialogue until the deal closes. Improves conversion by learning from successful negotiations.',
        presentationLink: 'https://www.waiconnect.io/',
        stats: [
          { value: '46%', label: 'Sales funnel growth', id: 'sales-stat-0' },
          { value: '12', label: 'Demos per week', id: 'sales-stat-1' }
        ]
      },
      {
        key: 'hr',
        title: 'WaiHR',
        description: 'Based on a given profile, selects candidates, communicates with them, and conducts screening. Also sorts and processes incoming requests. Recruiters only need to choose the best.',
        presentationLink: 'https://www.waiconnect.io/',
        stats: [
          { value: '45%', label: 'Time-to-hire reduction', id: 'hr-stat-0' },
          { value: '180', label: 'Candidates in pipeline', id: 'hr-stat-1' }
        ]
      },
      {
        key: 'custom',
        title: 'WaiCustom',
        description: 'We develop AI agents tailored to corporate needs. We safely integrate solutions into business processes. We define KPIs, continuously improve agents, and take responsibility for their growing effectiveness.',
        stats: [
          { value: '10 days', label: 'Launch time', id: 'custom-stat-0' },
          { value: '9', label: 'Auto-scenarios launched', id: 'custom-stat-1' }
        ]
      },
      {
        key: 'training',
        title: 'WaiUni',
        description: 'We train corporate teams to work with AI: from basics to implementing smart assistants in business processes.',
        presentationLink: 'https://pitch.waiwai.diy/v/wowuni-8aptzr',
        stats: [
          { value: '6', label: 'Workshops conducted', id: 'training-stat-0' },
          { value: '4', label: 'Teams trained in AI', id: 'training-stat-1' }
        ]
      },
      {
        key: 'deepSearch',
        title: 'DeepWai',
        description: 'Deep search across Confluence, Notion, and company archives. Finds answers to complex questions and attaches verified sources.',
        presentationLink: 'https://deepwai.xyz/',
        stats: []
      },
      {
        key: 'summarizer',
        title: 'WaiSummarizer',
        description: 'Telegram bot for summarizing calls, chats, and documents. Returns insights and a list of next steps in a single message.',
        presentationLink: 'https://t.me/wairocks_bot',
        stats: []
      }
    ]

    return { agents }
  }
})
</script>

<style scoped>
.marketplace {
  padding: 8rem 2rem 4rem;
  background: var(--wai-hero-gradient, linear-gradient(180deg, #000000 0%, #050f2f 55%, #0f5bff 100%));
  min-height: 100vh;
  color: #fff;
}

.marketplace__hero {
  max-width: 960px;
  margin: 0 auto 3rem;
  text-align: center;
}

.marketplace__badge {
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--deep-blue-bright, #8fb2ff);
  margin-bottom: 1rem;
}

.marketplace__title {
  font-family: 'Inter Tight', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin: 0 0 1rem;
}

.marketplace__description {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--deep-blue-text-muted-override, rgba(214, 228, 255, 0.65));
}

.marketplace__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

.marketplace-card {
  background: var(--wai-panel-gradient, linear-gradient(155deg, rgba(1, 4, 12, 0.92) 0%, rgba(15, 91, 255, 0.6) 100%));
  border-radius: 1.75rem;
  padding: 2rem;
  border: 1px solid rgba(15, 91, 255, 0.35);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-height: 100%;
  box-shadow: 0 35px 80px rgba(3, 8, 24, 0.65);
}

.marketplace-card__header h2 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.marketplace-card__header p {
  margin: 0;
  color: var(--deep-blue-text-muted-override, rgba(214, 228, 255, 0.65));
}

.marketplace-card__stats {
  display: grid;
  gap: 1rem;
  margin: 0;
}

.marketplace-card__stat {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(214, 228, 255, 0.25);
  padding-top: 0.75rem;
}

.marketplace-card__stat dt {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--deep-blue-text-muted-override, rgba(214, 228, 255, 0.65));
}

.marketplace-card__stat dd {
  margin: 0;
  font-weight: 600;
}

.marketplace-card__cta {
  align-self: flex-start;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  font-family: 'Elmamono', 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  border: 1px solid rgba(15, 91, 255, 0.45);
  box-shadow: 0 20px 45px rgba(3, 8, 24, 0.5);
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
