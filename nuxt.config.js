export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Urbanet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLE_API_KEY + '&libraries=places'
      }
    ]
  },

  loading: { color: '#3B8070', height: '4px', duration: 5000 },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src:'~/plugins/core-components.js'},
    {src: '~/plugins/init-client', mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:1337'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/local', method: 'post', propertyName: 'jwt' },
          user: false
        },
        autoFetchUser: false
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:1337',
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY
  },

  bootstrapVue: {
    icons: true
  },

  css: [
    '~assets/styles/main.scss'
  ],

  styleResources: {
    scss: [
    ]
  }
}
