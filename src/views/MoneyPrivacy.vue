<template>
  <div class="money-page">
    <div class="money-container">
      <router-link to="/money" class="back-link">&larr; WaiMoney</router-link>

      <h1 class="money-title">Privacy Policy</h1>
      <p class="money-subtitle">WaiMoney — Smart Budget & Expense Tracker</p>

      <section>
        <h2>Overview</h2>
        <p>WaiMoney is designed with your privacy as a core principle. The app does not collect, transmit, or share any of your personal or financial data with the developer or any third parties.</p>
      </section>

      <section>
        <h2>Data Storage</h2>
        <p>All of your budgets, transactions, and preferences are stored exclusively on your device using Apple's SwiftData framework. If you enable iCloud sync, your data is stored in your private iCloud account (Apple CloudKit private database) and is accessible only to you.</p>
      </section>

      <section>
        <h2>No Data Collection</h2>
        <ul>
          <li>We do not collect any personal information.</li>
          <li>We do not collect any financial data.</li>
          <li>We do not use analytics or tracking services.</li>
          <li>We do not use advertising frameworks.</li>
          <li>We do not use third-party SDKs that collect data.</li>
        </ul>
      </section>

      <section>
        <h2>No Tracking</h2>
        <p>WaiMoney does not track your activity, location, or behavior in any way. The app does not request access to your contacts, photos, camera, microphone, or location services.</p>
      </section>

      <section>
        <h2>Exchange Rates</h2>
        <p>The app may fetch currency exchange rates from a public API to support multi-currency features. These network requests do not include any personal or identifiable information.</p>
      </section>

      <section>
        <h2>iCloud Sync</h2>
        <p>If you use iCloud, your data syncs through Apple's private CloudKit database. This data is encrypted and protected by Apple's privacy infrastructure. The developer has no access to your iCloud data.</p>
      </section>

      <section>
        <h2>Children's Privacy</h2>
        <p>WaiMoney does not knowingly collect any information from children. The app does not collect information from any user.</p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>If this privacy policy changes, the updated version will be posted at this URL. As the app collects no data, meaningful changes are unlikely.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>If you have questions about this privacy policy, contact us at <a href="mailto:hi@waiwai.is">hi@waiwai.is</a>.</p>
      </section>

      <footer class="money-footer">
        <p>Last updated: March 2, 2026</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'MoneyPrivacyPage',
  setup() {
    useHead({
      title: 'Privacy Policy — WaiMoney',
      meta: [
        { name: 'description', content: 'WaiMoney privacy policy. We do not collect, transmit, or share any of your personal or financial data.' }
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
  margin-bottom: 2rem;
}

h2 {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.5rem;
}

p {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 0.75rem;
}

ul {
  padding-left: 1.25rem;
  margin: 0;
}

li {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.5rem;
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
