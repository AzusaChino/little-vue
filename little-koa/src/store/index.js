import Vue from 'vue'
import Vuex from 'vuex'
import db from '../utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      _id: db.save('_id') || '',
      username: db.save('username') || '',
      token: db.save('token') || '',
      avatar: db.save('avatar') || ''
    }
  },
  mutations: {
    save (state, data) {
      state.user._id = data._id
      state.user.token = data.token
      state.user.username = data.username
      state.user.avatar = data.avatar

      db.set('_id', data._id)
      db.set('token', data.token)
      db.set('username', data.username)
      db.set('avatar', data.avatar)
    },
    remove (state) {
      state.user._id = ''
      state.user.token = ''
      state.user.username = ''
      state.user.avatar = ''

      db.del('_id', 'token', 'username', 'avatar')
    }
  },
  actions: {
  },
  modules: {
    // User
  }
})
