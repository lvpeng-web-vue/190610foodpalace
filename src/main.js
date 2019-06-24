// 入口js
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from "./store/index"
import {Button} from 'mint-ui'
import "./mock/mockServer"  //加载mockserver即可
import './filters/index' // 加载自定义过滤器
// 注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>这个标签可以全局使用
new Vue({
    el:"#app",
    render:h=>h(App),
    // 多了3个组件标签，多了 router-view router-link keep-alive,多了2个属性可以访问，route router
    router,
    store
})