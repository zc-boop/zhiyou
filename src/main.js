import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible';
import swal from 'sweetalert'
import axios from 'axios';
import https from "./https.js";
import VueJsonp from 'vue-jsonp'

Vue.prototype.$axios = axios;
import QS from 'qs'

Vue.prototype.qs = QS;
Vue.use(VueJsonp)
Vue.use(Vant, axios, swal, https);
Vue.config.productionTip = false;
Vue.prototype.goTo = function (path) {
    this.$router.replace(path)
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
