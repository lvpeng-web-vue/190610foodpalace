// 入口js
import Vue from 'vue'
import router from './router'
import App from './App.vue'
new Vue({
    el:"#app",
    render:h=>h(App),
    // 多了3个组件标签，多了 router-view router-link keep-alive,多了2个属性可以访问，route router
    router
})