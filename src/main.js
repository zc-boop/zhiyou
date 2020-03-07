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
};

/*router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (store.state.userToken) { // 通过vuex state获取当前的token是否存在
            next();
        } else {
            alert("请先登录");
            next({

                path: '/login',
                query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next();
    }
});*/


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
