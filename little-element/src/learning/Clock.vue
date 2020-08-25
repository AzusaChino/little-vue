<template>
  <div>
    {{ log("render") }}
    {{ now }}
    <button @click="start !== start">{{ start ? "stop" : "start" }}</button>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Clock',
  data: function() {
    this.moment = moment
    this.log = window.console.log
    return {
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      start: false
    }
  },
  watch: {
    start() {
      this.startClock()
    }
  },
  beforeCreate() {
    console.log('before create')
  },
  created() {
    this.log('created')
  },
  beforeMount() {
    this.log('before mount')
  },
  mounted() {
    this.log('mounted')
  },
  beforeUpdate() {
    this.log('before update')
  },
  updated() {
    this.log('updated')
  },
  beforeDestroy() {
    this.log('before destroy')
    clearInterval(this.clockInterval)
  },
  destroyed() {
    this.log('destroyed')
  },
  methods: {
    startClock() {
      clearInterval(this.clockInterval)
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>

</style>
