<template>
  <section class="Navigation">
    <button
      v-if="index > 0"
      @click="nextVideo(false)"
    >
      &lt;
    </button>
    <select @change="navigate">
    <!-- <select @change="navigate(`/?r=${subReddit}`)"> -->
      <option
        v-if="!subReddits.map(sub => sub.toLowerCase().split(' ').join('')).includes(subreddit.toLowerCase())"
        value="subreddit"
        :selected="subreddit"
      >
        {{subreddit}}
      </option>
      <option
        v-for="subReddit in subReddits"
        :value="subReddit.toLowerCase().split(' ').join('')"
        :key="subReddit"
        :selected="subReddit.toLowerCase().split(' ').join('') === subreddit"
      >
        {{ subReddit }}
      </option>
    </select>

    <!-- <button @click="navigate(`/?r=youtubehaiku`)">
      go
    </button> -->

    <button
      v-if="index < total"
      @click="nextVideo(true)"
    >
      &gt;
    </button>
  </section>
</template>

<script>
import subReddits from './subReddits'

export default {
  props: ['index', 'subreddit', 'baseUrl', 'total', 'nextVideo'],
  data () {
    return { subReddits }
  },
  methods : {
    navigate(el) {
      const sub = el.target.value.replace(/\s/g, '').toLowerCase()
      $nuxt.$router.push(`/?r=${sub}`)
    }
  }
}
</script>


<style lang="postcss" scoped>
@import '../css/variables.css';

.Navigation {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 4px #777;
  position: relative;
  width: 100%;

  & button,
  & select {
    padding: 15px;
    border: none;
    background-color: var(--base);
    color: var(--primary);
    font-weight: bold;
    text-transform: capitalize;

    &:hover,
    &:focus {
      background-color: var(--secondary);
    }
  }

  & button:first-child {
    border-right: 2px solid var(--secondary);
  }

  & button:last-child {
    border-left: 2px solid var(--secondary);
  }

  & select {
    flex: 1;
    text-align: center;
    -moz-appearance: none;
    color: var(--primary);
  }
}
</style>

