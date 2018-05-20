<template>
    <div class="Title">
    <a target="_blank" :href='baseUrl + link' title="Open on Reddit">{{title}}</a>
    <a target="_blank" :href='url' class="externalLink" title="Original Link">
      <img src="~/assets/link.svg" alt="Link">
    </a>
    </div>
</template>

<script>
export default {
  props: ['title', 'link', 'url', 'baseUrl']
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

  & a {
    font-size: 1.5rem;
    color: var(--text);

    &:hover,
    &:focus {
      color: var(--prominent);
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
}

</style>
