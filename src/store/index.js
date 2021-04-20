import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    submitData: {},
  },
  getters: {
    submitData(state) {
      state.submitData = JSON.parse(localStorage.getItem('submitData'))
      return state.submitData
    },
  },
  mutations: {
    submitData(state, msg) {
      localStorage.setItem('submitData', JSON.stringify(msg))
      state.submitData = msg
    },
  }
})

export default store
