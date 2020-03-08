import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userToken: "",
    },
    mutations: {
        addUser(state, userToken) {
            state.userToken = userToken;
        }
    },
    actions: {},
    modules: {
    }
})
