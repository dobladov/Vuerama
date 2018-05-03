<template>
    <div class="Title">
    <a target="_blank" :href='baseUrl + link'>{{title}}</a>
    <a target="_blank" :href='url' class="externalLink">
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
  background-color: var(--base);
  position: relative;
  color: var(--text);
  border-radius: 0 0 2px 2px;
  box-shadow: rgb(119, 119, 119) 0px 1px 4px;

  & a {
    font-size: 1.5rem;
  }

  & .externalLink {
    & img {
      width: 50px;
      height: 50px;
      background-color: var(--primary);
      padding: 10px;
      border-radius: 50%;
    }

    &:hover img,
    &:focus img {
      background-color: var(--action);
    }
  }
}

</style>
