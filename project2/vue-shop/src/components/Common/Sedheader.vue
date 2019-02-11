<template>
  <h2 class="m-h2-tit f-cb">
    <span @click="gobackbtn" class="backbtn"></span>
    <span class="tit">{{title}}</span>
  </h2>
</template>

<script>
export default {
  name: "Sedheader",
  props: ["title"],
  methods: {
    gobackbtn() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.m-h2-tit {
  position: relative;
  margin: 0 10px;
  padding: 12px 0 10px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
}
.m-h2-tit .tit {
  color: #4c4c4c;
  white-space: nowrap;
}
.m-h2-tit .backbtn {
  float: left;
  padding: 11px;
  color: #4c4c4c;
  white-space: nowrap;
  background: url("../../assets/img/menu-icon/houtui.png");
  background-size: cover;
}
.f-cb:after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>
