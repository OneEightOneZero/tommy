<template>
  <div>
    <section class="g-con infoimg">
        <Sedheader title="动漫热播榜"></Sedheader>
      <span :style="{backgroundImage:'url(' + xinwendetail.still + ')'}"></span>
    </section>
    <section>
      <div class="g-con f-mgb f-pd-10 v-detail fold" data-toggle-cls="fold">
        <div class="f-cb">
          <div class="f-fr">
            <i class="i-down-s"></i>
          </div>
          <div class="left">
            <h1 class="title">
              <span>{{xinwendetail.name}}</span>
              
              <span class="score">{{xinwendetail.score}}</span>
            </h1>
            <p class="desc">{{(xinwendetail.vv/10000)}}万次播放</p>
          </div>
        </div>
        <ul class="info">
          <li>
            <span class="gray">类型：</span>
            <span>{{xinwendetail.category}}</span>
          </li>

          <li>
            <span class="gray">更新：</span>
            <span class="j-video-release">{{xinwendetail.release}}</span>
          </li>

          <li
            class="gray desc f-mgt-10"
          >{{xinwendetail.description}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data(){
        return{
            xinwendetail:[]
        }
    },
    created(){
        let id=this.$route.query.id
        this.$axios.get(`http://pm.funshion.com/v5/media/profile?id=${id}&ves=1&cl=mweb&uc=223`)
         .then(res => {
        this.xinwendetail = res.data;
        // console.log("XinwenDetail",res.data)
      })
      .catch(err => console.log("XinwenDetail,err"));
    }
};
</script>

<style scoped>
.infoimg {
  width: 414px;
  height: 230px;
}
.infoimg span {
  display: block;
  height: 100%;
  width: 100%;
  background: url("../../assets/img/defaultimg.png");
  background-size: contain;
}
.v-detail {
  font-size: 12px;
  color: #333;
  cursor: pointer;
}
.g-con {
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.f-pd-10 {
  padding: 10px;
}
.f-mgb {
  margin-bottom: 8px;
}
.f-fr {
  float: right;
}
.v-detail.fold .i-down-s {
  transform: rotate(180deg);
}
.v-detail .left {
  margin-right: 16px;
}
.v-detail.fold .title {
  overflow: hidden;
  max-height: inherit;
  display: -webkit-box;
  -webkit-line-clamp: inherit;
  -webkit-box-orient: vertical;
}
.v-detail .title {
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  max-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.v-detail .score,
.v-detail .sub-tit {
  color: #f86400;
  padding-left: 10px;
  font-size: 12px;
  line-height: 18px;
}
.v-detail .desc {
  color: #999;
  font-size: 12px;
}
.f-cb:after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.v-detail.fold .info {
  display: block;
}
.v-detail .info {
  padding: 10px 0;
  line-height: 20px;
  display: none;
}
.v-detail .gray {
  color: gray;
}
.f-mgt-10 {
  margin-top: 10px;
}
</style>
