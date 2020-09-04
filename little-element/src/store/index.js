import Vue from 'vue'
import Vuex from 'vuex'

import app from './module/app'
import errorLog from './module/errorLog'
import settings from './module/settings'
import tagView from './module/tagView'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    app,
    errorLog,
    settings,
    tagView
  }
})
