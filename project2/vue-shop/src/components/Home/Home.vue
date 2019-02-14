<template>
  <div>
    <!-- 滑块容器 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(imgitem,index) in imgs" :key="index">
        <img :src="imgitem.banner">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div>
      <div class="mint-grids">
          <router-link :to="btnitem.arouter"  v-for="(btnitem,index) in btns" :key="index">
        <Aui :class="btnitem.aclassname">
            
          <Divui :class="btnitem.dclassname">
            
            <img :src="btnitem.btnurl">
            
          </Divui>
          <Pui :class="btnitem.pclassname">{{btnitem.btnsname}}</Pui>
            
        </Aui>
</router-link>
        <!-- <a href="javascript:;" class="mint-grid">
            <div class="mint-grid__icon">
                <img src="../../assets/img/btn-icon/btn1.png" alt="">
            </div>
            <p class="mint-grid__label">新闻</p>
        </a>
        <a href="javascript:;" class="mint-grid">
            <div class="mint-grid__icon">
                <img src="../../assets/img/btn-icon/btn2.png" alt="">
            </div>
            <p class="mint-grid__label">图片</p>
        </a>
        <a href="javascript:;" class="mint-grid">
            <div class="mint-grid__icon">
                <img src="../../assets/img/btn-icon/btn3.png" alt="">
            </div>
            <p class="mint-grid__label">商品</p>
        </a>
        <a href="javascript:;" class="mint-grid">
            <div class="mint-grid__icon">
                <img src="../../assets/img/btn-icon/btn4.png" alt="">
            </div>
            <p class="mint-grid__label">留言</p>
        </a>
        <a href="javascript:;" class="mint-grid">
            <div class="mint-grid__icon">
                <img src="../../assets/img/btn-icon/btn5.png" alt="">
            </div>
            <p class="mint-grid__label">搜索</p>
        </a>
        <a href="javascript:;" class="mint-grid">
            <div class="mint-grid__icon">
                <img src="../../assets/img/btn-icon/btn6.png" alt="">
            </div>
            <p class="mint-grid__label">联系</p>
        </a>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [],
      btns: [
        {
          aclassname: "mint-grid",
          arouter:{name:'news.list'},
          dclassname: "mint-grid__icon",
          btnurl: require("../../assets/img/btn-icon/btn1.png"),
          btnsname: "新闻",
          pclassname: "mint-grid__label"
        },
        {
          aclassname: "mint-grid",
          arouter:{name:'photo.list',params:{categoryId:0}},
          dclassname: "mint-grid__icon",
          btnurl: require("../../assets/img/btn-icon/btn2.png"),
          btnsname: "图片",
          pclassname: "mint-grid__label"
        },
        {
          aclassname: "mint-grid",
          arouter:{name:'goods.list'},
          dclassname: "mint-grid__icon",
          btnurl: require("../../assets/img/btn-icon/btn3.png"),
          btnsname: "商品",
          pclassname: "mint-grid__label"
        },
        {
          aclassname: "mint-grid",
          arouter:{name:'news.list'},
          dclassname: "mint-grid__icon",
          btnurl: require("../../assets/img/btn-icon/btn4.png"),
          btnsname: "留言",
          pclassname: "mint-grid__label"
        },
        {
          aclassname: "mint-grid",
          arouter:{name:'news.list'},
          dclassname: "mint-grid__icon",
          btnurl: require("../../assets/img/btn-icon/btn5.png"),
          btnsname: "搜索",
          pclassname: "mint-grid__label"
        },
        {
          aclassname: "mint-grid",
          arouter:{name:'news.list'},
          dclassname: "mint-grid__icon",
          btnurl: require("../../assets/img/btn-icon/btn6.png"),
          btnsname: "联系",
          pclassname: "mint-grid__label"
        }
      ]
    };
  },
  created() {
    this.$axios
      .get(
        "http://po.funshion.com/v6/config/channelhome?nav_id=5&ves=1&cl=mweb&uc=223"
      )
      .then(res => {
        this.imgs = res.data.blocks[0].contents;
        // console.log("Lunbotu",res.data.blocks[0].contents)
      })
      .catch(err => console.log("Lunbotu,err"));
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.mint-swipe {
  height: 200px;
  overflow: hidden;
}
.mint-swipe-item img {
  width: 100%;
  height: 200px;
}
.mint-grids {
  position: relative;
  overflow: hidden;
}
</style>
