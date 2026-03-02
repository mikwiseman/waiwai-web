<template>
  <div class="money-page">
    <div class="money-container">
      <router-link to="/" class="back-link">&larr; WaiWai</router-link>

      <h1 class="money-title">Privacy Policy</h1>
      <p class="money-subtitle">WaiTime — Track Time, Mood & Energy</p>

      <section>
        <h2>Overview</h2>
        <p>WaiTime does not collect, store, or transmit any personal data to the developer or any third party. All your data stays on your device and in your personal iCloud account.</p>
      </section>

      <section>
        <h2>Data Storage</h2>
        <p>All data you create in WaiTime — time entries, projects, tags, mood and energy records — is stored locally on your device using Apple's SwiftData framework. The developer has no access to this data.</p>
      </section>

      <section>
        <h2>iCloud Sync</h2>
        <p>WaiTime uses Apple's CloudKit to sync your data across your devices via your personal iCloud account. This sync occurs entirely within Apple's infrastructure using your own iCloud storage. The developer does not have access to your iCloud data.</p>
        <p>A device identifier is used solely for sync conflict resolution between your own devices. This identifier is never transmitted to the developer or any external service.</p>
      </section>

      <section>
        <h2>No Data Collection</h2>
        <ul>
          <li>We do not collect any personal information.</li>
          <li>We do not use analytics or tracking services.</li>
          <li>We do not use advertising frameworks.</li>
          <li>We do not use third-party SDKs that collect data.</li>
          <li>We do not require user accounts or registration.</li>
        </ul>
      </section>

      <section>
        <h2>Insights</h2>
        <p>All insights and reports (mood trends, energy patterns, project analysis) are computed entirely on your device. No data is sent to external servers for processing.</p>
      </section>

      <section>
        <h2>Data Export</h2>
        <p>WaiTime allows you to export your data as CSV files using the iOS share sheet. Exported files are handled by your device's operating system. The developer does not receive or process any exported data.</p>
      </section>

      <section>
        <h2>Children's Privacy</h2>
        <p>WaiTime does not collect any personal information from any user, including children. The app is rated 4+ and is suitable for all ages.</p>
      </section>

      <section>
        <h2>Data Deletion</h2>
        <p>To delete all WaiTime data:</p>
        <ul>
          <li>Delete the WaiTime app from your device.</li>
          <li>To remove iCloud data: go to Settings &gt; [Your Name] &gt; iCloud &gt; Manage Storage &gt; WaiTime &gt; Delete Data.</li>
        </ul>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>If this privacy policy is updated, the changes will be posted at this URL with a revised date. As the app collects no data, meaningful changes are unlikely.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>If you have questions about this privacy policy, contact us at <a href="mailto:hello@waiwai.is">hello@waiwai.is</a>.</p>
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
  name: 'TimePrivacyPage',
  setup() {
    useHead({
      title: 'Privacy Policy — WaiTime',
      meta: [
        { name: 'description', content: 'WaiTime privacy policy. We do not collect, transmit, or share any personal data.' }
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
