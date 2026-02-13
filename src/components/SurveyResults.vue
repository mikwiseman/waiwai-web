<template>
  <div class="survey-results">
    <div
      v-if="loading"
      class="results-loading"
    >
      {{ strings.loadingText }}
    </div>

    <div
      v-else-if="error"
      class="results-error"
    >
      {{ strings.errorText }}
    </div>

    <template v-else-if="data && data.totalResponses > 0">
      <div class="results-divider" />
      <h3 class="results-heading">
        {{ strings.heading }}
      </h3>
      <p class="results-subheading">
        {{ strings.subheading }}
        <span class="results-total">{{ data.totalResponses }} {{ strings.totalResponses }}</span>
      </p>

      <div class="results-grid">
        <div
          v-for="q in data.questions"
          :key="q.id"
          ref="cardRefs"
          class="result-card"
          :data-question-id="q.id"
        >
          <p class="result-question-text">
            {{ questionText(q.id) }}
          </p>
          <p class="result-answered">
            {{ q.answeredCount }} {{ strings.answeredLabel }}
          </p>
          <SurveyChart
            :question-id="q.id"
            :chart-type="chartTypeFor(q.id)"
            :labels="q.options.map(o => o.value)"
            :data="q.options.map(o => o.count)"
            :percentages="q.options.map(o => o.percentage)"
            :animate="visibleCards.has(q.id)"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'
import SurveyChart from './SurveyChart.vue'

const CHART_TYPES = {
  q1_ai_creation: 'horizontal-bar',
  q2_barrier: 'horizontal-bar',
  q3_it_resistance: 'doughnut',
  q4_dev_budgets: 'doughnut',
  q5_humanities: 'doughnut',
  q6_processes: 'horizontal-bar',
  q7_team_size: 'horizontal-bar',
  company_size: 'horizontal-bar',
}

export default defineComponent({
  name: 'SurveyResults',
  components: { SurveyChart },
  setup() {
    const { locale } = useLocale()
    const content = computed(() => getLocaleContent(locale.value, 'research'))
    const strings = computed(() => content.value.results || {})

    const data = ref(null)
    const loading = ref(true)
    const error = ref(false)
    const cardRefs = ref([])
    const visibleCards = ref(new Set())
    let observer = null

    const questionText = (id) => {
      const q = content.value.questions?.find((q) => q.id === id)
      return q ? q.text : id
    }

    const chartTypeFor = (id) => CHART_TYPES[id] || 'horizontal-bar'

    const fetchResults = async () => {
      loading.value = true
      error.value = false
      const response = await fetch('/api/survey/results')
      if (!response.ok) {
        error.value = true
        loading.value = false
        return
      }
      data.value = await response.json()
      loading.value = false

      await nextTick()
      setupObserver()
    }

    const setupObserver = () => {
      if (!window.IntersectionObserver) {
        // Mark all visible immediately if IntersectionObserver unavailable
        data.value?.questions.forEach((q) => {
          visibleCards.value.add(q.id)
        })
        visibleCards.value = new Set(visibleCards.value)
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.dataset.questionId
              if (id && !visibleCards.value.has(id)) {
                visibleCards.value.add(id)
                visibleCards.value = new Set(visibleCards.value)
                observer.unobserve(entry.target)
              }
            }
          })
        },
        { threshold: 0.2 }
      )

      if (cardRefs.value) {
        const els = Array.isArray(cardRefs.value) ? cardRefs.value : [cardRefs.value]
        els.forEach((el) => {
          if (el) observer.observe(el)
        })
      }
    }

    onMounted(() => {
      fetchResults()
    })

    onBeforeUnmount(() => {
      if (observer) observer.disconnect()
    })

    return { strings, data, loading, error, cardRefs, visibleCards, questionText, chartTypeFor }
  },
})
</script>

<style scoped>
.survey-results {
  width: 100%;
}

.results-loading,
.results-error {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  color: var(--text-secondary, rgba(0, 0, 0, 0.7));
  text-align: center;
  padding: var(--space-lg, 2rem) 0;
}

.results-divider {
  width: 100%;
  height: 1px;
  background: var(--border-light, rgba(4, 26, 82, 0.08));
  margin: var(--space-xl, 3rem) 0;
}

.results-heading {
  font-family: var(--font-heading, 'Inter Tight', sans-serif);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary, #000);
  margin: 0 0 0.5rem;
  text-align: center;
}

.results-subheading {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  color: var(--text-secondary, rgba(0, 0, 0, 0.7));
  margin: 0 0 var(--space-lg, 2rem);
  text-align: center;
  line-height: 1.6;
}

.results-total {
  display: inline-block;
  font-weight: 600;
  color: var(--color-accent, #0f5bff);
}

.results-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg, 2rem);
}

.result-card {
  background: var(--bg-primary, #fff);
  border: 1px solid var(--border-light, rgba(4, 26, 82, 0.08));
  border-radius: var(--radius-md, 1rem);
  padding: var(--space-md, 1.5rem) var(--space-lg, 2rem);
  text-align: left;
}

.result-question-text {
  font-family: var(--font-heading, 'Inter Tight', sans-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary, #000);
  margin: 0 0 0.25rem;
  line-height: 1.5;
}

.result-answered {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.8rem;
  color: var(--text-secondary, rgba(0, 0, 0, 0.5));
  margin: 0 0 var(--space-sm, 1rem);
}

@media screen and (max-width: 767px) {
  .results-heading {
    font-size: 1.25rem;
  }

  .result-card {
    padding: var(--space-sm, 1rem) var(--space-md, 1.5rem);
  }
}
</style>
