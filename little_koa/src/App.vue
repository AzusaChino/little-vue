<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body, html {
    color: #000;
    height: 100%;
  }

  #app {
    height: 100%;
  }

  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }

</style>
