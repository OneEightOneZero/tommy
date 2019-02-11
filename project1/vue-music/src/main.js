import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)
import axios from 'axios'
Vue.prototype.$axios = axios


// 引入一个css动画
import './styles/animate.css'

Vue.config.productionTip = false


//引入路由
import test from './pages/test.vue'
import Tuijian from './pages/Tuijian.vue'
import Geshou from './pages/Geshou.vue'
import Paihang from './pages/Paihang.vue'
import Search from './pages/Search.vue'
import Singerdetails from './pages/Singerdetails.vue'
import Paihangdetails from './pages/Paihangdetails.vue'
import Player from './pages/Player.vue'
// 配置路由
const routes = [
  { path: '/test', component: test },
  { path: '/', component: Tuijian },
  { path: '/tuijian', component: Tuijian },
  { path: '/geshou', component: Geshou },
  { path: '/paihang', component: Paihang },
  { path: '/search', component: Search },
  { path: '/singerdetails', component: Singerdetails,children:[{
    path:':id',
    component:Singerdetails
  }] },
  { path: '/paihangdetails', component: Paihangdetails,children:[{
    path:':id',
    component:Paihangdetails
  }] },
  { path: '/player', component: Player },
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  // 找到public里面的index app节点
  el:"#app",
  router,
  store,
  render: h => h(App),
})