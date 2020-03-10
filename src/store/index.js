import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        username: "",
        userId: "",
        messageCount: "",
        queryResultList: [],
        agree: {}
    },
    mutations: {
        //储存登录后用户的用户名
        addUsername(state, username) {
            state.username = username
        },
        //储存登录后用户的id
        addUserId(state, userId) {
            state.userId = userId
        },
        //储存登录后用户的消息条数
        addMessageCount(state, messageCount) {
            state.messageCount = messageCount
        },
        addQueryResultList(state, queryResultList) {
            state.queryResultList = queryResultList
        },
        addAgree(state, agree) {
            state.agree = agree
        }
    },
    actions: {},
    modules: {}
})
