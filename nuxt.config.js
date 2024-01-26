export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Aquela sentada',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'project-identifier', content: '7dd9ad78-6b15-4bac-95a0-1ebf0598184a' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOriginIsolated: true,
      },
    ],
    script: [
      {
        src: 'https://cr244.infusionsoft.app/app/webTracking/getTrackingCode',
        type: 'text/javascript'
      },
      {
        src: 'https://cr244.infusionsoft.com/app/timezone/timezoneInputJs?xid=c67c58e6fd941267b313e84a31ea6e8a',
        type: 'text/javascript'
      },
      {
        src: 'https://cr244.infusionsoft.com/js/jquery/jquery-3.3.1.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cr244.infusionsoft.app/app/webform/overwriteRefererJs',
        type: 'text/javascript'
      },
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/gtm'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://vite.nuxtjs.org/
    'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm',
    'nuxt-facebook-pixel-module'
  ],

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '373287286411895',
    autoPageView: true,
    disabled: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // router:{
  //   base:"/obrigado-2/"
  // },
}
