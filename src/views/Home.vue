<template>
  <div class="smooth-scroll">
    <div
      id="home"
      class="hero-section"
    >
      <a
        href="https://calendly.com/mikwiseman/hi"
        target="_blank"
        class="contact-button down w-inline-block"
      >
        <div class="button-text">{{ content.hero.bookCall }}</div>
      </a>
      <div class="header">
        <a
          href="https://calendly.com/mikwiseman/hi"
          class="contact-button top w-inline-block"
        >
          <div class="button-text">{{ content.hero.bookCall }}</div>
        </a>
        <img
          src="@/assets/images/logo_01.svg"
          loading="lazy"
          height="92"
          alt=""
          class="hero-logo-horizontal"
        >
        <img
          src="@/assets/images/logo_01.svg"
          loading="lazy"
          height="92"
          alt=""
          class="hero-logo-vertical"
        >
      </div>
      <div class="mobile-buttons">
        <a
          href="https://calendly.com/mikwiseman/hi"
          target="_blank"
          class="contact-button mobile w-inline-block"
        >
          <div class="button-text">{{ content.hero.bookCall }}</div>
        </a>
      </div>
      <div class="bottom-text">
        <h1 class="heading">
          <span class="alpha-50">{{ content.hero.heading }}<br></span>
          <span>{{ content.hero.subheading }}</span>
        </h1>
      </div>
    </div>

    <!-- About Section (Russian only) -->
    <div
      v-if="isRussian"
      id="about"
      class="about-section"
    >
      <div class="about-content">
        <p
          v-for="(paragraph, index) in content.aboutSection.text"
          :key="index"
          class="about-text"
        >
          {{ paragraph }}
        </p>
        <p class="about-mission">
          {{ content.aboutSection.mission }}
        </p>
      </div>
    </div>

    <div class="sliding-content">
      <!-- РЕШЕНИЯ section - temporarily hidden -->
      <div
        v-if="false"
        id="agents"
        class="proj-section agents-section"
      >
        <div class="title-container">
          <div class="section-label">
            {{ content.sections.agents }}
          </div>
        </div>
        <div class="cases-grid">
          <template
            v-for="agent in localizedAgentCards"
            :key="agent.key"
          >
            <!-- Internal route card -->
            <router-link
              v-if="agent.route"
              :to="agent.route"
              class="case-card case-card--navigable"
            >
              <div class="case-header case-header--agent">
                <div class="case-header-content">
                  <h3 class="section-subtitle">
                    {{ agent.title }}
                  </h3>
                  <p>{{ agent.description }}</p>
                </div>
              </div>
              <span class="card-learn-more">{{ content.buttons.learnMore }} &rarr;</span>
            </router-link>
            <!-- External link card -->
            <a
              v-else-if="agent.presentationLink"
              :href="agent.presentationLink"
              target="_blank"
              rel="noopener noreferrer"
              class="case-card case-card--navigable"
            >
              <div class="case-header case-header--agent">
                <div class="case-header-content">
                  <h3 class="section-subtitle">
                    {{ agent.title }}
                  </h3>
                  <p>{{ agent.description }}</p>
                </div>
              </div>
              <span class="card-learn-more">{{ content.buttons.learnMore }} &rarr;</span>
            </a>
            <!-- Non-navigable card -->
            <div
              v-else
              class="case-card"
            >
              <div class="case-header case-header--agent">
                <div class="case-header-content">
                  <h3 class="section-subtitle">
                    {{ agent.title }}
                  </h3>
                  <p>{{ agent.description }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div
        v-if="isRussian"
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
                  <span class="case-detail-label">Задача:</span>
                  <span class="case-detail-text">{{ caseItem.task }}</span>
                </div>
                <div class="case-detail">
                  <span class="case-detail-label">Решение:</span>
                  <span class="case-detail-text">{{ caseItem.solution }}</span>
                </div>
                <div class="case-detail">
                  <span class="case-detail-label">Результат:</span>
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
    </div>

    <!-- Products Narrative (Russian only) -->
    <div
      v-if="isRussian"
      id="products"
      class="products-narrative"
    >
      <p
        class="products-text"
        v-html="productsNarrativeHtml"
      /><!-- eslint-disable-line vue/no-v-html -->
      <p class="products-manifesto">
        <router-link to="/manifesto">
          {{ content.manifesto.readManifesto }} &rarr;
        </router-link>
      </p>
    </div>

    <!-- Media Mentions Section -->
    <div
      v-if="isRussian"
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

    <!-- Awards section -->
    <div
      id="awards"
      class="awards"
    >
      <div class="dot-block">
        <div class="icon-container" />
      </div>
      <h1 class="heading-awards">
        {{ content.awardsSection.title }}
      </h1>
      <div
        v-for="award in content.awards"
        :key="award.name"
        class="awards-container"
      >
        <div class="award-name">
          <div class="awards-title">
            {{ award.name }}
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div :class="['medal-' + award.medal]" />
            <div class="awards-subtitle">
              <a
                v-if="award.link"
                :href="award.link"
              >{{ award.award }}</a>
              <span v-else>{{ award.award }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grant Support Section (Russian only) -->
    <div
      v-if="isRussian"
      id="grant-support"
      class="grant-support"
    >
      <h2 class="grant-support-title">
        {{ content.grantSection?.title }}
      </h2>
      <div class="grant-support-content">
        <div class="grant-support-item">
          <img
            src="@/assets/images/fasie-logo.svg"
            alt="Фонд содействия инновациям"
            class="grant-support-logo"
          >
          <div class="grant-support-text">
            <p class="grant-support-foundation">
              {{ content.grantSection?.foundationName }}
            </p>
            <p class="grant-support-project">
              {{ content.grantSection?.projectInfo }}
            </p>
            <p class="grant-support-contract">
              {{ content.grantSection?.contractNumber }}
            </p>
          </div>
        </div>
        <div class="grant-support-item grant-support-item--skolkovo">
          <div class="skolkovo-badge">
            <span class="skolkovo-badge-text">{{ content.grantSection?.skolkovo?.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Section -->
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

    const localizedAgentCards = computed(() => content.value.agentCards)

    // Product links for narrative section
    const productLinks = {
      WaiStore: 'https://waistore.io',
      WaiConnect: 'https://www.waiconnect.io/',
      WaiHub: 'https://waihub.io',
      WaiComputer: 'https://waicomputer.io'
    }

    // Convert {WaiStore}, {WaiConnect}, etc. into anchor tags
    const productsNarrativeHtml = computed(() => {
      const narrative = content.value.productsSection?.narrative || ''
      return narrative.replace(/\{(\w+)\}/g, (match, name) => {
        const link = productLinks[name]
        if (link) {
          return `<a href="${link}" target="_blank" rel="noopener noreferrer" class="product-inline-link">${name}</a>`
        }
        return name
      })
    })

    return {
      content,
      isRussian,
      localizedAgentCards,
      localizedMediaMentions,
      featuredBlogPosts,
      blogLoading,
      blogLoadFailed,
      blogInitialized,
      productsNarrativeHtml
    }
  }
})
</script>

<style scoped>
/* About section */
.about-section {
  padding: 3rem 2rem;
  background-color: #fff;
}

.about-content {
  width: 100%;
}

.about-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #000;
  margin: 0 0 1.5rem;
}

.about-mission {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.8;
  color: #000;
  margin: 2rem 0 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 767px) {
  .about-section {
    padding: 2rem 1.5rem;
  }

  .about-text {
    font-size: 1.1rem;
  }

  .about-mission {
    font-size: 1.1rem;
  }
}

/* Case card detailed styles */
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

/* Products narrative section */
.products-narrative {
  padding: 3rem 2rem;
  background-color: #fff;
}

.products-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.4rem;
  line-height: 1.9;
  color: #000;
  margin: 0 0 1.5rem;
}

.products-text :deep(.product-inline-link) {
  color: #0f5bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.products-text :deep(.product-inline-link:hover) {
  color: #0a47cc;
  text-decoration: underline;
}

.products-manifesto {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.4rem;
  margin: 0;
}

.products-manifesto a {
  color: #0f5bff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.products-manifesto a:hover {
  color: #0a47cc;
}

@media screen and (max-width: 767px) {
  .products-narrative {
    padding: 2rem 1.5rem;
  }

  .products-text {
    font-size: 1.2rem;
  }

  .products-manifesto {
    font-size: 1.2rem;
  }
}

/* Skolkovo badge */
.grant-support-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.grant-support-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
  font-family: 'Inter Tight', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1a73e8;
}

.copyright-text {
  position: absolute;
  right: 24px;
  bottom: 24px;
  font-family: 'Courier', monospace;
  font-size: 14px;
  color: var(--deep-blue-bright, #8fb2ff);
  opacity: 0.8;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 400;
}

.contact-button-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: var(--wai-hero-gradient, linear-gradient(180deg, #000000 0%, #050f2f 55%, #0f5bff 100%));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 0 60px 140px rgba(6, 18, 59, 0.55);
  border: 1px solid rgba(15, 91, 255, 0.3);
}

.contact-button-circle:hover {
  transform: translate(-50%, -50%) scale(1.05);
}

.contact-button-circle:hover .button-text-circle {
  transform: rotate(5deg);
}

.button-text-circle {
  font-family: 'Courier', monospace;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  transition: transform 0.5s ease;
  color: #fff;
}

.form-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #020202;
  overflow: hidden;
}

.foot-logo-container {
  position: absolute;
  left: 24px;
  bottom: 24px;
}

.offer-section {
  padding: 40px 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
}

.offer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.offer-link {
  display: inline-block;
  padding: 16px 32px;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.offer-link:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  margin: 0;
}

.footer-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: rgba(255, 255, 255, 1);
}

/* Grant Support section styles */
.grant-support {
  padding: 4rem clamp(1rem, 3vw, 2.25rem);
  background-color: #f8f9fa;
  text-align: center;
}

.grant-support-title {
  font-family: Inter Tight, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #000;
}

.grant-support-logo {
  max-width: 200px;
  height: auto;
}

.grant-support-text {
  text-align: center;
}

.grant-support-foundation {
  font-family: Inter Tight, sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  margin: 0 0 0.75rem 0;
  color: #000;
}

.grant-support-project {
  font-family: Inter Tight, sans-serif;
  font-size: 0.875rem;
  color: #475569;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
}

.grant-support-contract {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.75rem;
  color: #64748b;
  margin: 0;
}

/* Blog styles */
.blog {
  padding: 2rem;
  background-color: #fff;
}

.blog-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0 0 2rem;
  max-width: 1520px;
  width: 100%;
  color: #000;
}

.blog-status {
  font-family: Inter Tight, sans-serif;
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
  background: #fff;
  border-radius: 1.75rem;
  padding: 2.25rem;
  box-shadow: 0 20px 40px rgba(8, 34, 120, 0.08);
  border: 1px solid rgba(4, 26, 82, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: 'Roboto Mono', monospace;
  color: #000;
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
  color: #2563eb;
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
  color: #2563eb;
}

.blog-card-read-more {
  font-size: 0.95rem;
}

.blog-card-read-more--cta {
  margin-top: 0.5rem;
  align-self: flex-start;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  background: #000;
  color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.blog-card-read-more--cta:hover {
  color: #fff;
  background: #2563eb;
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

.proj-section .title {
  color: #02102a;
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

@media screen and (min-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.section-subtitle {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  margin: 0;
  color: #000;
}

.scenario-text p {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}



.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
  margin-top: 2.25rem;
}

.agents-section {
  margin-bottom: 4rem;
}

.agents-section,
.agents-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.cases-section,
.cases-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.team-section,
.team-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.media-mentions,
.media-mentions * {
  font-family: 'Roboto Mono', monospace !important;
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

/* Navigable (clickable) agent cards */
.case-card--navigable {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.case-card--navigable:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 28px 56px rgba(8, 34, 120, 0.16);
  border-color: rgba(15, 91, 255, 0.25);
}

.case-card--navigable:active {
  transform: translateY(-1px) scale(1.005);
  box-shadow: 0 20px 40px rgba(8, 34, 120, 0.1);
}

.case-card--navigable:focus-visible {
  outline: 2px solid #0f5bff;
  outline-offset: 2px;
}

.card-learn-more {
  font-family: "Inter Tight", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #0f5bff;
  transition: transform 0.2s ease;
  display: inline-block;
}

.case-card--navigable:hover .card-learn-more {
  transform: translateX(4px);
}

.case-header p {
  font-family: Inter, sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(4, 26, 82, 0.72);
  margin: 0;
}

.case-header--agent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.case-header-content {
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

.case-header--agent .contact-button-card {
  margin-top: 0.35rem;
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

@media screen and (max-width: 767px) {
  .case-header--agent {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-button-card {
    width: 100%;
    justify-content: center;
  }
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
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

.team-section {
  padding: 4rem 2rem 2.5rem;
  background-color: #fff;
}

.team-section .title {
  color: #02102a;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
  justify-items: center;
}

.team-card {
  width: 100%;
  max-width: 360px;
  background: #ffffff;
  border-radius: 1.75rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgba(4, 26, 82, 0.06);
  box-shadow: 0 20px 40px rgba(8, 34, 120, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 60px rgba(8, 34, 120, 0.12);
}

.team-photo-wrapper {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 1.25rem;
  overflow: hidden;
  background: #0f0428;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.team-card:hover .team-photo {
  transform: scale(1.05);
}

.team-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.team-name {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #02102a;
}

.team-role {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(8, 12, 54, 0.65);
}

.team-description {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.72);
  margin: 0;
}

@media screen and (max-width: 991px) {
  .scenarios-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .scenario-module {
    padding: 1.5rem 1.25rem;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .case-card {
    padding: 1.75rem;
    gap: 1rem;
  }

  .team-section {
    padding: 3rem 1.5rem;
  }

  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .team-card {
    padding: 1.75rem;
    max-width: 320px;
  }

  .team-photo-wrapper {
    aspect-ratio: 1 / 1;
  }

}

/* Media Mentions Section */
.media-mentions {
  padding: 2.25rem 2rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid var(--border);
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

/* Mobile layout styles */
.mobile-buttons {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.contact-button.mobile {
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  border: 1px solid rgba(15, 91, 255, 0.35);
  box-shadow: 0 16px 40px rgba(5, 16, 59, 0.4);
  position: static;
  margin: 0;
}

.contact-button.top,
.contact-button.down {
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  border: 1px solid rgba(15, 91, 255, 0.35);
  box-shadow: 0 16px 40px rgba(5, 16, 59, 0.4);
}

.contact-button .button-text,
.mobile-buttons .button-text {
  color: #fff;
}

.hero-logo-vertical {
  display: none;
  object-position: 50% 50%;
  flex: 1;
  height: auto;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 991px) {
  .hero-logo-horizontal {
    display: none;
  }

  .hero-logo-vertical {
    display: block;
  }

  .header {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .contact-button.top {
    display: none;
  }

  .contact-button.down {
    display: none;
  }

  .mobile-buttons {
    display: flex;
  }

  .mobile-buttons .contact-button.mobile {
    width: 16rem;
    height: 4rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
  }

  .mobile-buttons .button-text {
    font-size: 1rem;
    line-height: 1rem;
    position: static;
  }
}

@media screen and (max-width: 479px) {
  .hero-logo-vertical {
    width: 100%;
  }

  .mobile-buttons .contact-button.mobile {
    width: 14rem;
    height: 3.5rem;
  }

  .mobile-buttons .button-text {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
}

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
  font-family: 'Courier', monospace;
  font-size: 14px;
  color: #000;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}

.org-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

@media (max-width: 768px) {
  .footer-inline {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
