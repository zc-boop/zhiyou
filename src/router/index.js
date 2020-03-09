import Vue from 'vue'
import VueRouter from 'vue-router'
//.........................................
import Recommend from '../views/Recommend'
import Customization from '../views/Customization'
import Message from '../views/Message'
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

Vue.use(VueRouter);

const routes = [
    {
        path: "/recommend",
        name: "Recommend",
        component: Recommend,
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
                component: Fans
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
      path:"/myfriend",
      component:MyFriend
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
            swal("请先登陆！！",{
                title:"至游提示",
                confirmButtonText:"是的，我要删除！",
                cancelButtonText:"让我再考虑一下…",
            },function () {
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
