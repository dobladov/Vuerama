<template>
  <section class="List">
    <ul>

      <li v-for="(video, i) in videos" :key="video.data.id" :class="{ 'selected': i === index }">
        <div
          class="notShown"
          v-if="video.data.thumbnail === 'nsfw' || video.data.thumbnail === 'spoiler'"
          @click.prevent="setVideo(i)"
        >
          <span>{{video.data.thumbnail}}</span>
        </div>
        <img
          v-else-if="(video.data.thumbnail
          && (video.data.thumbnail !== 'self'
            && video.data.thumbnail !== 'default'
            &&  video.data.thumbnail !== 'image')
          )| video.data.media"
          :src="(video.data.media && video.data.media.oembed && video.data.media.oembed.thumbnail_url) || video.data.thumbnail"
          :alt="video.data.title"
          @click.prevent="setVideo(i)"
        />
        <div class="info">
          <div class="title">
            <a @click.prevent="setVideo(i)" :href='baseUrl + video.data.permalink'>{{ video.data.title }}</a>
          </div>
          <div class="author">
            By: <a target="_blank" :href='baseUrl + "/u/" + video.data.author'>{{ video.data.author }}</a>
          </div>
          <div class="metadata">
            <a target="_blank" :href='baseUrl + video.data.permalink + "#siteTable_t3_" + video.data.id'>
              {{ video.data.num_comments }} Comments - {{ video.data.ups }} Upvotes
            </a>
          </div>
        </div>
      </li>
      <li class="loadMore" v-if="nextPage">
        <a
          :href='`${baseUrl}/r/${subreddit}/.json?after=${nextPage}`'
          @click.prevent='loadMore(`${baseUrl}/r/${subreddit}/.json?after=${nextPage}`)'
        >
          Load More
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['videos', 'nextPage', 'baseUrl', 'subreddit', 'index', 'loadMore', 'setVideo']
}
</script>


<style lang="postcss" scoped>
@import '../css/variables.css';

.List {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 2px;
  flex: 1;
  overflow: auto;

  & a {
    color: var(--text);

    &:hover,
    &:focus {
      color: var(--prominent);
    }
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow: auto;

    & li {
      padding: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid var(--buttonDark);
      transition: background-color .5s;
      background-color: var(--baseDakr);

      &:nth-child(even) {
        background-color: #302c56;
      }

      &:hover,
      &:focus {
        background-color: #413a7a;
      }

      &.selected {
          box-shadow: inset 0px 0px 13px -7px black;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background-color: var(--prominent);
        }
      }

      & img,
      & .notShown {
        width: 150px;
        min-width: 150px;
        max-width: 100%;
        text-align: center;
        cursor: pointer;

        & span {
          color: var(--prominent);
          font-size: 2rem;
          border: 2px solid var(--prominent);
          padding: 5px 10px;
          border-radius: 10px;
        }

        &:hover span {
          background-color: var(--prominent);
          color: var(--base);
        }
      }

      & .info {
        padding-left: 20px;
        flex: 1;

        & .title {
          font-size: 1.3rem;
        }

        & .author {
          padding: 5px 0;
          font-size: 1.1rem;
          color: #6c7f96;
        }

        & .metadata {
          padding-top: 10px;
          color: #abb8c8;
        }
      }

      &.loadMore {
        padding: 0;
        background-color: var(--prominentDark);

        & a {
          padding: 20px;
          font-size: 1.2rem;
          width: 100%;
          text-align: center;

          &:hover,
          &:focus {
            background-color: var(--prominent);
            color: var(--text);
          }
        }
      }
    }
  }
}
</style>
