/*
import Vue from 'vue'
import VueRouter from 'vue-router'
//.........................................
import RecommendDynamic from '../views/RecommendDynamic'
import Customization from '../views/Customization'
import Message from '../views/Message'
//.........................................
import Mine from '../views/Mine'
import Attention from '../views/Mine/AttentionDynamic'
import Collect from '../views/Mine/Collect'
import Cpassword from '../views/Mine/Cpassword'
import oService from '../views/Mine/oService'
import Feedback from '../views/Mine/Feedback'
import Einfo from '../views/Mine/Einfo'
import Afans from '../views/Mine/Afans'
import Fans from '../views/Mine/Fans'
import MyFriend from '../views/Mine/MyFriend'
//.........................................
import Login from "../views/Login/index";
import Register from "../views/Register/index";
import RegisterSuccee from "../views/Register/RegisterSuccee/index"
import {Dialog} from "vant";

Vue.use(VueRouter);

const routes = [
    {
        path: "/recommend",
        name: "RecommendDynamic",
        component: RecommendDynamic,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/customization",
        name: "Customization",
        component: Customization,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/message",
        name: "Message",
        component: Message,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/mine",
        name: "Mine",
        component: Mine,
        meta: {
            showFooter: true
        }
    },

    {
        path: '/collect',
        component: Collect
    },
    {
        path: '/cpassword',
        component: Cpassword
    },
    {
        path: '/oservice',
        component: oService
    },
    {
        path: '/feedback',
        component: Feedback
    },
    {
        path: '/einfo',
        component: Einfo
    },
    {
        path: '/afans',
        component: Afans,
        children: [
            {
                path: "/afans/fans",
                component: Fans,
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path: '/afans/attention',
                component: Attention,
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
            }
        ]

    },
    {
        path: "/myfriend",
        component: MyFriend,
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
    },
    //........................................
    {
        path: "/",
        redirect: "/recommend"
    },
    {
        path: '/Login',
        name: "Login",
        component: Login,
    },
    {
        path: '/register',
        name: "Register",
        component: Register,
    },
    {
        path: '/registersuccee',
        name: "RegisterSuccee",
        component: RegisterSuccee,
    }

];

const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (sessionStorage.getItem("token")) { // 通过vuex state获取当前的token是否存在
            next();
        } else {
            Dialog.alert({
                title: '标题',
                message: '请先登录！！！'
            }).then(() => {
                next({
                    path: '/login',
                })
            });
        }
    } else {
        next();
    }
});
export default router
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
//.........................................
import Recommend from '../views/Recommend'
import Customization from '../views/Customization'
import Message from '../views/Message'
//.........................................
import Community from '../views/Community'
import AttentionDynamic from '../views/Community/AttentionDynamic'
import Nearby from '../views/Community/Nearby'
import RecommendDynamic from '../views/Community/RecommendDynamic'
import DynamicComments from '../views/Community/DynamicComments'
//.........................................
import Mine from '../views/Mine'
import Attention from '../views/Mine/Attention'
import Collect from '../views/Mine/Collect'
import Cpassword from '../views/Mine/Cpassword'
import oService from '../views/Mine/oService'
import Feedback from '../views/Mine/Feedback'
import Einfo from '../views/Mine/Einfo'
import Afans from '../views/Mine/Afans'
import Fans from '../views/Mine/Fans'
import MyFriend from '../views/Mine/MyFriend'
//.........................................
import Login from "../views/Login/index";
import Register from "../views/Register/index";
import RegisterSuccee from "../views/Register/RegisterSuccee/index"
import {Dialog} from "vant";

Vue.use(VueRouter);

const routes = [
    {
        path: "/recommend",
        name: "Recommend",
        component: Recommend,
        meta: {
            showFooter: true,
            requireAuth:true
        }
    },
    {
        path: "/customization",
        name: "Customization",
        component: Customization,
        meta: {
            showFooter: true,
            requireAuth:true
        }
    },
    {
        path: "/message",
        name: "Message",
        component: Message,
        meta: {
            showFooter: true,
            requireAuth:true
        }
    },
    //........................................
    {
        path: "/community",
        name: "Community",
        component: Community,
        meta: {
            showFooter: true,
            requireAuth:true
        },
        children:[
            {
                path: '/community/attentiondynamic',
                component: AttentionDynamic,
                meta: {
                    showFooter: true,
                    requireAuth:true
                },
            },
            {
                path: "/community",
                redirect: "/community/attentiondynamic"
            },
            {
                path: '/community/nearby',
                component: Nearby,
                meta: {
                    showFooter: true,
                    requireAuth:true
                },
            },
            {
                path: '/community/recommenddynamic',
                component: RecommendDynamic,
                meta: {
                    showFooter: true,
                    requireAuth:true
                },
            },
        ]
    },
    {
        path: '/dynamiccomments',
        component: DynamicComments
    },
    //........................................
    {
        path: "/mine",
        name: "Mine",
        component: Mine,
        meta: {
            showFooter: true,
            requireAuth:true
        }
    },

    {
        path: '/collect',
        component: Collect
    },
    {
        path: '/cpassword',
        component: Cpassword
    },
    {
        path: '/oservice',
        component: oService
    },
    {
        path: '/feedback',
        component: Feedback
    },
    {
        path: '/einfo',
        component: Einfo
    },
    {
        path: '/afans',
        component: Afans,
        children: [
            {
                path: "/afans/fans",
                component: Fans,
            },
            {
                path: '/afans/attention',
                component: Attention,
            }
        ]

    },
    {
        path: "/myfriend",
        component: MyFriend,
    },
    //........................................
    {
        path: "/",
        redirect: "/recommend"
    },
    {
        path: '/Login',
        name: "Login",
        component: Login,
        meta:{
            requireAuth:true
        }
    },
    {
        path: '/register',
        name: "Register",
        component: Register,
        meta:{
            requireAuth:true
        }
    },
    {
        path: '/registersuccee',
        name: "RegisterSuccee",
        component: RegisterSuccee,
        meta:{
            requireAuth:true
        }
    }

];

const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        next();
    } else {
        if (sessionStorage.getItem("token")) { // 通过vuex state获取当前的token是否存在
            next();
        } else {
            Dialog.alert({
                title: '提示',
                message: '请先登录！！！'
            }).then(() => {
                next({
                    path: '/login',
                })
            });
        }
    }
});
export default router
