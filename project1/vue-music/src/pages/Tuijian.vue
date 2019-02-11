<template>
  <div>
    <Mlunbotu/>
    <Mdiantai/>
    <Mhotlist/>
    <Mfooter/>
  </div>
</template>
<script>
// 引入组件
import Mlunbotu from "../components/Mlunbotu.vue";
import Mdiantai from "../components/Mdiantai.vue";
import Mhotlist from "../components/Mhotlist.vue";
import Mfooter from "../components/Mfooter.vue"; 


// 注册组件
export default {

  name: "app",
  components: {
    Mlunbotu,
    Mdiantai,
    Mhotlist,
    Mfooter
  },
  created(){
  },
  methods:{
      
  }
};
</script>
<style scoped>
</style>
