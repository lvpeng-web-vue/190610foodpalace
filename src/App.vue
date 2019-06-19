<template>
 <div id="app">
     <router-view/>
     <FooterGuide v-show="$route.meta.showFooter"/>
 </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
// import {mapActions} from "vuex"
 export default {
   components: {
       FooterGuide,
   },
  mounted(){
    // 异步请求地址，请求到的数据存储在mapState 
    this.$store.dispatch("getAddress")
    // this.getAddress()
  },
  // methods:{
  //   ...mapActions(["getAddress"])
  // }
 }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
    
 
</style>
