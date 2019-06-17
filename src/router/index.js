// 路由对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MySite from '../pages/MySite/MySite.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/mysite',
            component: MySite,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/order',
            component: Order,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/personal',
            component: Personal,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/search',
            component: Search,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/mysite'
        }
    ]
})