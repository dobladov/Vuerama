<template>
    <div class="Title">
    <div class="mainTitle" >
      <a target="_blank" :href='baseUrl + link' title="Open on Reddit">{{flair ? title.replace(`[${flair}]`, '') : title}}</a>
      <span
        v-if="flair"
        class="flair"
      >{{flair}}</span>
    </div>
    <a target="_blank" :href='url' class="externalLink" title="Original Link">
      <img src="~/assets/link.svg" alt="Link">
    </a>
    </div>
</template>

<script>
export default {
  props: ['title', 'link', 'url', 'baseUrl', 'flair']
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

    & a {
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
