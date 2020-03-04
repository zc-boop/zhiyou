import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend'
import Customization from '../views/Customization'
import Message from '../views/Message'
import Mine from '../views/Mine'
import Attention from '../views/Mine/Attention'
import Collect from '../views/Mine/Collect'
import Cpassword from '../views/Mine/Cpassword'
import oService from '../views/Mine/oService'
import Feedback from '../views/Mine/Feedback'
import Einfo from '../views/Mine/Einfo'
//.........................................
import Login from "../views/Login/index";
import Register from "../views/Register/index";
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
        path: '/attention',
        component: Attention
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
    //........................................
    {
        path: "/",
        redirect: "/recommend"
    },
    {
        path: '/login',
        name: "Login",
        component: Login,
    },
    {
        path: '/register',
        name: Register,
        component: Register,
    },

];

const router = new VueRouter({
    routes
});

export default router
