<template>
  <div class="smooth-scroll">
    <!-- 1. Hero -->
    <div
      id="home"
      class="hero-section"
    >
      <div class="hero-content">
        <h1 class="hero-heading">
          {{ content.hero.heading }}
        </h1>
        <p class="hero-subheading">
          {{ content.hero.subheading }}
        </p>
      </div>
      <div class="hero-cta-group">
        <a
          href="https://calendly.com/mikwiseman/hi"
          target="_blank"
          class="hero-cta-button"
        >
          <span class="button-text">{{ content.hero.bookCall }}</span>
        </a>
      </div>
    </div>

    <!-- 2. How It Works -->
    <div
      id="how-it-works"
      class="how-it-works-section"
    >
      <div class="section-label">
        {{ content.sections.howItWorks }}
      </div>
      <div class="steps-grid">
        <div
          v-for="(step, i) in content.howItWorksSteps"
          :key="i"
          class="step-card"
        >
          <div class="step-number">
            {{ i + 1 }}
          </div>
          <h3 class="step-title">
            {{ step.title }}
          </h3>
          <p class="step-text">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 3. Cases -->
    <div
      id="cases"
      class="proj-section cases-section"
    >
      <div class="title-container">
        <div class="section-label">
          {{ content.sections.cases }}
        </div>
      </div>
      <div class="cases-grid">
        <div
          v-for="caseItem in content.caseCards"
          :key="caseItem.key"
          class="case-card case-card--detailed"
        >
          <div class="case-header">
            <h3 class="section-subtitle">
              {{ caseItem.title }}
            </h3>
            <div class="case-details">
              <div class="case-detail">
                <span class="case-detail-label">{{ content.caseLabels.task }}</span>
                <span class="case-detail-text">{{ caseItem.task }}</span>
              </div>
              <div class="case-detail">
                <span class="case-detail-label">{{ content.caseLabels.solution }}</span>
                <span class="case-detail-text">{{ caseItem.solution }}</span>
              </div>
              <div class="case-detail">
                <span class="case-detail-label">{{ content.caseLabels.result }}</span>
                <span class="case-detail-text">{{ caseItem.result }}</span>
              </div>
            </div>
          </div>
          <div class="case-tags">
            <span
              v-for="(tag, index) in caseItem.tags"
              :key="`tag-${caseItem.key}-${index}`"
              class="case-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. About (merged) -->
    <div
      id="about"
      class="about-section"
    >
      <!-- Sub-block A: Description -->
      <div class="about-content">
        <p
          v-for="(paragraph, index) in content.aboutSection.text"
          :key="index"
          class="about-text"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- Sub-block B: Vision -->
      <div class="about-vision">
        <p class="about-vision-text">
          {{ content.aboutSection.vision }}
        </p>
      </div>

      <!-- Sub-block C: Timeline -->
      <div class="timeline">
        <div
          v-for="(item, i) in content.timeline"
          :key="i"
          class="timeline-item"
        >
          <div class="timeline-year">
            {{ item.year }}
          </div>
          <div class="timeline-text">
            {{ item.text }}
          </div>
        </div>
      </div>

      <!-- Sub-block D: Products -->
      <div class="about-products">
        <div class="section-label">
          {{ content.sections.products }}
        </div>
        <div class="products-grid">
          <a
            v-for="product in content.products"
            :key="product.name"
            :href="product.link"
            class="product-card"
            :target="product.link.startsWith('http') ? '_blank' : undefined"
            :rel="product.link.startsWith('http') ? 'noopener noreferrer' : undefined"
          >
            <h4 class="product-name">{{ product.name }}</h4>
            <p class="product-description">{{ product.description }}</p>
          </a>
        </div>
      </div>

      <!-- Sub-block E: Awards -->
      <div class="about-awards">
        <h3 class="about-awards-title">
          {{ content.awardsSection.title }}
        </h3>
        <div class="awards-row">
          <div
            v-for="award in content.awards"
            :key="award.name"
            class="award-item"
          >
            <div :class="['award-medal', 'medal-' + award.medal]" />
            <div class="award-info">
              <span class="award-name">{{ award.name }}</span>
              <a
                v-if="award.link"
                :href="award.link"
                target="_blank"
                rel="noopener noreferrer"
                class="award-detail"
              >{{ award.award }}</a>
              <span
                v-else
                class="award-detail"
              >{{ award.award }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sub-block F: Badges (Russian only) -->
      <div
        v-if="isRussian"
        class="about-badges"
      >
        <div class="badge-item">
          <img
            src="@/assets/images/fasie-logo.svg"
            alt="Фонд содействия инновациям"
            class="badge-logo"
          >
          <div class="badge-text">
            <p class="badge-foundation">
              {{ content.grantSection?.foundationName }}
            </p>
            <p class="badge-project">
              {{ content.grantSection?.projectInfo }}
            </p>
            <p class="badge-contract">
              {{ content.grantSection?.contractNumber }}
            </p>
          </div>
        </div>
        <div class="badge-item">
          <div class="skolkovo-badge">
            <span class="skolkovo-badge-text">{{ content.grantSection?.skolkovo?.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. Media -->
    <div
      id="media"
      class="media-mentions"
    >
      <h2 class="media-title">
        {{ content.mediaSection.title }}
      </h2>
      <div
        v-for="item in localizedMediaMentions"
        :key="item.key"
        class="media-container"
      >
        <div class="media-name">
          <div class="media-name-title">
            <img
              :src="item.logo"
              :alt="item.name"
              class="media-logo"
            >
          </div>
        </div>
        <div class="media-collection">
          <div class="media-entry">
            <div class="media-article">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.articleTitle }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. Blog -->
    <div
      id="blog"
      class="blog"
    >
      <h2 class="blog-title">
        {{ content.blogSection.title }}
      </h2>
      <div
        v-if="blogLoading"
        class="blog-status"
      >
        {{ content.blogSection.loading }}
      </div>
      <div
        v-else-if="blogLoadFailed"
        class="blog-status blog-status--error"
      >
        {{ content.blogSection.error }}
      </div>
      <div
        v-else-if="blogInitialized && featuredBlogPosts.length === 0"
        class="blog-status"
      >
        {{ content.blogSection.empty }}
      </div>
      <div
        v-else
        class="blog-cards"
      >
        <article
          v-for="post in featuredBlogPosts"
          :key="post.path"
          class="blog-card"
        >
          <time class="blog-card-date">
            {{ post.formattedDate }}
          </time>
          <h3 class="blog-card-title">
            <a
              class="blog-card-link blog-card-title-link"
              :href="post.path"
            >
              {{ post.title }}
            </a>
          </h3>
          <p
            v-if="post.description"
            class="blog-card-description"
          >
            {{ post.description }}
          </p>
          <a
            class="blog-card-link blog-card-read-more"
            :href="post.path"
          >
            {{ content.blogSection.readMore }}
          </a>
        </article>
        <router-link
          class="blog-card-link blog-card-read-more blog-card-read-more--cta"
          :to="{ name: 'blog' }"
        >
          {{ content.blogSection.readBlog }}
        </router-link>
      </div>
    </div>

    <!-- 7. Contact -->
    <div
      id="contact"
      class="contact-section contact-section--no-circle"
    >
      <div class="contacts">
        <div class="contacts-container">
          <div class="form-title">
            {{ content.contactSection.title }}
          </div>
          <div class="contacts-wrapper">
            <div class="contact-block">
              <div class="link-container">
                <div class="contact-text label">
                  {{ content.contactSection.email }}
                </div>
                <a
                  href="mailto:hi@waiwai.is"
                  class="contact-text link"
                >hi@waiwai.is</a>
              </div>
              <div class="link-container">
                <div class="contact-text label">
                  {{ content.contactSection.telegram }}
                </div>
                <a
                  href="https://t.me/mikwiseman"
                  target="_blank"
                  class="contact-text link"
                >@MIKWISEMAN</a>
              </div>
            </div>
            <div class="divider" />
            <div class="address-block">
              <div class="link-container">
                <div class="contact-text label">
                  {{ content.contactSection.phone }}
                </div>
                <p class="address-text">
                  {{ content.contactSection.phoneNumber }}
                </p>
              </div>
              <div class="link-container">
                <div class="contact-text label">
                  {{ content.contactSection.address }}
                </div>
                <p class="address-text">
                  {{ content.contactSection.addressText }}
                </p>
              </div>
              <div class="link-container">
                <div class="contact-text label">
                  {{ content.contactSection.organization }}
                </div>
                <p class="address-text">
                  {{ content.contactSection.organizationText }}
                </p>
              </div>
            </div>
          </div>
          <div class="footer-inline">
            <img
              src="@/assets/images/logo_02.svg"
              loading="lazy"
              width="180"
              alt=""
              class="footer-logo-inline"
            >
            <p class="footer-copyright-inline">
              {{ content.contactSection.copyright }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { fetchBlogPosts, formatBlogDate } from '@/utils/blogPosts'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const { locale, isRussian } = useLocale()
    const content = computed(() => getLocaleContent(locale.value, 'home'))

    const blogPosts = ref([])
    const blogLoading = ref(false)
    const blogLoadFailed = ref(false)
    const blogInitialized = ref(false)

    const loadBlogPosts = async () => {
      if (blogLoading.value) {
        return
      }

      blogLoading.value = true
      blogLoadFailed.value = false

      try {
        blogPosts.value = await fetchBlogPosts(locale.value)
      } catch (error) {
        console.error('Failed to load blog posts', error)
        blogLoadFailed.value = true
      } finally {
        blogLoading.value = false
        blogInitialized.value = true
      }
    }

    onMounted(() => {
      loadBlogPosts()
    })

    const featuredBlogPosts = computed(() =>
      blogPosts.value
        .slice(0, 5)
        .map((post) => ({
          ...post,
          formattedDate: formatBlogDate(post?.date, locale.value)
        }))
    )

    const mediaLogos = {
      tadviserMetrics: new URL('../assets/images/tadviser.svg', import.meta.url).href,
      bfm: new URL('../assets/images/bfm.svg', import.meta.url).href,
      cnews: new URL('../assets/images/cnews.svg', import.meta.url).href,
      tadviserMarketplace: new URL('../assets/images/tadviser.svg', import.meta.url).href,
      rbc: new URL('../assets/images/rbc.svg', import.meta.url).href,
      itworld: new URL('../assets/images/itworld.svg', import.meta.url).href,
      tbank: new URL('../assets/images/biznes-sekrety.svg', import.meta.url).href,
      aitoolz: new URL('../assets/images/ai-toolz.svg', import.meta.url).href,
      rb: new URL('../assets/images/rb.svg', import.meta.url).href,
      secretmag: new URL('../assets/images/sf.svg', import.meta.url).href,
      hightech: new URL('../assets/images/hitech.svg', import.meta.url).href
    }

    const localizedMediaMentions = computed(() =>
      content.value.mediaMentions.map(item => ({
        ...item,
        logo: mediaLogos[item.key]
      }))
    )

    return {
      content,
      isRussian,
      localizedMediaMentions,
      featuredBlogPosts,
      blogLoading,
      blogLoadFailed,
      blogInitialized
    }
  }
})
</script>

<style scoped>
/* ==========================================================================
   HERO
   ========================================================================== */

.hero-section {
  background: var(--bg-primary, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  padding: 8rem 2rem 4rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.hero-heading {
  font-family: 'Roboto Mono', monospace;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 1.5rem;
}

.hero-subheading {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.6);
  max-width: 700px;
  margin: 0;
}

.hero-cta-group {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.hero-cta-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  border-radius: 999px;
  background: #0f5bff;
  color: #fff;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 12px rgba(15, 91, 255, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 91, 255, 0.3);
}

.hero-cta-button .button-text {
  position: static;
  display: inline;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
}

@media screen and (max-width: 767px) {
  .hero-section {
    min-height: 75svh;
    padding: 6rem 1.5rem 3rem;
  }

  .hero-heading {
    font-size: 2.25rem;
    line-height: 1.1;
  }

  .hero-subheading {
    font-size: 1rem;
  }

  .hero-content {
    padding: 0 1.5rem;
  }
}

/* ==========================================================================
   HOW IT WORKS
   ========================================================================== */

.how-it-works-section {
  padding: var(--section-py, 3rem) var(--section-px, 2rem);
  background-color: var(--bg-primary, #fff);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.step-card {
  background: var(--bg-primary, #fff);
  border: 1px solid var(--border-light, rgba(4, 26, 82, 0.08));
  border-radius: var(--radius-md, 1rem);
  padding: 2rem;
  box-shadow: var(--shadow-card, 0 8px 24px rgba(0, 0, 0, 0.08));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover, 0 16px 40px rgba(0, 0, 0, 0.12));
}

.step-number {
  font-family: 'Roboto Mono', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-accent, #0f5bff);
  margin-bottom: 0.75rem;
  line-height: 1;
}

.step-title {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary, #000);
  margin: 0 0 0.5rem;
}

.step-text {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary, rgba(0, 0, 0, 0.7));
  margin: 0;
}

@media screen and (max-width: 767px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .how-it-works-section {
    padding: 2rem 1.5rem;
  }
}

/* ==========================================================================
   CASES (existing styles preserved)
   ========================================================================== */

.section-label {
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: #0f5bff;
  color: #fff;
  border: none;
  box-shadow: none;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
  margin-top: 2.25rem;
}

@media screen and (min-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.case-card {
  background: var(--bg-primary, #ffffff);
  border-radius: var(--radius-md, 1rem);
  border: 1px solid var(--border-light, rgba(4, 26, 82, 0.08));
  padding: var(--space-lg, 2rem);
  display: flex;
  flex-direction: column;
  gap: var(--space-md, 1.5rem);
  box-shadow: var(--shadow-card, 0 8px 24px rgba(0, 0, 0, 0.08));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover, 0 16px 40px rgba(0, 0, 0, 0.12));
}

.case-card--detailed .case-header {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.case-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.case-detail {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.case-detail-label {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #0f5bff;
}

.case-detail-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.15rem;
  line-height: 1.7;
  color: #000;
}

.section-subtitle {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  margin: 0;
  color: #000;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(4, 26, 82, 0.08);
}

.case-tag {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: #0f5bff;
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

.cases-section,
.cases-section * {
  font-family: var(--font-body, 'Roboto Mono', monospace) !important;
}

@media screen and (max-width: 991px) {
  .cases-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .case-card {
    padding: 1.75rem;
    gap: 1rem;
  }
}

/* ==========================================================================
   ABOUT SECTION
   ========================================================================== */

.about-section {
  padding: var(--section-py, 3rem) var(--section-px, 2rem);
  background-color: var(--bg-primary, #fff);
}

.about-content {
  width: 100%;
  margin-bottom: 3rem;
}

.about-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #000;
  margin: 0 0 1.5rem;
}

/* Vision block */
.about-vision {
  background: var(--bg-muted, #f8f9fa);
  border-radius: var(--radius-md, 1rem);
  padding: 3rem 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.about-vision-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-primary, #111);
  margin: 0;
}

/* Timeline */
.timeline {
  display: flex;
  gap: 0;
  margin-bottom: 3rem;
  position: relative;
  padding-top: 1rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--border-light, rgba(4, 26, 82, 0.08));
}

.timeline-item {
  flex: 1;
  padding: 1.5rem 1rem 0;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: -0.35rem;
  left: 1rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-accent, #0f5bff);
}

.timeline-year {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent, #0f5bff);
  margin-bottom: 0.5rem;
}

.timeline-text {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary, rgba(0, 0, 0, 0.7));
}

/* Products grid */
.about-products {
  margin-bottom: 3rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.product-card {
  background: var(--bg-primary, #fff);
  border: 1px solid var(--border-light, rgba(4, 26, 82, 0.08));
  border-radius: var(--radius-md, 1rem);
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  box-shadow: var(--shadow-card, 0 8px 24px rgba(0, 0, 0, 0.08));
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover, 0 16px 40px rgba(0, 0, 0, 0.12));
  border-color: rgba(15, 91, 255, 0.25);
}

.product-name {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-accent, #0f5bff);
  margin: 0 0 0.75rem;
}

.product-description {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary, rgba(0, 0, 0, 0.7));
  margin: 0;
}

/* Awards (compact) */
.about-awards {
  margin-bottom: 3rem;
}

.about-awards-title {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 1.5rem;
  color: var(--text-primary, #111);
}

.awards-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.award-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-light, rgba(4, 26, 82, 0.08));
}

.award-item:last-child {
  border-bottom: none;
}

.award-medal {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
}

.award-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.award-name {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary, #000);
}

.award-detail {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.85rem;
  color: var(--text-secondary, rgba(0, 0, 0, 0.7));
  text-decoration: none;
}

a.award-detail:hover {
  color: var(--color-accent, #0f5bff);
}

/* Badges */
.about-badges {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.badge-logo {
  max-width: 160px;
  height: auto;
}

.badge-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.badge-foundation {
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
  color: #111;
}

.badge-project {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  color: #475569;
  margin: 0;
  line-height: 1.5;
}

.badge-contract {
  font-family: var(--font-body, 'Roboto Mono', monospace);
  font-size: 0.75rem;
  color: #64748b;
  margin: 0;
}

.skolkovo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #e8f0fe 0%, #d2e3fc 100%);
  border: 1px solid rgba(15, 91, 255, 0.2);
  border-radius: 8px;
}

.skolkovo-badge-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  font-weight: 600;
  color: #1a73e8;
}

@media screen and (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 767px) {
  .about-section {
    padding: 2rem 1.5rem;
  }

  .about-text {
    font-size: 1.1rem;
  }

  .about-vision {
    padding: 2rem 1.5rem;
  }

  .about-vision-text {
    font-size: 1.25rem;
  }

  /* Timeline: vertical on mobile */
  .timeline {
    flex-direction: column;
    gap: 0;
    padding-top: 0;
    padding-left: 1.5rem;
  }

  .timeline::before {
    top: 0;
    bottom: 0;
    left: 0.35rem;
    right: auto;
    width: 2px;
    height: auto;
  }

  .timeline-item {
    padding: 0 0 2rem 1.5rem;
  }

  .timeline-item::before {
    top: 0.25rem;
    left: -1.15rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .about-badges {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .badge-item {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* ==========================================================================
   MEDIA MENTIONS
   ========================================================================== */

.media-mentions {
  padding: var(--section-py, 3rem) var(--section-px, 2rem);
  background-color: var(--bg-primary, #fff);
}

.media-mentions,
.media-mentions * {
  font-family: 'Roboto Mono', monospace !important;
}

.media-title {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2rem;
  color: #000;
  margin-bottom: 2rem;
}

.media-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(4, 26, 82, 0.12);
}

.media-container:last-of-type {
  border-bottom: none;
}

.media-name-title {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.media-name {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.media-logo {
  width: 84px;
  height: auto;
  filter: none;
  opacity: 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.media-collection {
  flex: 1;
}

.media-entry {
  display: flex;
  align-items: center;
}

.media-article a {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.15rem;
  line-height: 1.7rem;
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.media-article a:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.media-container:hover .media-logo {
  transform: scale(1.05);
}

@media screen and (max-width: 991px) {
  .media-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .media-name {
    flex: none;
  }

  .media-logo {
    width: 72px;
  }

  .media-article a {
    font-size: 0.96rem;
    line-height: 1.5rem;
  }
}

@media screen and (max-width: 767px) {
  .media-mentions {
    padding: 2rem 1.5rem 1.75rem;
  }

  .media-container {
    padding: 0.9rem 0;
  }

  .media-logo {
    width: 60px;
  }

  .media-article a {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
}

/* ==========================================================================
   BLOG
   ========================================================================== */

.blog {
  padding: var(--section-py, 3rem) var(--section-px, 2rem);
  background-color: var(--bg-primary, #fff);
}

.blog-title {
  font-family: 'Roboto Mono', monospace;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0 0 2rem;
  max-width: 1520px;
  width: 100%;
  color: #111;
}

.blog-status {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: #475569;
}

.blog-status--error {
  color: #dc2626;
}

.blog-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1520px;
  width: 100%;
}

.blog-card {
  background: var(--bg-primary, #fff);
  border-radius: var(--radius-md, 1rem);
  padding: var(--space-lg, 2rem);
  box-shadow: var(--shadow-card, 0 8px 24px rgba(0, 0, 0, 0.08));
  border: 1px solid var(--border-light, rgba(4, 26, 82, 0.08));
  display: flex;
  flex-direction: column;
  gap: var(--space-md, 1.5rem);
  font-family: var(--font-body, 'Roboto Mono', monospace);
  color: var(--text-primary, #000);
}

.blog-card-date {
  font-size: 0.95rem;
  color: #000;
  opacity: 0.8;
}

.blog-card-title {
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: #000;
}

.blog-card-title-link {
  text-decoration: none;
  color: inherit;
}

.blog-card-title-link:hover {
  color: var(--color-accent, #0f5bff);
}

.blog-card-description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #000;
}

.blog-card-link {
  font-weight: 600;
  text-decoration: none;
  color: #000;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: inherit;
}

.blog-card-link::after {
  content: '\2192';
  font-size: 1rem;
}

.blog-card-link:hover {
  color: var(--color-accent, #0f5bff);
}

.blog-card-read-more {
  font-size: 0.95rem;
}

.blog-card-read-more--cta {
  margin-top: 0.5rem;
  align-self: flex-start;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  background: #0f5bff;
  color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.blog-card-read-more--cta:hover {
  color: #fff;
  background: #0a47cc;
}

@media screen and (max-width: 767px) {
  .blog {
    padding: 1rem;
  }

  .blog-title {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .blog-card {
    padding: 1.75rem;
    gap: 1rem;
  }

  .blog-card-title {
    font-size: 1.4rem;
  }
}

/* ==========================================================================
   CONTACT / FOOTER
   ========================================================================== */

.contact-section--no-circle {
  min-height: auto;
}

.contact-section--no-circle .contacts {
  width: 100%;
}

.footer-inline {
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.footer-logo-inline {
  opacity: 0.9;
}

.footer-copyright-inline {
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  color: #000;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-inline {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

/* ==========================================================================
   PROJ SECTION (shared)
   ========================================================================== */

.proj-section .title {
  color: #111;
}
</style>
