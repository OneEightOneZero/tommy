<template>
  <div class="car-list-container">
	  <Sedheader title>购物车</Sedheader>
    <ul>
      <li class="car-list" v-for="(goods,index) in shopcar">
        <mt-switch v-model="goods.isSelected"></mt-switch>
        <div class="car-list__img">
          <img :src="goods.pic">
        </div>
        <div class="car-list__detail">
          <p class="car-list__detail__title">{{goods.title}}</p>
          <p>
            数量：
            <button @click="jianshuliang(goods)">-</button>
            {{goods.num}}
            <button @click="jiashuliang(goods)">+</button>
          </p>
          <p class="car-list__detail__price">
            单价：
            <span>￥</span>
            {{goods.price}}
          </p>
        </div>
        <div class="car-list__operate">
          <span @click="del(index)">删除</span>
        </div>
      </li>
    </ul>
    <div class="car-foot-nav">
      <p class="sum-price">已选择：{{paymenet.count}}件</p>
      <p class="sum-price">总额：￥{{paymenet.price}}</p>
      <button class="to-pay">去结算</button>
    </div>
  </div>
</template>

<script>
import GoodsDo from "@/GoodsDo.js";
// import { join } from "path";
export default {
	computed:{
		paymenet(){
			let price=0
			let count=0
			this.shopcar.forEach(goods=>{
				if(goods.isSelected){
					count+=goods.num
				price+=goods.num*goods.price
				}
				
			})
			return {
				price,count
			}
		}
	},
beforeRouteLeave(to,from,next){
	if(confirm("真的要离开吗")){
		let obj=[];
		this.shopcar.forEach(goods=>{
			obj[goods.id]=goods.num
		})
		GoodsDo.saveGoods(obj)
		next()
	}else{
		next(false)
	}
},
  methods: {
	  del(index){
		  this.shopcar.splice(index,1)
	  },
    jiashuliang(goods) {
		goods.num++
      console.log("jia");

    },
    jianshuliang(goods) {
		goods.num--
      console.log("jian");
    }
  },
    data() {
    return {
      shopcar: []
    };
  },
  created() {
    let goodsList = GoodsDo.getGoodsList();
    let ids = Object.keys(goodsList).join(",");
    this.$axios
      .get("http://localhost:3000/getshopcarlist?id_like=")
      .then(res => {
		//   res.data.forEach(goods=>{
		// 	if(goodsList[goods.id]){
		// 		goods.num=goodsList[goods.id]
		// 	}
		// 		goods.isSelected=true
		// })
		this.shopcar = res.data;
		this.shopcar.forEach(goods=>{
			if(goodsList[goods.id]){
				this.$set(goods,'num',goodsList[goods.id])
			}
			this.$set(goods,'isSelected',true)
		})
		
      })
      .catch(err => {
        console.log("shopcar,err", err);
      });
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.car-list__img {
  width: 50px;
  height: 50px;
  overflow: hidden;
  float: left;
}
.car-list__img img {
  width: 50px;
  height: 50px;
}
.car-list__detail {
  width: 350px;
}
.iconfont {
  width: 20px;
}
</style>
