<template>
  <section class="g-con">
    <Sedheader title="动漫热播榜"></Sedheader>
    <div class="f-mgt-10 m-cd-list">
      <div class="m-cd-i-wrap poster" v-for="xwitem in xinwenlist" :key="xwitem.id">
          <router-link :to="{name:'news.detail',query:{id:xwitem.id}}">
        <a class="m-cd-i" href="javascript:;">
          <div class="pic">
            <img
              :src="xwitem.poster"
            >
            <span class="sd">{{xwitem.update}}</span>
          </div>
          <div class="info">
            <h3 class="tit">{{xwitem.name}}</h3>
            <p class="desc">{{xwitem.aword}}</p>
          </div>
        </a>
          </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            xinwenlist:[]
        }
    },
    created() {
    this.$axios
      .get(
        "http://pm.funshion.com/v5/media/retrieval?is_vip=2&ves=1&cl=mweb&uc=223&channel=3&order=pl&cate=0&area=0&year=0&class=0&pg=1&sz=10"
      )
      .then(res => {
        this.xinwenlist = res.data.medias.slice(0,9);
        // console.log("Xinwen",res.data.medias)
      })
      .catch(err => console.log("Xinwen,err"));
  }
};
</script>

<style scoped>
a{
    text-decoration: none;
}
h3{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 100;
    vertical-align: baseline;
    font-style: normal;
}
.g-con {
    overflow: hidden;
    max-height: 736;
}
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
    content: '';
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}
.m-cd-list {
    height: 585px;
    overflow:auto;
    position: fixed;
    box-sizing: border-box;
    padding-left: 10px;
    width: 100%;
    font-size: 0;
}
.f-mgt-10 {
    margin-top: 10px;
}
.m-cd-i-wrap.poster {
    width: 33.3333%;
}
.m-cd-i-wrap {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    white-space: normal;
}
.m-cd-i {
    display: block;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    font-size: 12px;
}
.m-cd-i-wrap.poster .pic {
    padding-bottom: 140%;
    
}
.m-cd-i .pic {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;

}
.m-cd-i .pic img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../../assets/img/defaultimg.png") no-repeat center center /contain #f0f1f2;;
    /* background-size: contain; */
}
.m-cd-i .sd {
    position: absolute;
    text-indent: 5px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,.5);
    color: #fff;
    line-height: 16px;
}
.m-cd-i .info {
    margin-top: 20px;
    max-height: 40px;
    overflow: hidden;
}
.m-cd-i .tit{
    width: 120px;
    white-space:nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    font-size: 14px;
    color: #cc3030;
}
.m-cd-i .desc {
    width: 120px;
    margin-top: 3px;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
