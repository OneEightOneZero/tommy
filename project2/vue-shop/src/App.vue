<template>
  <!-- <div id="app"> -->
  <div>
    <mt-header title="HappyNewYear!!"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" slot="icon" src="./assets/img/shopping-cart.png">
        购物车<mt-badge size="small">{{num}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/me.png">
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Badge from './Badge.js';
import GoodsDo from './GoodsDo.js';
export default {
  created(){
    // 小球数量
    this.num=GoodsDo.getTotaCount();
    Badge.$on('addshopcart',(data)=>{
      console.log(data)
      console.log(this)
      this.num+=5
    })
  },
  data() {
    return {
      selected: "",
      num:0,
    };
  },
  methods: {
    changeHash() {
       this.$router.push({
        name: this.selected
       })
    }
  },
  watch: {
    selected(newV, oleV) {
      // console.log(newV, oleV);
      this.$router.push({
        name: newV
      });
    }
  }
};
</script>

<style>
.iconfont{
  width: 100%;
  height: auto;
  font-size: 18px;
}
.icon-error {
  font-size: 50px;
  color: #dd3434;
}
</style>
