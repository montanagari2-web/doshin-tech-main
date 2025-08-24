export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
  ],
  css: ['~/assets/styles.css'],
  imports: {
    dirs: ['services', 'types'],
  },
  image: {
    dir: 'assets',
  },
})
