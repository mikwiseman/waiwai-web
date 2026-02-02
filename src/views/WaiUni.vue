<template>
  <div class="waiuni-page">
    <!-- Page Header -->
    <div class="waiuni-header">
      <router-link
        to="/#agents"
        class="waiuni-back-link"
      >
        &larr; {{ content.pageHeader.backLink }}
      </router-link>
      <h1 class="waiuni-title">
        {{ content.pageHeader.subtitle }}
      </h1>
    </div>

    <!-- Course Overview - 3 Column Grid -->
    <div class="course-overview-section">
      <div class="course-overview-grid">
        <!-- Column 1: For Whom -->
        <div class="overview-column">
          <div class="section-label">
            {{ content.courseOverview.forWhom.label }}
          </div>
          <div class="overview-content">
            <div
              v-for="(item, i) in content.courseOverview.forWhom.items"
              :key="'audience-' + i"
              class="audience-item"
            >
              <strong>{{ item.title }}</strong>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>

        <!-- Column 2: Course Content -->
        <div class="overview-column">
          <div class="section-label">
            {{ content.courseOverview.courseContent.label }}
          </div>
          <div class="overview-content">
            <p
              v-for="(item, i) in content.courseOverview.courseContent.items"
              :key="'content-' + i"
            >
              <strong>{{ item.bold }}</strong> {{ item.text }}
            </p>
          </div>
        </div>

        <!-- Column 3: Artifacts -->
        <div class="overview-column">
          <div class="section-label">
            {{ content.courseOverview.artifacts.label }}
          </div>
          <div class="overview-content">
            <ul>
              <li
                v-for="(item, i) in content.courseOverview.artifacts.items"
                :key="'artifact-' + i"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Course Start Banner -->
      <div class="course-start-banner">
        {{ content.courseStartBanner }}
      </div>

      <!-- Schedule Grid - 6 Modules -->
      <div class="schedule-grid">
        <div
          v-for="mod in content.modules"
          :key="mod.number"
          class="schedule-card"
        >
          <div class="schedule-number">
            {{ mod.number }}
          </div>
          <h4 class="schedule-title">
            {{ mod.title }}
          </h4>
          <p class="schedule-description">
            {{ mod.description }}
          </p>
          <p class="schedule-practice">
            <em>{{ mod.practice }}</em>
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="course-cta-buttons">
        <a
          href="#"
          class="contact-button-card"
          @click.prevent="openEventModal()"
        >
          <span class="contact-button-card-text">
            {{ content.ctaButtons.register }}
          </span>
        </a>
        <a
          href="https://t.me/mikwiseman"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-button-card"
        >
          <span class="contact-button-card-text">
            {{ content.ctaButtons.askAuthor }}
          </span>
        </a>
      </div>
    </div>

    <!-- Previous Courses (Russian only) -->
    <div
      v-if="isRussian && content.previousCourses.cards.length"
      class="previous-courses-section"
    >
      <div class="title-container">
        <div class="section-label">
          {{ content.previousCourses.title.toUpperCase() }}
        </div>
      </div>
      <div class="infographic-grid">
        <div
          v-for="card in summaryCards"
          :key="card.key"
          class="case-card infographic-card"
        >
          <div class="infographic-header">
            <img
              v-if="card.logo"
              :src="card.logo"
              :alt="card.title"
              class="company-logo"
            >
            <h3
              v-else
              class="infographic-title"
            >
              {{ card.title }}
            </h3>
          </div>
          <p class="infographic-description">
            {{ card.description }}
          </p>
          <div class="infographic-tags">
            <span
              v-for="stat in card.stats"
              :key="stat.label"
              class="stat-tag"
            >
              {{ stat.value }} {{ stat.label }}
            </span>
            <span :class="['type-tag', card.type === 'B2B' ? 'type-tag--b2b' : 'type-tag--b2c']">
              {{ card.type }}
            </span>
          </div>
          <a
            v-if="card.pdfLink"
            :href="card.pdfLink"
            target="_blank"
            rel="noopener noreferrer"
            class="review-button"
          >
            <span class="review-button-text">Посмотреть отзыв</span>
          </a>
          <a
            v-if="card.reviewLink"
            :href="card.reviewLink"
            class="review-button"
          >
            <span class="review-button-text">Посмотреть отзывы</span>
          </a>
        </div>
      </div>
    </div>

    <!-- About Instructor (Russian only) -->
    <div
      v-if="isRussian && content.about.items.length"
      class="about-section"
    >
      <div class="title-container">
        <div class="section-label">
          {{ content.about.title.toUpperCase() }}
        </div>
      </div>
      <div class="about-content">
        <div class="about-cards">
          <div
            v-for="(item, i) in content.about.items"
            :key="'about-' + i"
            class="about-card"
          >
            <h3 class="about-card-title">
              {{ item.title }}
            </h3>
            <p class="about-card-description">
              {{ item.description }}
            </p>
          </div>
        </div>
        <div class="about-image-container">
          <img
            :src="instructorPhoto"
            alt="Mik Wiseman"
            class="about-image"
          >
          <a
            href="https://t.me/mikwiseman"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-button-card about-button"
          >
            <span class="contact-button-card-text">
              {{ content.about.askAuthor }}
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- Reviews (Russian only) -->
    <div
      v-if="isRussian && content.reviews.items.length"
      class="reviews-section"
    >
      <div class="title-container">
        <div class="section-label">
          {{ content.reviews.title.toUpperCase() }}
        </div>
      </div>
      <p
        v-if="content.reviews.note"
        class="reviews-note"
      >
        {{ content.reviews.note }}
      </p>
      <div class="reviews-grid">
        <div
          v-for="(review, index) in content.reviews.items"
          :key="'review-' + index"
          class="review-card"
        >
          <p class="review-text">
            "{{ review.text }}"
          </p>
          <div class="review-author">
            <div class="review-avatar">
              {{ review.initials }}
            </div>
            <div class="review-info">
              <p class="review-name">
                {{ review.name }}
              </p>
              <p class="review-position">
                {{ review.position }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ (Russian only) -->
    <div
      v-if="isRussian && content.faq.items.length"
      id="faq"
      class="faq-section"
    >
      <div class="title-container">
        <div class="section-label">
          {{ content.faq.title.toUpperCase() }}
        </div>
      </div>
      <div class="cases-grid faq-grid">
        <div
          v-for="(item, index) in content.faq.items"
          :key="'faq-' + index"
          class="case-card faq-card"
        >
          <div class="case-header">
            <h3 class="section-subtitle">
              {{ item.question }}
            </h3>
            <p
              v-if="item.answerLink"
              class="faq-answer"
            >
              <a
                :href="item.answerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.answer }}
              </a>
            </p>
            <p
              v-else
              class="faq-answer"
            >
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, inject } from 'vue'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

const instructorPhoto = new URL('../assets/images/mik-wiseman.jpg', import.meta.url).href
const alfabankLogo = new URL('../assets/images/logos/alfabank.svg', import.meta.url).href
const samolotLogo = new URL('../assets/images/logos/samolot.svg', import.meta.url).href
const pikemediallabLogo = new URL('../assets/images/logos/pikemedialab.svg', import.meta.url).href

const logoMap = {
  alfabank: alfabankLogo,
  samolot: samolotLogo,
  pikemedialab: pikemediallabLogo
}

export default defineComponent({
  name: 'WaiUniPage',
  setup() {
    const { locale, isRussian } = useLocale()
    const content = computed(() => getLocaleContent(locale.value, 'waiuni'))
    const openEventModal = inject('openEventModal')

    const summaryCards = computed(() =>
      (content.value.previousCourses?.cards || []).map(card => ({
        ...card,
        logo: card.logoKey ? logoMap[card.logoKey] : null
      }))
    )

    return {
      content,
      isRussian,
      openEventModal,
      instructorPhoto,
      summaryCards
    }
  }
})
</script>

<style scoped>
.waiuni-page {
  font-family: 'Roboto Mono', monospace;
}

/* Page Header */
.waiuni-header {
  padding: 3rem 2.5rem 2rem;
  background: #fff;
}

.waiuni-back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.95rem;
  color: rgba(4, 26, 82, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;
  margin-bottom: 1.5rem;
}

.waiuni-back-link:hover {
  color: #0f5bff;
}

.waiuni-title {
  font-family: 'Inter Tight', sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 1.3;
  color: #02102a;
  margin: 0;
  max-width: 800px;
}

/* Course Overview Section */
.course-overview-section {
  padding: 4rem 2.5rem;
  background: rgba(4, 22, 50, 0.03);
}

.course-overview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.overview-column .section-label {
  margin-bottom: 1.5rem;
}

.section-label {
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  border: 1px solid rgba(15, 91, 255, 0.4);
  box-shadow: 0 12px 24px rgba(5, 16, 59, 0.35);
  font-family: "Inter Tight", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.overview-content {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(4, 26, 82, 0.85);
}

.overview-content p {
  margin: 0 0 1rem 0;
}

.overview-content p:last-child {
  margin-bottom: 0;
}

.overview-content strong {
  color: #02102a;
  font-weight: 600;
}

.audience-item {
  margin-bottom: 1.25rem;
}

.audience-item:last-child {
  margin-bottom: 0;
}

.audience-item strong {
  display: block;
  color: #02102a;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.audience-item p {
  margin: 0;
  color: rgba(4, 26, 82, 0.7);
}

.overview-content ul {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0;
}

.overview-content li {
  margin-bottom: 0.5rem;
  color: rgba(4, 26, 82, 0.8);
}

.overview-content li:last-child {
  margin-bottom: 0;
}

/* Course Start Banner */
.course-start-banner {
  margin: 3rem 0;
  padding: 1.5rem 2rem;
  border: 2px solid rgba(4, 26, 82, 0.15);
  border-radius: 0.75rem;
  background: #ffffff;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #02102a;
}

/* Schedule Grid */
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.schedule-card {
  background: #ffffff;
  border: 2px solid rgba(4, 26, 82, 0.15);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.schedule-number {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter Tight", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.schedule-title {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #02102a;
  margin: 0;
}

.schedule-description {
  font-family: Inter, sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(4, 26, 82, 0.72);
  margin: 0;
}

.schedule-practice {
  font-family: Inter, sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(4, 26, 82, 0.6);
  margin: 0;
}

/* CTA Buttons */
.course-cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.contact-button-card {
  flex: 0 0 auto;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  border-radius: 999px;
  padding: 0.9rem 1.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 18px 32px rgba(4, 16, 59, 0.35);
  border: 1px solid rgba(15, 91, 255, 0.35);
}

.contact-button-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 44px rgba(4, 16, 59, 0.45);
}

.contact-button-card-text {
  color: #fff;
  text-transform: uppercase;
  font-feature-settings: "dlig" on, "ss07" on, "ss04" on;
  font-family: Elmamono, sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.95rem;
}

/* Previous Courses */
.previous-courses-section {
  margin-top: 4rem;
  padding: 0 2.5rem;
}

.previous-courses-section,
.previous-courses-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.infographic-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.case-card {
  background: #ffffff;
  border-radius: 1.75rem;
  border: 1px solid rgba(4, 26, 82, 0.08);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 20px 40px rgba(8, 34, 120, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(8, 34, 120, 0.12);
}

.infographic-card {
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.infographic-header {
  display: flex;
  align-items: center;
}

.company-logo {
  height: 48px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
}

.infographic-title {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: #02102a;
  margin: 0;
}

.infographic-description {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(4, 26, 82, 0.72);
  margin: 0;
}

.infographic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.stat-tag {
  display: inline-flex;
  padding: 0.45rem 0.85rem;
  background: #0a1628;
  color: white;
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.type-tag {
  display: inline-flex;
  padding: 0.45rem 0.85rem;
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.type-tag--b2b {
  background: rgba(10, 22, 40, 0.85);
  color: white;
}

.type-tag--b2c {
  background: rgba(16, 185, 129, 0.9);
  color: white;
}

.review-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  border-radius: 999px;
  padding: 0.9rem 1.85rem;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 18px 32px rgba(4, 16, 59, 0.35);
  border: 1px solid rgba(15, 91, 255, 0.35);
  margin-top: 0.75rem;
}

.review-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 44px rgba(4, 16, 59, 0.45);
}

.review-button-text {
  color: #fff;
  text-transform: uppercase;
  font-feature-settings: "dlig" on, "ss07" on, "ss04" on;
  font-family: Elmamono, sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.95rem;
}

/* About Section */
.about-section {
  padding: 4rem 2.5rem;
  background: rgba(4, 22, 50, 0.03);
}

.about-section,
.about-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 2.25rem;
}

.about-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-card {
  background: #fff;
  border: 1px solid rgba(4, 26, 82, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(8, 34, 120, 0.08);
}

.about-card-title {
  font-family: "Inter Tight", sans-serif !important;
  font-size: 1.1rem;
  font-weight: 600;
  color: #02102a;
  margin: 0 0 0.75rem 0;
}

.about-card-description {
  font-family: Inter, sans-serif !important;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(4, 26, 82, 0.72);
  margin: 0;
}

.about-image-container {
  position: sticky;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-button {
  align-self: flex-start;
}

.about-image {
  width: 100%;
  border-radius: 0.75rem;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.about-image:hover {
  filter: grayscale(0%);
}

/* Reviews Section */
.reviews-section {
  padding: 4rem 2.5rem;
  background: rgba(4, 22, 50, 0.03);
}

.reviews-section,
.reviews-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.reviews-note {
  font-size: 0.9rem;
  color: rgba(4, 26, 82, 0.6);
  margin: 1.5rem 0 2rem;
}

.reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.review-card {
  background: #ffffff;
  border-radius: 1rem;
  border: 1px solid rgba(4, 26, 82, 0.08);
  padding: 1.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.review-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(8, 34, 120, 0.1);
}

.review-text {
  font-family: Inter, sans-serif !important;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(4, 26, 82, 0.8);
  font-style: italic;
  margin: 0 0 1.25rem 0;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.review-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(15, 91, 255, 0.15) 0%, rgba(4, 19, 54, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter Tight", sans-serif !important;
  font-size: 0.8rem;
  font-weight: 600;
  color: #0f5bff;
}

.review-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.review-name {
  font-family: "Inter Tight", sans-serif !important;
  font-size: 0.95rem;
  font-weight: 600;
  color: #02102a;
  margin: 0;
}

.review-position {
  font-family: Inter, sans-serif !important;
  font-size: 0.85rem;
  color: rgba(4, 26, 82, 0.6);
  margin: 0;
}

/* FAQ Section */
.faq-section {
  margin-top: 4rem;
  padding: 0 2.5rem 4rem;
}

.faq-section,
.faq-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.faq-grid {
  margin-top: 0;
}

.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
  margin-top: 2.25rem;
}

.faq-card .case-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-subtitle {
  font-family: "Inter Tight", sans-serif !important;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
  color: #02102a;
}

.faq-answer {
  font-family: Inter, sans-serif !important;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}

.faq-answer a {
  color: rgba(4, 26, 82, 0.8);
  text-decoration: underline;
}

/* Responsive - Desktop */
@media screen and (min-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  .cases-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (min-width: 768px) {
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Responsive - Tablet */
@media screen and (max-width: 1023px) {
  .course-overview-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .schedule-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-section {
    padding: 3rem 1.5rem;
  }

  .about-image-container {
    position: relative;
    top: 0;
    order: -1;
  }
}

/* Responsive - Mobile */
@media screen and (max-width: 767px) {
  .waiuni-header {
    padding: 2rem 1.5rem 1.5rem;
  }

  .waiuni-title {
    font-size: 1.75rem;
  }

  .course-overview-section {
    padding: 3rem 1.5rem;
  }

  .schedule-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .course-start-banner {
    padding: 1rem 1.25rem;
    font-size: 1rem;
  }

  .course-cta-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .course-cta-buttons .contact-button-card {
    width: 100%;
    max-width: 280px;
  }

  .previous-courses-section {
    padding: 0 1.25rem;
  }

  .infographic-card {
    padding: 1.5rem;
  }

  .company-logo {
    height: 40px;
  }

  .infographic-title {
    font-size: 1.15rem;
  }

  .infographic-description {
    font-size: 0.9rem;
  }

  .stat-tag,
  .type-tag {
    font-size: 0.7rem;
    padding: 0.35rem 0.65rem;
  }

  .reviews-section {
    padding: 3rem 1.5rem;
  }

  .review-card {
    padding: 1.25rem;
  }

  .review-text {
    font-size: 0.95rem;
  }

  .faq-section {
    padding: 0 1.25rem 3rem;
  }

  .case-card {
    padding: 1.75rem;
    gap: 1rem;
  }
}
</style>
