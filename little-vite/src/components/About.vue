<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'About',
    data() {
      return {
        msg: 'Hello Vue 3.0 + Vite!'
      }
    },
    setup() {}
  })
</script>
