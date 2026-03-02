<template>
  <div class="money-page">
    <div class="money-container">
      <div class="hero">
        <div class="app-icon">
          <img src="/time-icon.png" alt="WaiTime" width="80" height="80" />
        </div>
        <h1 class="hero-title">WaiTime</h1>
        <p class="hero-tagline">Track Time, Mood & Energy</p>
        <p class="hero-description">Your time tells a story — and it's not just about hours. Track what you do and how you feel doing it.</p>
        <a
          href="https://apps.apple.com/app/waitime/id6741257977"
          class="download-button"
          target="_blank"
        >
          Download on the App Store
        </a>
      </div>

      <div class="features">
        <div class="feature">
          <div class="feature-icon">&#x1F5D3;</div>
          <h2>A Calendar, Not a Stopwatch</h2>
          <p>Drag on the timeline to create time blocks. Fill in your day at your own pace — no start/stop timers, no pressure.</p>
        </div>

        <div class="feature">
          <div class="feature-icon">&#x1F31F;</div>
          <h2>Mood & Energy Tracking</h2>
          <p>Log how you feel with every time block. Five emotion levels and three energy levels reveal patterns you'd otherwise miss.</p>
        </div>

        <div class="feature">
          <div class="feature-icon">&#x1F4A1;</div>
          <h2>10 Personalized Insights</h2>
          <p>Discover your happiness boosters, energy drainers, peak hours, burnout zones, and more — all computed on your device.</p>
        </div>
      </div>

      <div class="privacy-banner">
        <h2>Your Data, Your Device</h2>
        <p>No subscriptions, no ads, no accounts, no tracking. All data stays on your device and your iCloud. All insights computed locally.</p>
      </div>

      <footer class="money-footer">
        <div class="footer-links">
          <router-link to="/time/privacy">Privacy Policy</router-link>
          <router-link to="/time/support">Support</router-link>
          <a href="mailto:hello@waiwai.is">Contact</a>
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
  name: 'TimeLandingPage',
  setup() {
    useHead({
      title: 'WaiTime — Track Time, Mood & Energy',
      meta: [
        { name: 'description', content: 'WaiTime is a calendar-based time tracker with mood and energy insights. No timers, no pressure — just drag to fill in your day.' }
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
