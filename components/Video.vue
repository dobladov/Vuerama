<template>
  <section class="Video">

    <div
    class="text self"
      v-if="currentVideo.is_self && currentVideo.is_video === false"
    >
      {{currentVideo.title}}
    </div>

    <iframe
      v-else-if="currentVideo.url.includes('youtube.com/') || currentVideo.url.includes('youtu.be/')"
      width="100%"
      height="100%"
      allow="autoplay; encrypted-media"
      allowfullscreen
      :src='"https://youtube.com/embed/" + youtubeParser(currentVideo.url) + "?autoplay=1"'
    >
    </iframe>

    <iframe
      v-else-if="currentVideo.url.includes('vimeo.com/')"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen
      autoplay
      :title="currentVideo.title"
      :src="`https://player.vimeo.com/video/${currentVideo.url.split('/').pop()}`"
    >
    </iframe>

    <iframe
      v-else-if="currentVideo.url.includes('liveleak.com/')"
      width="100%"
      height="100%"
      :src="`https://www.liveleak.com/ll_embed?i=${qs(currentVideo.url.split('?')[1])}`"
      frameborder="0"
      allowfullscreen>
    </iframe>

    <div
      v-else-if="currentVideo.url.includes('imgur.com/')"
    >

      <video v-if="currentVideo.url.endsWith('.gifv')" loop autoplay >
        <source type="video/mp4" :src="currentVideo.url.replace('gifv', 'mp4')">
      </video>

      <img v-else :src="`http://i.imgur.com/${currentVideo.url.split('/').pop()}.jpg`" :alt="currentVideo.title">
    </div>

    <div
      v-else-if="
      currentVideo.url.includes('.jpg')
      || currentVideo.url.includes('.jpeg')
      || currentVideo.url.includes('.png')
      || currentVideo.url.includes('.gif')
      || currentVideo.url.includes('media1.giphy.com/')"
    >
      <img :src="currentVideo.url" :alt="currentVideo.url">
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
      <div v-else class="invalid">
        I can't play this format, try the direct <a :href="currentVideo.url" target="_blank">link</a>
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
@import '../css/variables.css';

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
  padding-top: 56.25%;
  position: relative;
  box-shadow: 0px 0px 13px -7px black;

  & div,
  & iframe,
  & img,
  & video {
    position: absolute;
    top: 0; left: 0;
    border: 0;
    width: 100%;
    height: 100%;
    max-height:100%;
    border-radius: 4px 4px 0 0;
    border: 0;
    object-fit: contain;
  }

  & .text {
    padding: 30px;
    text-align: left;

    &.self {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 3rem;
    }
  }

  & .invalid {
    padding: 30px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & a {
      display: block;
      padding-left: 10px;
      font-weight: bold;
      color: var(--action);
    }
  }
}
</style>
