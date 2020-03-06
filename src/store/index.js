import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email:'sdsadasd',
    password:'',
    verificationCode:'',
  },
  mutations: {
    changeEmail(state,username){
      state.email = username
    }
  },
  actions: {
  },
  modules: {
  }
})
