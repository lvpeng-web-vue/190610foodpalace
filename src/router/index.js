// 路由对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MySite from '../pages/MySite/MySite.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue"
import Shop from "../pages/Shop/shop.vue"
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods.vue"
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo.vue"
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings.vue"
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
            path: '/shop',
            component: Shop,
            children:[
                {
                    path:"/shop/goods",
                    component:ShopGoods
                },
                {
                    path:"/shop/info",
                    component:ShopInfo
                },
                {
                    path:"/shop/ratings",
                    component:ShopRatings
                },
                {
                    path: '',
                    redirect: '/shop/goods'
                }
               
              
            ]
        },
        {
            path: '/search',
            component: Search,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/',
            redirect: '/mysite'
        },
        {
            path:"/login",
            component:Login,
           
        }
    ]
})