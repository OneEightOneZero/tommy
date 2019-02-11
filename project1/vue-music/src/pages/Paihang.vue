<template>
  <div>
    <Mpaihangbang/>
    <Mfooter/>
  </div>
</template>
<script>
// 引入组件
import Mpaihangbang from "../components/Mpaihangbang.vue";
import Mfooter from "../components/Mfooter.vue";

// 注册组件
export default {
  name: "app",
  components: {
    Mpaihangbang,
    Mfooter
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>
