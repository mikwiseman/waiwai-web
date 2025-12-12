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
      title: 'WaiWai — AI-агенты для найма и рекрутинга',
      meta: [
        {
          name: 'description',
          content: 'AI-платформа, которая автоматизирует сорсинг, первичный контакт и сопровождение кандидатов. Закрывает вакансии быстрее и экономит часы HR-команды.'
        },
        {
          name: 'keywords',
          content: 'AI рекрутинг, автоматизация найма, цифровой рекрутер, HR технология, подбор персонала, AI для HR, поиск кандидатов, ATS автоматизация, автоматизированный сорсинг, автоматизация рекрутинга'
        },
        {
          property: 'og:title',
          content: 'WaiWai — AI-агенты для найма и рекрутинга'
        },
        {
          property: 'og:description',
          content: 'AI-платформа, которая автоматизирует сорсинг, первичный контакт и сопровождение кандидатов. Закрывает вакансии быстрее и экономит часы HR-команды.'
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
          content: 'WaiWai — AI-агенты для найма и рекрутинга'
        },
        {
          name: 'twitter:description',
          content: 'AI-платформа, которая автоматизирует сорсинг, первичный контакт и сопровождение кандидатов. Закрывает вакансии быстрее и экономит часы HR-команды.'
        },
        {
          name: 'language',
          content: 'ru'
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
