import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '../utils/index'
import api from '../utils/api'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex) // 安装vuex

const store = new Vuex.Store({
  state: {
    userData: {}
  },
  mutations: {
    'CHANGE_USER_DATA' (state, userData) {
      state.userData = userData
    }
  },
  actions: {
    getUserData (context) {
      fetch.get(api.getUserData).then(res => {
        context.commit('CHANGE_USER_DATA', res.data)
      })
    }
  },
  plugins: [
    createPersistedState({
      sessionstorage: {
        getItem: key => sessionStorage.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          sessionStorage.set(key, value, { expires: 3, secure: true }),
        removeItem: key => sessionStorage.remove(key)
      }
    })
  ]
})
export default store
