const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const path = require('path')
const PrerenderPlugin = require('@prerenderer/webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    const plugins = [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
    ]

    // Only add prerender plugin in production AND not on Vercel (Vercel doesn't have Puppeteer dependencies)
    const isVercel = process.env.VERCEL === '1'
    if (process.env.NODE_ENV === 'production' && !isVercel) {
      plugins.push(
        new PrerenderPlugin({
          routes: ['/', '/blog', '/ai-marketplace'],
          rendererOptions: {
            maxConcurrentRoutes: 1,
            renderAfterTime: 5000,
          },
          postProcess(renderedRoute) {
            // Add data-server-rendered attribute to indicate prerendered content
            renderedRoute.html = renderedRoute.html.replace(
              '<div id="app">',
              '<div id="app" data-server-rendered="true">'
            )
            return renderedRoute
          }
        })
      )
    }

    return { plugins }
  },
  pwa: {
    iconPaths: {
      favicon32: 'public/favicon-32x32.png',
      favicon16: 'public/favicon-16x16.png',
      appleTouchIcon: 'public/apple-touch-icon.png',
      maskIcon: 'public/android-chrome-192x192.png',
      msTileImage: 'public/android-chrome-512x512.png'
    }
  }
}) 