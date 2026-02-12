<template>
  <div class="research-page">
    <div class="research-container">
      <router-link
        to="/"
        class="back-link"
      >
        &larr; {{ content.page.backLink }}
      </router-link>

      <template v-if="!submitted">
        <h1 class="research-title">
          {{ content.page.title }}
        </h1>
        <p class="research-hypothesis">
          {{ content.page.hypothesis }}
        </p>

        <form
          class="survey-form"
          @submit.prevent="handleSubmit"
        >
          <div
            v-for="(q, idx) in content.questions"
            :key="q.id"
            class="question-card"
          >
            <p class="question-text">
              <span class="question-number">{{ idx + 1 }}.</span>
              {{ q.text }}
              <span
                v-if="q.required"
                class="required-mark"
              >{{ content.page.requiredMark }}</span>
            </p>

            <div
              v-if="q.type === 'radio' && q.options"
              class="options-list"
            >
              <label
                v-for="option in q.options"
                :key="option"
                class="radio-label"
                :class="{ selected: answers[q.id] === option }"
              >
                <input
                  v-model="answers[q.id]"
                  type="radio"
                  :name="q.id"
                  :value="option"
                  class="radio-input"
                >
                <span class="radio-circle" />
                <span class="radio-text">{{ option }}</span>
              </label>

              <label
                v-if="q.hasOther"
                class="radio-label"
                :class="{ selected: answers[q.id] === '__other__' }"
              >
                <input
                  v-model="answers[q.id]"
                  type="radio"
                  :name="q.id"
                  value="__other__"
                  class="radio-input"
                >
                <span class="radio-circle" />
                <span class="radio-text other-text-wrapper">
                  <span>Другое:</span>
                  <input
                    v-model="otherTexts[q.id]"
                    type="text"
                    class="other-input"
                    :placeholder="content.page.otherPlaceholder"
                    @focus="answers[q.id] = '__other__'"
                  >
                </span>
              </label>
            </div>

            <div
              v-else-if="q.type === 'text'"
              class="text-input-wrapper"
            >
              <input
                v-model="answers[q.id]"
                type="text"
                class="text-input"
                :placeholder="q.text"
              >
            </div>
          </div>

          <p
            v-if="errorMessage"
            class="error-message"
          >
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            class="submit-button"
            :disabled="submitting"
          >
            {{ submitting ? content.page.submitting : content.page.submit }}
          </button>
        </form>
      </template>

      <div
        v-else
        class="thank-you"
      >
        <h2 class="thank-you-title">
          {{ content.thankYou.title }}
        </h2>
        <p class="thank-you-message">
          {{ content.thankYou.message }}
        </p>
        <div class="promo-card">
          <span class="promo-code">{{ content.thankYou.promoCode }}</span>
        </div>
        <router-link
          to="/"
          class="back-home-link"
        >
          &larr; {{ content.thankYou.backToHome }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

export default defineComponent({
  name: 'ResearchPage',
  setup() {
    const { locale } = useLocale()
    const content = computed(() => getLocaleContent(locale.value, 'research'))

    const answers = reactive({})
    const otherTexts = reactive({})
    const submitted = ref(false)
    const submitting = ref(false)
    const errorMessage = ref('')

    const handleSubmit = async () => {
      errorMessage.value = ''

      for (const q of content.value.questions) {
        if (q.required && !answers[q.id]) {
          errorMessage.value = `Пожалуйста, ответьте на вопрос: "${q.text}"`
          return
        }
      }

      const payload = {}
      for (const q of content.value.questions) {
        let value = answers[q.id]

        if (value === '__other__') {
          if (!otherTexts[q.id]?.trim()) {
            errorMessage.value = `Пожалуйста, уточните ваш ответ на вопрос: "${q.text}"`
            return
          }
          payload[q.id] = 'Other'
          payload[q.id + '_other'] = otherTexts[q.id]
        } else {
          payload[q.id] = value || ''
        }
      }

      submitting.value = true

      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        let msg = content.value.page.errorGeneric
        try {
          const data = await response.json()
          msg = data.error || msg
        } catch { /* non-JSON response */ }
        errorMessage.value = msg
        submitting.value = false
        return
      }

      submitted.value = true
      submitting.value = false
    }

    return {
      content,
      answers,
      otherTexts,
      submitted,
      submitting,
      errorMessage,
      handleSubmit,
    }
  },
})
</script>

<style scoped>
.research-page {
  min-height: 100vh;
  background-color: var(--bg-primary, #fff);
  padding: var(--space-2xl, 4rem) var(--section-px, 2rem);
}

.research-container {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: var(--space-lg, 2rem);
  font-family: var(--font-heading, 'Inter Tight', sans-serif);
  font-size: 1rem;
  color: var(--color-accent, #0f5bff);
  text-decoration: none;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--color-accent-hover, #0a47cc);
}

.research-title {
  font-family: var(--font-heading, 'Inter Tight', sans-serif);
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--text-primary, #000);
  margin: 0 0 var(--space-md, 1.5rem);
}

.research-hypothesis {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary, rgba(0, 0, 0, 0.7));
  margin: 0 0 var(--space-xl, 3rem);
  padding-bottom: var(--space-lg, 2rem);
  border-bottom: 1px solid var(--border-light, rgba(4, 26, 82, 0.08));
}

.survey-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg, 2rem);
}

.question-card {
  background: var(--bg-primary, #fff);
  border: 1px solid var(--border-light, rgba(4, 26, 82, 0.08));
  border-radius: var(--radius-md, 1rem);
  padding: var(--space-md, 1.5rem) var(--space-lg, 2rem);
}

.question-text {
  font-family: var(--font-heading, 'Inter Tight', sans-serif);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary, #000);
  margin: 0 0 var(--space-sm, 1rem);
  line-height: 1.5;
}

.question-number {
  color: var(--color-accent, #0f5bff);
  font-weight: 600;
}

.required-mark {
  color: var(--color-accent, #0f5bff);
  margin-left: 2px;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.5rem);
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  border-radius: var(--radius-sm, 0.5rem);
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.radio-label:hover {
  background-color: var(--bg-muted, #f8f9fa);
}

.radio-label.selected {
  background-color: rgba(15, 91, 255, 0.06);
}

.radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-circle {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--border-light, rgba(4, 26, 82, 0.2));
  transition: border-color 0.15s ease;
  position: relative;
}

.radio-input:checked + .radio-circle {
  border-color: var(--color-accent, #0f5bff);
}

.radio-input:checked + .radio-circle::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-accent, #0f5bff);
}

.radio-text {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  color: var(--text-primary, #000);
  line-height: 1.5;
}

.other-text-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.other-input {
  flex: 1;
  border: none;
  border-bottom: 1px solid var(--border-light, rgba(4, 26, 82, 0.15));
  background: transparent;
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  color: var(--text-primary, #000);
  padding: 0.25rem 0;
  outline: none;
  transition: border-color 0.2s ease;
}

.other-input:focus {
  border-bottom-color: var(--color-accent, #0f5bff);
}

.text-input-wrapper {
  margin-top: 0.25rem;
}

.text-input {
  width: 100%;
  border: 1px solid var(--border-light, rgba(4, 26, 82, 0.15));
  border-radius: var(--radius-sm, 0.5rem);
  background: transparent;
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  color: var(--text-primary, #000);
  padding: 0.75rem 1rem;
  outline: none;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}

.text-input:focus {
  border-color: var(--color-accent, #0f5bff);
}

.text-input::placeholder {
  color: var(--text-muted, rgba(0, 0, 0, 0.5));
}

.error-message {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  color: #dc3545;
  margin: 0;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 1rem 2.5rem;
  border-radius: var(--radius-full, 999px);
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  text-transform: uppercase;
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 1px;
  border: 1px solid rgba(15, 91, 255, 0.35);
  box-shadow: var(--shadow-button, 0 12px 32px rgba(5, 16, 59, 0.35));
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 20px 50px rgba(5, 16, 59, 0.5);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Thank you state */
.thank-you {
  text-align: center;
  padding: var(--space-2xl, 4rem) 0;
}

.thank-you-title {
  font-family: var(--font-heading, 'Inter Tight', sans-serif);
  font-size: 2.25rem;
  font-weight: 500;
  color: var(--text-primary, #000);
  margin: 0 0 var(--space-sm, 1rem);
}

.thank-you-message {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary, rgba(0, 0, 0, 0.7));
  margin: 0 0 var(--space-lg, 2rem);
}

.promo-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3rem;
  background: var(--bg-muted, #f8f9fa);
  border: 2px dashed var(--color-accent, #0f5bff);
  border-radius: var(--radius-md, 1rem);
  margin-bottom: var(--space-xl, 3rem);
}

.promo-code {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-accent, #0f5bff);
  letter-spacing: 4px;
}

.back-home-link {
  display: inline-block;
  font-family: var(--font-heading, 'Inter Tight', sans-serif);
  font-size: 1rem;
  color: var(--color-accent, #0f5bff);
  text-decoration: none;
  transition: color 0.2s ease;
}

.back-home-link:hover {
  color: var(--color-accent-hover, #0a47cc);
}

@media screen and (max-width: 767px) {
  .research-page {
    padding: var(--space-lg, 2rem) var(--space-md, 1.5rem);
  }

  .research-title {
    font-size: 1.75rem;
  }

  .research-hypothesis {
    font-size: 0.95rem;
  }

  .question-card {
    padding: var(--space-sm, 1rem) var(--space-md, 1.5rem);
  }

  .question-text {
    font-size: 1rem;
  }

  .submit-button {
    align-self: stretch;
  }

  .promo-code {
    font-size: 1.5rem;
  }
}
</style>
