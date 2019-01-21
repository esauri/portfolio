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
