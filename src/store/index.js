import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userToken: "",
        email: '',
        password: '',
        verificationCode: '',
    },
    mutations: {
        addUser(state, userToken) {
            state.userToken = userToken;
        },
        changeEmail(state, username) {
            state.email = username;
        }
    },
    actions: {},
    modules: {}
})
