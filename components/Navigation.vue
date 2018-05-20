<template>
  <section class="Navigation">
    <button
      v-if="index > 0"
      @click="nextVideo(false)"
      title="Previous Video"
    >
      &lt;
    </button>
    <select @change="navigate" title="Select Subreddit">
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

    <button
      v-if="index < total"
      @click="nextVideo(true)"
      title="Next Video"
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
  position: relative;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 2px;

  & button,
  & select {
    padding: 15px;
    border: none;
    background-color: var(--prominentDark);
    color: var(--primary);
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align-last:center;

    &:hover,
    &:focus {
      background-color: var(--prominent);
    }
  }

  & button:first-child {
    border-right: 2px solid #ba394c;
  }

  & button:last-child {
    border-left: 2px solid #ba394c;
  }

  & select {
    flex: 1;
    text-align: center;
    -moz-appearance: none;
    color: var(--primary);
  }
}
</style>

