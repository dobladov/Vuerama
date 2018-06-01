<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="postcss">
@import '../css/variables.css';

html {
  font-size: 16px;
  font-size:16px;
  font-family:futura-pt,sans-serif,sans-serif;
  color: var(--text);
  background-color: var(--base);
  background-image: url('~/assets/round.png'), linear-gradient(to bottom,#eef2f3,#8e9eab);
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--baseDakr);

  &:hover,
  &:focus {
    color: var(--prominent);
  }
}

pre {
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

iframe {
  padding: 0;
  margin: 0;
  overflow:hidden;
  border: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
}

</style>
