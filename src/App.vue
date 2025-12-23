<template>
  <div id="app">
    <SiteToolbar />
    <div id="luxy">
      <router-view />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import SiteToolbar from '@/components/SiteToolbar.vue'

export default {
  name: 'App',
  components: {
    SiteToolbar
  },
  setup() {
    const metaTags = {
      title: 'WaiWai — AI Agents for Hiring and Recruiting',
      meta: [
        {
          name: 'description',
          content: 'AI platform that automates sourcing, initial outreach, and candidate nurturing. Fills positions faster and saves hours for your HR team.'
        },
        {
          name: 'keywords',
          content: 'AI recruiting, hiring automation, digital recruiter, HR technology, talent acquisition, AI for HR, candidate sourcing, ATS automation, automated sourcing, recruitment automation'
        },
        {
          property: 'og:title',
          content: 'WaiWai — AI Agents for Hiring and Recruiting'
        },
        {
          property: 'og:description',
          content: 'AI platform that automates sourcing, initial outreach, and candidate nurturing. Fills positions faster and saves hours for your HR team.'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://waiwai.is'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: 'WaiWai — AI Agents for Hiring and Recruiting'
        },
        {
          name: 'twitter:description',
          content: 'AI platform that automates sourcing, initial outreach, and candidate nurturing. Fills positions faster and saves hours for your HR team.'
        },
        {
          name: 'language',
          content: 'en'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://waiwai.is'
        }
      ]
    }

    useHead(metaTags)

    onMounted(() => {
      if (!/iPhone|iPad|Android/i.test(navigator.userAgent)) {
        window.luxy.init({
          wrapper: '#luxy',
          wrapperSpeed: 0.08,
        });
      }
    })
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
