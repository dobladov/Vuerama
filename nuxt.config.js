module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SnooVideo - Subreddit Video Player',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Reddit,video,player,Subreddit,Subreddits' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
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
    description: "Subreddit video player - Watch videos from Reddit with an easy to use interface that allows you to navigate the best subreddits",
  },
  /*
  ** Build configuration\
  */
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
          features: {
            'nesting-rules': true,
            'custom-media-queries': true,
            'color-mod-function': true
          }
        },
      }
    },
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
