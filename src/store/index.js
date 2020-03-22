import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        username: "",
        userId: "",
        userInfo:[],
        messageCount: "",
        queryResultList: [],
        agree: {},
        noHeadPortrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1093847288,3038136586&fm=26&gp=0.jpg",
        provinceName:'',
        cityName:'',
    },
    mutations: {
        //储存登录后用户的用户名
        addUsername(state, username) {
            state.username = username
        },
        //用户信息
        addUserInfo(state,userInfo){
            state.userInfo = userInfo
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
        },
        //储存省名
        addProvinceName(state,provincename){
            state.provinceName=provincename
        },
        //储存市名
        addCityName(state,cityname){
            state.cityName=cityname
        }
    },
    actions: {

    },
    modules: {}
})
