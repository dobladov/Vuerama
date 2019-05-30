<template>
    <div class="Title">
    <div class="mainTitle" >
      <a
        v-if="currentVideo.title"
        target="_blank"
        :href="`${baseUrl}${currentVideo.permalink}`" title="Open on Reddit">{{currentVideo.flair ? currentVideo.title.replace(`[${currentVideo.flair}]`, '') : currentVideo.title}}
      </a>
      <span v-else>
        There must be a network problem &#9889;
      </span>
      <span
        v-if="currentVideo.flair"
        class="flair"
      >{{currentVideo.flair}}</span>
    </div>
    <a v-if="currentVideo.url" target="_blank" :href='currentVideo.url' class="externalLink" title="Original Link">
      <img src="~assets/link.svg" alt="Link">
    </a>
    </div>
</template>

<script>
export default {
  props: ['currentVideo', 'baseUrl']
}
</script>


<style lang="postcss" scoped>
@import '../css/variables.css';

.Title {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--baseDakr);
  position: relative;
  color: var(--text);
  border-radius: 0 0 5px 5px;
  box-shadow: rgb(119, 119, 119) 0px 1px 4px;

  & .mainTitle {
    display: flex;
    align-itmes: center;
    flex-wrap: wrap;

    & a,
    & span:first-child {
      font-size: 1.5rem;
      color: var(--text);
      margin-right: 10px;

      &:hover,
      &:focus {
        color: var(--prominent);
      }
    }

    & .flair {
      color: var(--prominent);
      border: 2px solid var(--prominent);
      padding: 5px 10px;
      border-radius: 10px;
    }
  }


  & .externalLink {
    & img {
      width: 50px;
      height: 50px;
      background-color: var(--buttonDark);
      padding: 10px;
      border-radius: 50%;
    }

    &:hover img,
    &:focus img {
      background-color: var(--button);
    }
  }

  @media screen and (max-width: 600px) {
    & .flair {
      margin-top: 10px;
    }
  }
}

</style>
