const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'apple-itunes-app', content: 'app-id=1360335414' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'shortcut icon', href: '~/assets/images/icons/logo.png' }
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
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

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
