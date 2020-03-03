import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend'
import Customization from '../views/Customization'
import Message from '../views/Message'
import Mine from '../views/Mine'

Vue.use(VueRouter);

const routes = [
    {
        path: "/recommend",
        name: Recommend,
        component: Recommend
    },
    {
        path: "/customization",
        name: Customization,
        component: Customization
    },
    {
        path: "/message",
        name: Message,
        component: Message
    },
    {
        path: "/mine",
        name: Mine,
        component: Mine
    },
    {
        path: "/",
        redirect:"/recommend"
    },

];

const router = new VueRouter({
    routes
});

export default router
