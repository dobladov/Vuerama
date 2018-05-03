<template>
  <section class="Video">

    <iframe
      v-if="currentVideo.url.includes('youtube.com/') || currentVideo.url.includes('youtu.be/')"
      width="100%"
      height="620"
      allow="autoplay; encrypted-media"
      allowfullscreen
      :src='"https://youtube.com/embed/" + youtubeParser(currentVideo.url) + "?autoplay=1"'
    >
    </iframe>

    <iframe
      v-else-if="currentVideo.url.includes('liveleak.com/')"
      width="100%"
      height="620"
      :src="`https://www.liveleak.com/ll_embed?i=${qs(currentVideo.url.split('?')[1])}`"
      frameborder="0"
      allowfullscreen>
    </iframe>

    <div
      v-else-if="currentVideo.url.endsWith(('.jpg'|| '.jpeg'))"
    >
      <img :src="currentVideo.url" :alt="currentVideo.url">
    </div>

    <div
      v-else-if="currentVideo.url.includes('imgur.com/') && currentVideo.url.includes('.gifv' || '.gif')"
    >

      <video v-if="currentVideo.url.endsWith('.gifv')" loop autoplay >
        <source type="video/mp4" :src="currentVideo.url.replace('gifv', 'mp4')">
      </video>

      <img v-else :src="currentVideo.url" :alt="currentVideo.title">

    </div>

    <div
      v-else-if="currentVideo.url.includes('media1.giphy.com/')"
    >
      <img :src="currentVideo.url" :alt="currentVideo.title">
    </div>

    <div
      v-else-if="currentVideo.url.endsWith('.gif')"
    >
      <img :src="currentVideo.url" :alt="currentVideo.title">
    </div>

    <div
      v-else-if="currentVideo.url.includes('gfycat.com/')"
    >

    <video :poster="`https://thumbs.gfycat.com/${currentVideo.url.split('/').pop()}-poster.jpg`" loop autoplay controls>
      <source id="webmSource" :src="`https://giant.gfycat.com/${currentVideo.url.split('/').pop()}.webm`" type="video/webm">
      <source id="mp4Source" :src="`https://giant.gfycat.com/${currentVideo.url.split('/').pop()}.mp4`" type="video/mp4">
    </video>
    </div>

    <div v-else>
      <div v-if="currentVideo.secure_media
        && currentVideo.secure_media.oembed
        && currentVideo.secure_media.oembed.html" v-html="htmlDecode(currentVideo.secure_media.oembed.html)" />
      <div
        class="text"
        v-else-if="currentVideo.selftext_html"
        v-html="htmlDecode(currentVideo.selftext_html)"
      />
      <div v-else>
        I can't play this format, here is the direct <a :href="currentVideo.url" target="_blank">link</a>
      </div>
    </div>

  </section>
</template>

<script>
const queryString = require('query-string')

export default {
  props: ['currentVideo'],
  methods: {
    qs(string) {
      const parsedString = queryString.parse(string)
      console.log(parsedString)
      return parsedString.t
    },
    youtubeParser(url) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
      const match = url.match(regExp);
      return (match && match[7].length==11)? match[7] : false;
    },
    htmlDecode(entites) {
      const doc = new DOMParser().parseFromString(entites, "text/html")
      return doc.documentElement.textContent
    }
  }
}
</script>

<style lang="postcss" scoped>
.Video {
  border-radius: 4px 4px 0 0;
  background-color: white;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  max-height: 80%;
  overflow: auto;

  & .text {
    padding: 20px;
    text-align: left;
  }

  & iframe {
    width: 100%;
    border-radius: 4px 4px 0 0;
    border: 0;
  }
}
</style>
