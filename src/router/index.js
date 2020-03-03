import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend'
import Customization from '../views/Customization'
import Message from '../views/Message'
import Mine from '../views/Mine'
import Login from "../views/Login/index";
import Register from "../views/Register/index"

Vue.use(VueRouter);

const routes = [
    {
        path: "/recommend",
        name: Recommend,
        component: Recommend,
        meta:{
            showFooter:true
        }
    },
    {
        path: "/customization",
        name: Customization,
        component: Customization,
        meta:{
            showFooter:true
        }
    },
    {
        path: "/message",
        name: Message,
        component: Message,
        meta:{
            showFooter:true
        }
    },
    {
        path: "/mine",
        name: Mine,
        component: Mine,
        meta:{
            showFooter:true
        }
    },
    {
        path: "/",
        redirect:"/recommend"
    },
    {
        path: '/login',
        name: Login,
        component: Login,
    },

];

const router = new VueRouter({
    routes
});

export default router
