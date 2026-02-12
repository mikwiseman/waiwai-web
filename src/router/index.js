import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import AiMarketplace from '@/views/AiMarketplace.vue'
import Manifesto from '@/views/Manifesto.vue'

const presentationRedirects = [
  {
    path: '/sales',
    name: 'sales-presentation-redirect',
    targetUrl: 'https://pitch.waiwai.diy/v/waiwai-ai-sales-qkjtuh'
  },
  {
    path: '/hr',
    name: 'hr-presentation-redirect',
    targetUrl: 'https://pitch.waiwai.diy/v/waiwai-ai-hr-aeg87h'
  },
  {
    path: '/agents',
    name: 'automation-presentation-redirect',
    targetUrl: 'https://pitch.waiwai.diy/v/waiwai-ai-86ppw9'
  },
  {
    path: '/trinity',
    name: 'custom-presentation-redirect',
    targetUrl: 'https://pitch.waiwai.diy/v/trinity-monsters-ai-gnjphp'
  },
]

const trackAndRedirect = (targetUrl, eventLabel) => {
  let redirected = false

  const redirect = () => {
    if (!redirected) {
      redirected = true
      window.location.replace(targetUrl)
    }
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'external_redirect', {
      event_category: 'presentation_redirect',
      event_label: eventLabel,
      destination_url: targetUrl,
      transport_type: 'beacon',
      event_callback: redirect
    })

    setTimeout(redirect, 500)
  } else {
    redirect()
  }
}

const externalRedirectRoutes = presentationRedirects.map(
  ({ path, name, targetUrl }) => ({
    path,
    name,
    beforeEnter: () => {
      if (typeof window !== 'undefined' && targetUrl) {
        trackAndRedirect(targetUrl, path)
        return false
      }

      return { name: 'home' }
    }
  })
)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ai-marketplace',
    name: 'ai-marketplace',
    component: AiMarketplace
  },
  {
    path: '/mikwiseman',
    name: 'telegram-redirect',
    beforeEnter: () => {
      const telegramUrl = 'https://t.me/mikwiseman'
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        let redirected = false
        const redirect = () => {
          if (!redirected) {
            redirected = true
            window.location.href = telegramUrl
          }
        }

        window.gtag('event', 'qr_link_visit', {
          event_category: 'qr_redirect',
          event_label: 'mikwiseman',
          transport_type: 'beacon',
          event_callback: redirect
        })

        setTimeout(redirect, 500)
      } else {
        window.location.href = telegramUrl
      }
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/waiuni',
    name: 'waiuni',
    component: () => import('@/views/WaiUni.vue')
  },
  {
    path: '/manifesto',
    name: 'manifesto',
    component: Manifesto
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('@/views/Research.vue')
  },
  ...externalRedirectRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router 
