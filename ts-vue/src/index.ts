import Vue from 'vue'
import Hello from './components/Hello.vue';

// let App = new Vue({
//   el: '.app',
//   data: {
//     name: 'TypeScript'
//   },
//   template: '<h1>Hello {{ name }}</h1>'
// })

let App = new Vue({
  el: '.app',
  components: {
    Hello
  },
  data: {
    name: 'TypeScript'
  },
  template: '<Hello />'
})
