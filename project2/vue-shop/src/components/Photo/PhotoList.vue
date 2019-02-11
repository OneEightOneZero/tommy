<template>
  <section class="g-con">
    <Sedheader title="动漫热播榜"></Sedheader>
    <div class="cate">
      <ul>
        <li v-for="cateitem in categorylist" :key="cateitem.id">
          <a @click="getCategoryId(cateitem.id)" href="javascript:;">{{cateitem.name}}</a>
        </li>
      </ul>
    </div>
    <div class="f-mgt-10 m-cd-list">
      <div class="m-cd-i-wrap poster" v-for="photoitem in photolist" :key="photoitem.id">
        <router-link :to="{name:'news.detail',query:{id:photoitem.id}}">
          <a class="m-cd-i" href="javascript:;">
            <div class="pic">
              <img v-lazy="photoitem.poster">
              <span class="sd">{{photoitem.update}}</span>
            </div>
            <div class="info">
              <h3 class="tit">{{photoitem.name}}</h3>
              <p class="desc">{{photoitem.aword}}</p>
            </div>
          </a>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
// "http://pm.funshion.com/v5/media/retrieval?is_vip=2&ves=1&cl=mweb&uc=223&channel=3&order=pl&cate=0&area=0&year=0&class=0&pg=1&sz=10"
export default {
  data() {
    return {
      photolist: [],
      categorylist: [],
      categorylistid: []
    };
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(this.categorylistid);
    if (this.categorylistid.indexOf(to.params.categoryId) === -1) {
      this.$toast({
        message: "分类获取信息错误",
        position: "middle",
        duration: 3000,
        iconClass: "iconfont icon-error",
        className: "iconfont"
      });
    } else {
      this.getCategoryId(to.params.categoryId);
      next();
    }
  },
  created() {
    let categoryId = this.$route.params.categoryId;

    this.getCategoryId(categoryId);
    this.$axios
      .get("http://pm.funshion.com/v5/media/filters?channel=3")
      .then(res => {
        this.categorylist = res.data.filters[0].options;
        this.categorylistid = this.categorylist.map(function(item) {
          return item.id;
        });
      })
      .catch(err => {
        console.log("category,err");
      });
  },
  methods: {
    getCategoryId(categoryId) {
      this.$axios
        .get(
          `http://pm.funshion.com/v5/media/retrieval?is_vip=2&ves=1&cl=mweb&uc=223&channel=3&order=pl&cate=${categoryId}&area=0&year=0&class=0&pg=1&sz=20`
        )
        .then(res => {
          this.photolist = res.data.medias;
          // console.log("photo",res.data.medias)
        })
        .catch(err => console.log("photo,err"));
    },
    changecategory() {}
  }
};
</script>

<style scoped>

a {
  text-decoration: none;
  color: #535252;
}
ul,
ol {
  list-style: none;
}
h3 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 100;
  vertical-align: baseline;
  font-style: normal;
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.cate {
  width: 500px;
  overflow-x: scroll;
}
.cate ul {
  height: 10px;
  width: 1000px;
  padding: 10px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
.cate ul li {
  float: left;
  padding: 0 15px;
  margin: 0;
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
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.m-cd-list {
  height: 530px;
  overflow: auto;
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
  background: url("../../assets/img/defaultimg.png") no-repeat center center /
    contain #f0f1f2;
  /* background-size: contain; */
}
.m-cd-i .sd {
  position: absolute;
  text-indent: 5px;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  line-height: 16px;
}
.m-cd-i .info {
  margin-top: 20px;
  max-height: 40px;
  overflow: hidden;
}
.m-cd-i .tit {
  width: 120px;
  white-space: nowrap;
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
.category-normal {
  margin-top: 0.5rem;
  background-color: #ffffff;
  padding-top: 0.75rem;
  overflow: hidden;
}
.category-normal .category-normal-ul {
  width: 18.75rem;
  margin: 0 auto;
  padding-left: 0.5rem;
}
.category-normal .category-normal-ul .category-normal-item:nth-of-type(2n + 1) {
  margin-right: 0.65rem;
}
.category-normal .category-normal-ul .category-normal-item {
  width: 8.55rem;
  height: 5rem;
  float: left;
  margin-bottom: 0.75rem;
}
.category-normal .category-normal-ul .category-normal-item .item-link {
  position: relative;
  width: 8.55rem;
  height: 5rem;
  display: block;
}
.category-normal
  .category-normal-ul
  .category-normal-item
  .item-link
  .item-name {
  color: #535252;
  font-size: 0.7rem;
  position: absolute;
  left: 0.9rem;
  top: 2.05rem;
}
.category-normal
  .category-normal-ul
  .category-normal-item
  .item-link
  .item-cover {
  width: 100%;
  height: 100%;
  display: block;
}
.category-normal
  .category-normal-ul
  .category-normal-item
  .item-link
  .item-cover {
  border-radius: 0.1rem;
  overflow: hidden;
}
</style>
