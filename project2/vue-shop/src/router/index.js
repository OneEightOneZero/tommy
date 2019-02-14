import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Member from '@/components/Member/Member.vue'
import Shopcart from '@/components/Shopcart/Shopcart.vue'
import Search from '@/components/Search/Search.vue'
import NewsList from '@/components/News/NewsList.vue';
import NewsDetail from '@/components/News/NewsDetail.vue';
import PhotoList from '@/components/Photo/PhotoList.vue';
import GoodsList from '@/components/Goods/GoodsList.vue';
import GoodsDetail from '@/components/Goods/GoodsDetail.vue';
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    // 新闻列表
    {
      name: 'news.list',
      path: '/news/list',
      component: NewsList
    },
    {
      name: 'news.detail',
      path: '/news/detail',
      component: NewsDetail
    },
    // 图片列表
    {
      name: 'photo.list',
      path: '/photo/list/:categoryId',
      component: PhotoList
    },
    // 商品列表
    {
      name: 'goods.list',
      path: '/goods/list/',
      component: GoodsList
    },
    // 商品详情
    {
      name: 'goods.detail',
      path: '/goods/detail/:id',
      component: GoodsDetail
    },
  ]
})
