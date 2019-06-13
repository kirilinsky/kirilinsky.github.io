import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Kirill',
    date: '10.04.2018'
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getName(state){
      return state.name
    },
    getDate(state){
      return state.date
    }
  }
})
