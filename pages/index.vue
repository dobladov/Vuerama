<template>
  <section class="wrapper">

      <main>
        <Video :currentVideo='currentVideo' />
        <Title
          :title='currentVideo.title'
          :link='currentVideo.permalink'
          :url='currentVideo.url'
          :baseUrl='baseUrl'
          :flair='currentVideo.link_flair_text'
        />
      </main>

      <aside>
        <Navigation
          :index='index'
          :subreddit='subreddit'
          :baseUrl='baseUrl'
          :total='data.children.length -1'
          :nextVideo='nextVideo'
        />
        <List
          :videos='data.children'
          :nextPage='data.after'
          :baseUrl='baseUrl'
          :subreddit='subreddit'
          :index='index'
          :setVideo='setVideo'
          :loadMore='loadMore'
        />
      </aside>

  </section>
</template>

<script>
import axios from 'axios'

import Video from '~/components/Video.vue'
import Title from '~/components/Title.vue'
import Navigation from '~/components/Navigation.vue'
import List from '~/components/List.vue'
const baseUrl = 'https://www.reddit.com'

export default {

  async asyncData ({route}) {
    const subreddit = (route.query && route.query.r) || 'videos'
    const { data } = await axios.get(`${baseUrl}/r/${subreddit}/.json`)

    const currentVideo = data.data.children[0].data

    console.log("call async data")

    return {
      baseUrl,
      subreddit,
      data: data.data,
      currentVideo,
      index: 0
    }
  },

  components: {
    Video,
    Title,
    Navigation,
    List
  },

  methods: {
    async loadMore(url) {
      const { data } = await axios.get(url)
      let obj =  JSON.parse(JSON.stringify(this.data))
      obj.after = data.data.after
      obj.children = obj.children.concat(data.data.children)
      this.data = obj
    },
    setVideo(index) {
      this.index = index
      this.currentVideo = this.data.children[index].data
    },
    nextVideo(increment) {
      this.index = increment ? this.index+=1 : this.index-=1
      this.currentVideo = this.data.children[this.index].data
    },
    async loadSubReddit(to) {

      const subreddit = (to.query && to.query.r) || 'videos'
      const { data } = await axios.get(`${baseUrl}/r/${subreddit}/.json`)

      const currentVideo = data.data.children[0].data

      console.log(data, currentVideo)
      this.subreddit = subreddit
      this.data = data.data
      this.currentVideo = currentVideo
      this.index = 0
    }
  },
  watch: {
    '$route': 'loadSubReddit'
  }
}
</script>

<style lang="postcss" scoped>
@import '../css/variables.css';

.wrapper {
  padding: 20px;
  height: 100vh;
  max-height: 100vh;
  display: flex;

  & main {
    flex: 2;
    margin-right: 20px;
  }

  & aside {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1200px) {
    display: block;
    padding: 0;

    & main {
      margin-right: 0;
    }

    & aside {
      position: relative;
      top: -2px;
    }
  }
}
</style>
