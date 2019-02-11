<template>
  <div class="weui-navbar">
    <!-- <div class="weui-navbar__item weui-bar__item_on">推荐</div>
    <div class="weui-navbar__item">歌手</div>
    <div class="weui-navbar__item">排行</div>
    <div class="weui-navbar__item">搜索</div>-->
    <div :class="{active : index===cur}" class="weui-navbar__item" @click="tab(index)" v-for="(n,index) in navs" :key="index">
      <router-link v-bind:to="n.url" href="javascript:;">{{n.title}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0,
      navs: [
        { title: "推荐", url: "/tuijian" },
        { title: "歌手", url: "/geshou" },
        { title: "排行", url: "/paihang" },
        { title: "搜索", url: "/search" }
      ]
    };
  },
  methods: {
    tab(index) {
      this.cur = index;
      // console.log(index)
    }
  }
};
</script>
<style scoped>
.weui-navbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: relative;
  z-index: 500;
  top: 0;
  width: 100%;
  background-color: #fafafa;
}
.weui-navbar__item.active {
  background-color: #ececec;
  color: rgb(95, 182, 101);
}
.weui-navbar__item {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 13px 0;
  text-align: center;
  font-size: 15px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.weui-navbar__item:after {
  content: " ";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-right: 1px solid #cccccc;
  color: #cccccc;
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
}
</style>

