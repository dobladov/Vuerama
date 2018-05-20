module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SnooVideo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  mode: 'spa',
  modules: [
    '@nuxtjs/pwa',
  ],

  manifest: {
    name: 'SnooVideo',
    dir: 'ltr',
    display: 'standalone',
    short_name: 'SnooVideo',
    lang: 'en',
    author: '@dobladov',
    theme_color: '#fff',
    description: "Subreddit video player",
  },
  /*
  ** Build configuration\
  */
  build: {
    /*
    ** Run ESLint on save
    */

    postcss: [
      require('postcss-import')(),
      require('postcss-cssnext')()
    ],

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
