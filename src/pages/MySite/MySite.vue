<template>
  <section class="msite">
    <!--首页头部-->

    <HeaderTop :title="address.name" >
      <router-link class="header_search" slot="left" to="/search">
         <i class="iconfont icon-sousuo"></i>
      </router-link >
       
      <router-link class="header_login" slot="right" to="userInfo._id?'/userInfo':'/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册

        </span>
        <span class="header_login_text" v-else>
            <i class="iconfont icon-person"></i>
        </span>
      </router-link>
      
    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(cs,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index2) in cs" :key="index2">
              <div class="food_container" >
               <img :src="imgBaseUrl+c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
     
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Swiper from 'swiper'
import "swiper/dist/css/swiper.min.css"
import ShopList from "../../components/ShopList/ShopList"
import {mapState} from "vuex"
export default {
  data() {
    return {
      imgBaseUrl: 'https://fuss10.elemecdn.com'
    }
  },
  components: {
    HeaderTop,
    ShopList
  },
  computed:{
    // 读取state的地址信息
    // 通过扩展运算符，将store里的state/actions/mutations/getters的属性或者方法直接映射到当前vue对象的this上，使用时直接this。xxx
   // 使用前需要先引入
    ...mapState(["address","categorys","userInfo"]),

    // 根据categorys一维数组 生成一个2维数组
    // 小数组种的元素个数最大是8个
    categorysArr(){
      const max = 8
      const arr = []
      const categorys=this.categorys
      let smallArr = []
      categorys.forEach((c, index) => {
      if(smallArr.length===0) {
      arr.push(smallArr)
      }
      smallArr.push(c)
      if(smallArr.length===max) {
      smallArr = []
      }
      })
      return arr
      }

  },
  watch:{
    // categorys 数组种有数据了，在异步更新界面之前执行

    categorys(value){
     
      // 界面更新就立即创建swiper对象
      this.$nextTick(function(){
           // 页面有数据之后，创建一个Swiper对象，实现轮播/滑动 创建时机关键
      new Swiper('.swiper-container',{
        // 循环轮播，无缝滑屏
        loop:true,
        // 分页器
        pagination:{
          el:'.swiper-pagination'
        }
      })
      })
  }
  },
  mounted(){
      this.$store.dispatch("getCategorys")
      this.$store.dispatch("getShops")
    
}
}
</script>

<style  lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width: 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top: 45px
    height: 200px
    background: #fff
    .swiper-container
      width: 100%
      height: 100%
      .swiper-wrapper
        width: 100%
        height: 100%
        .swiper-slide
          display: flex
          justify-content: center
          align-items: flex-start
          flex-wrap: wrap
          .link_to_food
            width: 25%
            .food_container
              display: block
              width: 100%
              text-align: center
              padding-bottom: 10px
              font-size: 0
              img
                display: inline-block
                width: 50px
                height: 50px
            span
              display: block
              width: 100%
              text-align: center
              font-size: 13px
              color: #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background: #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top: 10px
    background: #fff
    .shop_header
      padding: 10px 10px 0
      .shop_icon
        margin-left: 5px
        color: #999
      .shop_header_title
        color: #999
        font-size: 14px
        line-height: 20px
</style>
