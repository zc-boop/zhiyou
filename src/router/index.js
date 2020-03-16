import Vue from 'vue'
import VueRouter from 'vue-router'
//.........................................
import Recommend from '../views/Recommend'
import ViewDetail from '../components/ViewDetail'
//.........................................
import Periphery from '../views/Periphery'
import Hotels from '../views/Periphery/Hotels'
import Foods from '../views/Periphery/Foods'
import HotelDetails from '../views/Periphery/HotelDetails'
import FoodDetails from '../views/Periphery/FoodDetails'
//.........................................
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
            requireAuth: true
        }
    },
    {
        path: "/viewdetail",
        component: ViewDetail,
    },
    //..........................................
    {
        path: "/periphery",
        name: "Periphery",
        component: Periphery,
        meta: {
            showFooter: true,
            requireAuth: true
        },
        children: [
            {
                path: "/periphery",
                redirect: "/periphery/hotels"
            },
            {
                path: '/periphery/hotels',
                component: Hotels,
                meta: {
                    showFooter: true,
                    requireAuth: true
                },

            },
            {
                path: '/periphery/foods',
                component: Foods,
                meta: {
                    showFooter: true,
                    requireAuth: true
                },
            }
        ]
    },
    {
        path: '/hoteldetails',
        component: HotelDetails,
    },
    {
        path: '/fooddetails',
        component: FoodDetails,
    },
    //........................................
    {
        path: "/message",
        name: "Message",
        component: Message,
        meta: {
            showFooter: true,
            requireAuth: true
        }
    },
    //........................................
    {
        path: "/community",
        name: "Community",
        component: Community,
        meta: {
            showFooter: true,
            requireAuth: true
        },
        children: [
            {
                path: '/community/attentiondynamic',
                component: AttentionDynamic,
                meta: {
                    showFooter: true,
                    requireAuth: true
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
                    requireAuth: true
                },
            },
            {
                path: '/community/recommenddynamic',
                component: RecommendDynamic,
                meta: {
                    showFooter: true,
                    requireAuth: true
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
            requireAuth: true
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
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/register',
        name: "Register",
        component: Register,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/registersuccee',
        name: "RegisterSuccee",
        component: RegisterSuccee,
        meta: {
            requireAuth: true
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
