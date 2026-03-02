<template>
  <div class="money-page">
    <div class="money-container">
      <router-link to="/time" class="back-link">&larr; WaiTime</router-link>

      <h1 class="money-title">Support</h1>
      <p class="money-subtitle">WaiTime — Track Time, Mood & Energy</p>

      <section>
        <h2>Get Help</h2>
        <p>Having trouble with WaiTime or have a question? We're here to help.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>Email us at <a href="mailto:hello@waiwai.is">hello@waiwai.is</a> and we'll get back to you as soon as possible.</p>
      </section>

      <section>
        <h2>Common Questions</h2>

        <div class="faq-item">
          <h3>Where is my data stored?</h3>
          <p>All your data is stored locally on your device. If you have iCloud enabled, it also syncs to your private iCloud account. We never have access to your data.</p>
        </div>

        <div class="faq-item">
          <h3>How do I create a time entry?</h3>
          <p>Drag on the calendar timeline to create a time block. You can also tap an empty time slot or use the "+" button to add an entry manually.</p>
        </div>

        <div class="faq-item">
          <h3>What are mood and energy levels?</h3>
          <p>Each time entry can include your emotional state (5 levels from excited to upset) and energy level (high, medium, low). This data powers your personalized insights.</p>
        </div>

        <div class="faq-item">
          <h3>How do I sync between devices?</h3>
          <p>Make sure iCloud is enabled on all your devices and signed into the same Apple ID. Your data will sync automatically through Apple's CloudKit.</p>
        </div>

        <div class="faq-item">
          <h3>Can I export my data?</h3>
          <p>Yes. Go to Settings and tap "Export Data" to generate a CSV file you can share or open in any spreadsheet app.</p>
        </div>

        <div class="faq-item">
          <h3>What are the 10 insights?</h3>
          <p>WaiTime analyzes your mood and energy data to find patterns: happiness boosters, energy drainers, peak hours, burnout zones, and more. The more data you log, the more accurate they become.</p>
        </div>
      </section>

      <footer class="money-footer">
        <p><a href="mailto:hello@waiwai.is">hello@waiwai.is</a></p>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'TimeSupportPage',
  setup() {
    useHead({
      title: 'Support — WaiTime',
      meta: [
        { name: 'description', content: 'Get help with WaiTime. Contact support, find answers to common questions about time tracking, mood and energy insights.' }
      ]
    })
  }
})
</script>

<style scoped>
.money-page {
  min-height: 100vh;
  background-color: #fff;
  padding: 4rem 2rem;
}

.money-container {
  max-width: 680px;
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

.money-title {
  font-family: 'Roboto Mono', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 0.25rem;
}

.money-subtitle {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.4);
  margin: 0 0 2.5rem;
}

section {
  margin-bottom: 2.5rem;
}

h2 {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.75rem;
}

h3 {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.25rem;
}

p {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 0.75rem;
}

.faq-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.faq-item:last-child {
  border-bottom: none;
}

a {
  color: #0f5bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.money-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.money-footer p {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.4);
}

@media screen and (max-width: 767px) {
  .money-page {
    padding: 2rem 1.5rem;
  }

  .money-title {
    font-size: 2rem;
  }
}
</style>
