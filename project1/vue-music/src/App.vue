<template>
  <div id="app">
    <!-- 使用组件 -->
    <Mheard/>
    <Mnav/>
    <keep-alive>
    <router-view></router-view>
    <Mplayer/>
    </keep-alive>
  </div>
</template>

<script>
// 引入组件
import HelloWorld from "./components/HelloWorld.vue";
import Mheard from "./components/Mheard.vue";
import Mnav from "./components/Mnav.vue";
import Mplayer from "./components/Mplayer.vue"
// 注册组件
export default {
  name: "app",
  components: {
    HelloWorld,
    Mheard,
    Mnav,
    Mplayer,
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
