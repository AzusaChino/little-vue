<template>
  <div id="app">
    <Clock />
    <router-view />
  </div>
</template>

<script>
import Clock from '@/learning/Clock'

export default {
  name: 'App',
  comments: { Clock }
}
</script>
