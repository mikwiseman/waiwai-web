<template>
  <div class="money-page">
    <div class="money-container">
      <router-link to="/money" class="back-link">&larr; WaiMoney</router-link>

      <h1 class="money-title">Support</h1>
      <p class="money-subtitle">WaiMoney — Smart Budget & Expense Tracker</p>

      <section>
        <h2>Get Help</h2>
        <p>Having trouble with WaiMoney or have a question? We're here to help.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>Email us at <a href="mailto:hi@waiwai.is">hi@waiwai.is</a> and we'll get back to you as soon as possible.</p>
      </section>

      <section>
        <h2>Common Questions</h2>

        <div class="faq-item">
          <h3>Where is my data stored?</h3>
          <p>All your data is stored locally on your device. If you have iCloud enabled, it also syncs to your private iCloud account. We never have access to your data.</p>
        </div>

        <div class="faq-item">
          <h3>How do I set up a budget?</h3>
          <p>Open the Plan tab and tap the "+" button to create a new budget category. Set a monthly limit and start tracking your spending against it.</p>
        </div>

        <div class="faq-item">
          <h3>Can I use multiple currencies?</h3>
          <p>Yes. WaiMoney supports multiple currencies with automatic exchange rate updates. Set your primary currency in Settings and add transactions in any currency.</p>
        </div>

        <div class="faq-item">
          <h3>How do I sync between devices?</h3>
          <p>Make sure iCloud is enabled on all your devices and signed into the same Apple ID. Your data will sync automatically through Apple's CloudKit.</p>
        </div>

        <div class="faq-item">
          <h3>What is the satisfaction rating?</h3>
          <p>After each purchase, WaiMoney asks you to rate your satisfaction. Over time, this helps you understand which spending makes you happy and which you regret.</p>
        </div>
      </section>

      <footer class="money-footer">
        <p><a href="mailto:hi@waiwai.is">hi@waiwai.is</a></p>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'MoneySupportPage',
  setup() {
    useHead({
      title: 'Support — WaiMoney',
      meta: [
        { name: 'description', content: 'Get help with WaiMoney. Contact support, find answers to common questions about budgeting and expense tracking.' }
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
