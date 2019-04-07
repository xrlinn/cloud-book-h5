import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '../utils/index'
import api from '../utils/api'

Vue.use(Vuex) // 安装vuex

const store = new Vuex.Store({
  state: {
    userMsg: {}
  },
  mutations: {
    'CHANGE_USER_MSG' (state, userMsg) {
      state.userMsg = userMsg
      }
  },
  actions: {
    getUserData (context) {
      fetch.get(api.getUserData).then(res => {
        context.commit('CHANGE_USER_MSG', res.data)
      })
    }
  }
})

export default store