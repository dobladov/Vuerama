<template>
    <div class="Social">
      <a href="https://www.buymeacoffee.com/dobladov" target="_blank">
        <img class="coffee" src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg" alt="Buy Me A Coffee" >
      </a>
      <a href="https://github.com/dobladov/vuerama" target="_blank">
        <img class="github" src="https://img.shields.io/badge/GitHub-Dobladov-4844a3.svg?longCache=true&style=for-the-badge" alt="Buy Me A Coffee" >
      </a>
    </div>

</template>

<style lang="postcss" scoped>
@import '../css/variables.css';

.Social {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .coffee {
    height: 28px;
  }
}
</style>
