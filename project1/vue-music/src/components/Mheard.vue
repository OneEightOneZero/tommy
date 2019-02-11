<template>
  <header class="mod_header">
    <i class="music_logo">QQ音乐</i>
    <span href="javascript:;" class="btn_download animated  bounce" v-text="title"></span>
  </header>
</template>
<script> ''
export default {
  data() {
    return {
      title: "M.U.S.I.C"
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
header {
  position: relative;
  height: 45px;
  line-height: 45px;
  left: 0;
  top: 0;
  width: 100%;
  text-align: center;
  color: white;
  background-color: #149c5a;
}
.mod_header .music_logo {
  float: left;
  display: block;
  width: 90px;
  height: 25px;
  margin: 9px 0 0 10px;
  background-image: url(../../public/logo.png);
  background-size: cover;
  background-repeat: no-repeat;
  text-indent: -9999px;
}
.mod_header .btn_download {
  position: absolute;
  display: inline-block;
  right: 10px;
  top: 8px;
  height: 28px;
  padding: 0 12px;
  line-height: 28px;
  border-radius: 99px;
  font-size: 14px;
  background: #149c5a;
  color: #fff;
}
</style>


