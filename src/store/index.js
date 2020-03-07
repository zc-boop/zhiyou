import Vue from 'vue'
import Vuex from 'vuex'
// import register from "./modules/register";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userToken: "",
        // email: 'sdsadasd',
        // password: '',
        // verificationCode: '',
    },
    mutations: {
        addUser(state, userToken) {
            state.userToken = userToken;
        },
        // changeEmail(state, username) {
        //     state.email = username
        // }
    },
    actions: {},
    modules: {
        // register:register
    }
})
