<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="postcss">
html {
  font-size: 16px;
  background-image: url('~/assets/round.png'), linear-gradient(to bottom,#eef2f3,#8e9eab);
  font-size:16px;
  font-family:futura-pt,sans-serif,sans-serif;
  color:#3c3c3c;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--primary);

  &:hover,
  &:focus {
    color: #fe8698;
  }
}

pre {
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: var(--primary);
  padding: 10px;
  border-radius: 50%;
  color: var(--secondary);

  &:hover {
    background-color: var(--action);
  }
}
</style>
