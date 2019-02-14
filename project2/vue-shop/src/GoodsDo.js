let obj = {};
// 获取商品
obj.getGoodsList=function(){
    return JSON.parse(window.localStorage.getItem('goodsList')||'{}');
}
// 保存商品
obj.saveGoods=function(goodsList){
window.localStorage.setItem('goodsList',JSON.stringify(goodsList));
}

// 新增一个商品
obj.add=function(goods){
    // 判断当前goodslist有没有这个商品
    let goodsList=this.getGoodsList()
    if(goodsList[goods.id]){
        // 有这个id值的就追加
        goodsList[goods.id]+=goods.num;
    }else{
        goodsList[goods.id]=goods.num
    }
    this.saveGoods(goodsList);
}
// 获取购物车数量
obj.getTotaCount=function(){
    let goodsList=this.getGoodsList();
    let value=Object.values(goodsList);
    let sum=0;
    value.forEach(val=>sum+=val);
    return sum;
}

export default obj;
