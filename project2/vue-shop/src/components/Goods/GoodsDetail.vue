<template>
  <div>
    <Sedheader title>详情页</Sedheader>
    <div class="goods-box">
      <div class="goodsimg">
        <img :src="goodsdetail.Pic">
      </div>
      <div class="goodsinfo-box">
        <div class="goodsname">{{goodsdetail.Title}}</div>
        <span class="goodsSedName">{{goodsdetail.Introduce}}</span>

        <!-- price -->
        <div class="goodsprice-box">
          <div class="goodsprice-info">
            <span class="yang">¥</span>
            {{goodsdetail.Price}}
          </div>
        </div>

        <!-- num -->
        <!-- <div class="num-box">
          <div class="shuliang">数量</div>
        </div>-->
        <!-- add -->
        <div class="add-box">
          <mt-button @click="jianshuliang" type="default" size="small">-</mt-button>
          <div class="jianshu">{{addNum}}</div>
          <mt-button @click="jiashuliang" type="default" size="small">+</mt-button>
        </div>

        <!-- addcart -->
        <transition name="ball" @after-enter="afterEnter">
          <div v-if="isTrue" class="addcart-tips ball">
            <span></span>
          </div>
        </transition>

        <div class="addcart-box">
          <span @click="showball" class="addcart-txt">加入购物车</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '@/Badge.js';
import GoodsDo from '@/GoodsDo.js';

export default {
  data() {
    return {
      isTrue: false,
      goodsdetail: [],
      addNum: 1 // 默认数量1
    };
  },
  methods: {
    jiashuliang() {
      if (this.addNum == 10) return;
      this.addNum++;
    },
    jianshuliang() {
      if (this.addNum <= 1) return;
      this.addNum--;
    },
    showball() {
      this.isTrue = true;

    },
    afterEnter() {
      this.isTrue = false;
          //   通知app增加小球
    Badge.$emit('addshopcart',this.addNum);
    
    GoodsDo.add({
        id:this.$route.params.id,
        num:this.addNum,

    })
    }
  },
  created() {
    let goodsid = this.$route.params.id;
    this.$axios
      .get("/getGoodsApi")
      .then(res => {
        this.goodsdetail = res.data.result[goodsid];
      })
      .catch(err => {
        console.log("goodsdetail,err", err);
      });
  }
};
</script>

<style scoped>
.goods-box {
  height: 595px;
  overflow-y: scroll;
}
.goodsimg {
  height: 388px;
  overflow: hidden;
}
.goodsimg img {
  width: 414px;
  height: 414px;
}
.goodsinfo-box {
  padding-top: 11px;
  padding-left: 14px;
  padding-right: 14px;
}
.goodsname {
  line-height: 22px;
  font-size: 18px;
  color: rgb(51, 51, 51);
  overflow-wrap: break-word;
  text-decoration: none;
}
.goodsSedName {
  white-space: inherit;
  font-variant: inherit;
  color: rgb(153, 153, 153);
  text-decoration: none;
  font: inherit;
}
.goodsprice-box {
  margin-top: 0px;
  margin-bottom: 2px;
  height: 35px;
}
.goodsprice-info {
  font-size: 24px;
  height: 40px;
  line-height: 40px;
  color: rgb(182, 9, 9);
}
.yang {
  margin-bottom: 4px;
  color: rgb(182, 9, 9);
  font-size: 13px;
  overflow-wrap: break-word;
  text-decoration: none;
}
.num-box {
  width: 414px;
}
.shuliang {
  color: rgb(136, 136, 136);
  overflow-wrap: break-word;
  text-decoration: none;
  font-size: 14px;
}
.add-box {
  height: 26px;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100px;
}
.jianshu {
  padding: 0 5px;
  display: inline;
}
.jian {
  display: inline;
}
.jia {
  display: inline;
}
.addcart-tips {
  /* background-color: rgb(171, 138, 89); */
  height: 10px;
  width: 10px;

  text-align: center;
  position: absolute;
  right: 90px;
  bottom: 120px;
  background: red;
  border-radius: 50%;
}
.addcart-box {
  background-color: rgb(171, 138, 89);
  height: 32px;
  border-radius: 16px;
  line-height: 32px;
  text-align: center;
  width: 100px;
  position: absolute;
  right: 0;
  bottom: 88px;
  margin-right: 10px;
}
.addcart-txt {
  color: aliceblue;
}
.ball-enter-active {
  animation: flyball 1s;
}
.ball-leave {
  opacity: 0;
}
@keyframes flyball {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0px, 30px, 0);
  }
  75% {
    transform: translate3d(-10px, 50, 0);
  }
  100% {
    transform: translate3d(-20px, 90px, 0);
  }
}
</style>
