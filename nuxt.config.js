export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  serverMiddleware:['~/api/send-email.js'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/api.plugins.js",
    "~/plugins/jwt.plugins.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/apollo",
    "@nuxt/http"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.node = {
        fs:'empty',
        net:'empty',
        express: 'empty'
      }
    }
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:process.env.API_URL_GRAPHQL
      }
    }
  },
  env: {
    API_URL:process.env.API_URL,
    API_SENDGRID:process.env.API_SENDGRID,
    API_URL_GRAPHQL:process.env.API_URL_GRAPHQL
  }
}
