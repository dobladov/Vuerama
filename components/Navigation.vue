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
        v-for="subReddit in subReddits"
        :value="subReddit.toLowerCase()"
        :key="subReddit"
        selected="subReddit === subreddit"
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

