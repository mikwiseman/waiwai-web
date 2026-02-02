<template>
  <div id="app">
    <SiteToolbar />
    <div id="luxy">
      <router-view />
    </div>
    <EventModal
      :is-open="eventModalOpen"
      @close="eventModalOpen = false"
    />
  </div>
</template>

<script>
import { computed, onMounted, provide, ref } from 'vue'
import { useHead } from '@vueuse/head'
import SiteToolbar from '@/components/SiteToolbar.vue'
import EventModal from '@/components/EventModal.vue'
import { useLocale } from '@/composables/useLocale'
import { getLocaleContent } from '@/locales'

export default {
  name: 'App',
  components: {
    SiteToolbar,
    EventModal
  },
  setup() {
    const { locale, getCanonicalUrl } = useLocale()

    const eventModalOpen = ref(false)
    const openEventModal = () => {
      eventModalOpen.value = true
    }
    provide('openEventModal', openEventModal)

    const content = computed(() => getLocaleContent(locale.value, 'app'))

    const metaTags = computed(() => ({
      title: content.value.meta.title,
      htmlAttrs: {
        lang: content.value.meta.language
      },
      meta: [
        {
          name: 'description',
          content: content.value.meta.description
        },
        {
          name: 'keywords',
          content: content.value.meta.keywords
        },
        {
          property: 'og:title',
          content: content.value.meta.title
        },
        {
          property: 'og:description',
          content: content.value.meta.description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: getCanonicalUrl()
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: content.value.meta.title
        },
        {
          name: 'twitter:description',
          content: content.value.meta.description
        },
        {
          name: 'language',
          content: content.value.meta.language
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: getCanonicalUrl()
        }
      ]
    }))

    useHead(metaTags)

    onMounted(() => {
      if (!/iPhone|iPad|Android/i.test(navigator.userAgent) && window.luxy) {
        window.luxy.init({
          wrapper: '#luxy',
          wrapperSpeed: 0.08,
        });
      }
    })

    return {
      eventModalOpen
    }
  }
}
</script>

<style>
@import '@/assets/css/normalize.css';
@import '@/assets/css/webflow.css';
@import '@/assets/css/waiwaidiy.webflow.css';
@import '@/assets/css/deep-blue-overrides.css';

/* Other styles */
.logo-card-whoverp .logo-image-media {
  filter: none;
  opacity: 100%;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.bg-gradient:tiny {
  filter: blur(100px);
  -webkit-filter: blur(100px);
}

#luxy {
  padding-top: 84px;
}

@media (max-width: 600px) {
  #luxy {
    padding-top: 120px;
  }
}
</style>
