const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Erick Sauri',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'apple-itunes-app', content: 'app-id=1360335414' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { name: 'apple-mobile-web-app-title', content: 'Erick Sauri' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'shortcut icon', href: '/logo.png' },
      { rel: 'apple-touch-icon', href: '/logo-ios.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,400i' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/intersection-observer', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],

  /**
   * Manifest JSON
   */
  manifest: {
    name: 'Erick Sauri',
    short_name: 'Erick Sauri',
    lang: 'en',
    background_color: '#070606',
    theme_color: '#e74c3c',
    start_url: '/',
    icons: [
      {
        src: '/logo-128x128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: '/logo-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/logo-152x152.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        src: '/logo-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
    related_applications: [
      {
        platform: 'play',
        id: 'com.tiptap',
        url: 'https://play.google.com/store/apps/details?id=com.tiptap',
      },
      {
        platform: 'itunes',
        url: 'https://itunes.apple.com/us/app/tiptap-tip-calculator/id1360335414',
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {},
  },
}
