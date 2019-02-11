// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入并注册axios
import axios from 'axios'
Vue.prototype.$axios = axios
// 引入并注册mint-UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 配置axios请求拦截器，调用mintui,indicator插件(开启)
axios.interceptors.request.use(
  config => {
    MintUI.Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    return config;
  },
  err => {
    return Promise.reject(err);
  });
// 配置axios请求拦截器，调用mintui,indicator插件(关闭)
axios.interceptors.response.use(
  response => {
    MintUI.Indicator.close()
    return response;
  },
  err => {
    return Promise.reject(err)
  });
// 引入全局css,iconfont
import './assets/css/global.css'
import './assets/iconfont/iconfont.css'
// 引入并注册常用的九宫格ui
// 引入副标题sedheader
import Aui from '@/components/Common/Aui.vue'
import Divui from '@/components/Common/Divui.vue'
import Pui from '@/components/Common/Pui.vue'
import Sedheader from '@/components/Common/Sedheader.vue'
Vue.component(Aui.name, Aui)
Vue.component(Divui.name, Divui)
Vue.component(Pui.name, Pui)
Vue.component(Sedheader.name, Sedheader)
// 引入moment全局日期过滤
import Moment from 'moment';
// {{'xxx'|convertTime('YYYY-MM-DD')}}
Vue.filter('convertTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
