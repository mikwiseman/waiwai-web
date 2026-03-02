<template>
  <div class="money-page">
    <div class="money-container">
      <div class="hero">
        <div class="app-icon">
          <img src="/money-icon.png" alt="WaiMoney" width="80" height="80" />
        </div>
        <h1 class="hero-title">WaiMoney</h1>
        <p class="hero-tagline">Smart Budget & Expense Tracker</p>
        <p class="hero-description">Plan budgets, track spending, and understand your financial habits. All data stays on your device.</p>
        <a
          href="https://apps.apple.com/app/waimoney/id6744227535"
          class="download-button"
          target="_blank"
        >
          Download on the App Store
        </a>
      </div>

      <div class="features">
        <div class="feature">
          <div class="feature-icon">&#x1F4CA;</div>
          <h2>Plan Your Budget</h2>
          <p>Set monthly limits for each category. Visual progress bars show exactly where you stand at a glance.</p>
        </div>

        <div class="feature">
          <div class="feature-icon">&#x1F4B0;</div>
          <h2>Track Every Expense</h2>
          <p>Log transactions in seconds and rate your satisfaction. Know which purchases truly make you happy.</p>
        </div>

        <div class="feature">
          <div class="feature-icon">&#x1F50D;</div>
          <h2>Understand Your Habits</h2>
          <p>Charts and insights reveal your spending patterns. Make better financial decisions backed by data.</p>
        </div>
      </div>

      <div class="privacy-banner">
        <h2>Your Data, Your Device</h2>
        <p>WaiMoney stores everything locally on your device. No accounts, no servers, no data collection. iCloud sync is optional and uses your private Apple account.</p>
      </div>

      <footer class="money-footer">
        <div class="footer-links">
          <router-link to="/money/privacy">Privacy Policy</router-link>
          <router-link to="/money/support">Support</router-link>
          <a href="mailto:hi@waiwai.is">Contact</a>
        </div>
        <p class="copyright">&copy; 2026 WaiWai</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'MoneyLandingPage',
  setup() {
    useHead({
      title: 'WaiMoney — Smart Budget & Expense Tracker',
      meta: [
        { name: 'description', content: 'WaiMoney helps you plan budgets, track spending, and understand your financial habits. Privacy-first: all data stays on your device.' }
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

.hero {
  text-align: center;
  margin-bottom: 4rem;
}

.app-icon {
  margin-bottom: 1.5rem;
}

.app-icon img {
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.hero-title {
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 0.25rem;
}

.hero-tagline {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.4);
  margin: 0 0 1.5rem;
}

.hero-description {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.download-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 999px;
  background: #111;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.download-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.features {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.feature {
  text-align: center;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.feature h2 {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.5rem;
}

.feature p {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
}

.privacy-banner {
  text-align: center;
  padding: 2.5rem 2rem;
  background: #f8f8f8;
  border-radius: 16px;
  margin-bottom: 3rem;
}

.privacy-banner h2 {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.5rem;
}

.privacy-banner p {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.money-footer {
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.footer-links a {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.875rem;
  color: #0f5bff;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.copyright {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.3);
  margin: 0;
}

@media screen and (max-width: 767px) {
  .money-page {
    padding: 2rem 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .footer-links {
    gap: 1.5rem;
  }
}
</style>
