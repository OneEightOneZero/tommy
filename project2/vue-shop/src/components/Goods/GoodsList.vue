<template>
  <div>
    <Sedheader title="过年有好货"></Sedheader>
    <!-- goods start -->
    <div class="goodsbg">
      <!-- banner -->
      <div class="rag">
        <div style="position:relative">
          <div
            class="hide-in-module-list"
            style="position: relative; padding-top: 0px; overflow: visible;"
          >
            <img
              src="https://shop.io.mi-img.com/app/shop/img?id=shop_b5e214f9174d122c974de4ac9faafcac.jpeg&amp;w=1080&amp;h=576"
              style="display: block; top: 0px; left: 0px; margin: 0px; width: 100%; opacity: 1; position: static;"
            >
          </div>
        </div>
      </div>
      <!-- toppic -->
      <div class="rag">
        <div style="position:relative">
          <div
            class="hide-in-module-list"
            style="position: relative; padding-top: 0px; overflow: visible;"
          >
            <img
              style="display: block; top: 0px; left: 0px; margin: 0px; width: 100%; opacity: 1; position: static;"
              src="https://shop.io.mi-img.com/app/shop/img?id=shop_861c30471ef3905536ab2bd9ba4e7e2b.jpeg&amp;w=1080&amp;h=200"
            >
          </div>
        </div>
      </div>
      <mt-loadmore
        :auto-fill="false"
        :top-method="loadTop"
        :bottom-method="loadBottom"
        @top-status-change="handleTopChange"
        ref="loadmore"
      >
        <!-- goods -->
        <div class="goodsbox" v-for="(goodsitem,index) in goodslist" :key="index">
          <router-link :to="{name:'goods.detail',params:{id:index}}">
            <div class="goodscontent">
              <div class="goodsinfo">
                <img :src="goodsitem.Pic" alt>
                <div class="goodsinfo-litbox">
                  <div class="goodsinfo-titlebox">
                    <p class="goodsinfo-title">{{goodsitem.D_title}}</p>
                  </div>
                </div>
              </div>
              <!-- 左上角 -->
              <div class="goodsinfo-letconner">
                <div class="xiaoyuanquan">
                  <div class="xiaoyuanquan-box">
                    <div class="xiaoyuanquan-title-top">恭喜</div>
                    <div class="xiaoyuanquan-title-bottom">发财</div>
                  </div>
                </div>
              </div>
              <!-- 左上角结束 -->
              <div class="goodsinfo-bottom">
                <div class="goodsinfo-bottom-litbox">
                  <div class="goodsinfo-bottom-titlebox">
                    <div class="goodsinfo-bottom-goodsname">{{goodsitem.Title}}</div>
                    <div class="goodsinfo-bottom-goodsprice">
                      <span class="price-wrap">
                        <span class="num">{{goodsitem.Price}}</span>
                        <span class="unit">元</span>
                      </span>
                      <span class="price-cart">
                        <span class="carticon iconfont icon-xiaoshopcart"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </mt-loadmore>
    </div>
    <!-- goods end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.$axios
      .get("/getGoodsApi")
      .then(res => {
        this.goodslist = res.data.result;
      })
      .catch(err => {
        console.log("goodslist,err", err);
      });
  },
  methods: {
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      console.log("loadtop函数被调用了");
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      console.log("loadbottom函数被调用了");
      this.$refs.loadmore.onBottomLoaded();
    }
    // ...
  }
};
</script>

<style scoped>
.goodsbg {
  max-height: 600px;
  background-color: #d03534;
  position: fixed;
  overflow: scroll;
}
.goodsbox {
  width: 200px;
  height: 300px;
  position: relative;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
}
.goodscontent {
  width: 200px;
  height: 300px;
}
.goodsinfo {
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
}
.goodsinfo img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.goodsinfo-litbox {
  width: 200px;
  height: 40px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.goodsinfo-titlebox {
  padding: 0px 10px;
  line-height: 40px;
}
.goodsinfo-title {
  color: #fff;
  width: 190px;
  margin: 0;
  position: relative;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goodsinfo-letconner {
  position: absolute;
  left: 6px;
  top: 6px;
  right: auto;
  bottom: auto;
}
.xiaoyuanquan {
  font-size: 10px;
  background-color: rgb(233, 44, 39);
  color: rgb(255, 255, 255);
  font-weight: 700;
  line-height: 12px;
  width: 42px;
  height: 42px;
  border-radius: 42px;
  display: block;
  text-align: center;
  border: 1px solid transparent;
  box-sizing: content-box;
}
.xiaoyuanquan-box {
  width: 30px;
  height: 20px;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.xiaoyuanquan-title-top {
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  vertical-align: bottom;
}
.xiaoyuanquan-title-bottom {
  font-size: 12px;
  font-weight: bold;
  line-height: 1.1;
}
.goodsinfo-bottom {
  width: 200px;
  height: 100px;
  overflow: hidden;
  position: relative;
}
.goodsinfo-bottom-litbox {
  width: 200px;
  height: 100px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}
.goodsinfo-bottom-titlebox {
  padding: 0px 10px;
  line-height: 40px;
}
.goodsinfo-bottom-goodsname {
  color: #333;
  font-size: 14px;
  width: 100%;
  margin: 0;
  position: relative;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  
}
.goodsinfo-bottom-goodsprice {
  color: #333;
  font-size: 14px;
  width: 100%;
  margin: 0;
  position: relative;
  display: block;
  text-align: left !important;
  margin-bottom: 0;
}
.price-wrap {
  font-size: 17px;
  color: #eb5800;
}
.price-cart {
  background-color: #cf2d2d;
  height: 25px;
  width: 50px;
  line-height: 25px;
  position: absolute;
  right: 11px;
  bottom: 10px;
  margin: 0 !important;
  display: inline-block;
  text-align: center;
}
.carticon {
  font-size: 25px;
  height: 25px;
  line-height: 25px;
  color: #fff;
}
.num {
  margin-right: 3px;
}
.unit {
  font-size: 10px;
}
</style>
