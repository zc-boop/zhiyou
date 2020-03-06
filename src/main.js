import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../copy'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'
import Api from './api/index.js';
Vue.prototype.$api = Api;
Vue.config.productionTip = false;
Vue.use(Vant);
Vue.prototype.goTo = function (path) {
    this.$router.replace(path)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
