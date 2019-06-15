import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Kirill Ilinsky',
    date: '02.06.2019'
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
