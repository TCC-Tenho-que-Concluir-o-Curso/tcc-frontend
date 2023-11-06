import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - TCCUFCG',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/axiosAuth.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAnKuZNHhN6hljD47A5TEIhgaQYxbDoG9s',
          authDomain: 'tenho-que-concluir-o-curso.firebaseapp.com',
          projectId: 'tenho-que-concluir-o-curso',
          storageBucket: 'tenho-que-concluir-o-curso.appspot.com',
          messagingSenderId: '909458436148',
          appId: '1:909458436148:web:bdda3d8ac3abec91971a61',
        },
        services: {
          auth: {
            persistence: 'session',
            initialize: {
              // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChanged',
              subscribeManually: false,
            },
            // ssr: true,
            // emulatorPort: 9099,
            // emulatorHost: 'http://localhost',
          },
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:5001',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
    '/teste/': {
      target: 'http://icanhazip.com',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.blue.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken4,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.lighten2,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // routeRules: {
  //   '/testeapi': {
  //     proxy: { to: 'http://icanhazip.com' },
  //   },
  // },
}
