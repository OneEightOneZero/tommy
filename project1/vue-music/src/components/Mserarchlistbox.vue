<template>
<ul class="search_content">
    <li v-for="item in result">
        <i class="icon "></i>
        <h6 class="main_tit" v-html="getDisplayName(item)">雪十郎 伤过的心（电子版)</h6>
        
        <p class="sub_tit">DJ小鱼儿</p>
    </li>
</ul>
</template>

<script>
import {search} from "../configs/search.js"
import { ERR_OK } from "../configs/commparam.js";
import {fileSinger} from '../configs/songdata.js';
const TYPE_SINGER="singer"
export default {
    data(){
        return{
          page:1,
          result:[]
        }
    },
    props:{
        query:{
            type:String,
            defaulf:""
        },
        showSinger:{
            type:Boolean,
            defaulf:true
        }
    },
    methods:{
        search(){
            search(this.query,this.page,this.showSinger).then((res)=>{
                if(res.code===ERR_OK){
                    this.result=this._getResult(res.data)
                    console.log(this.result)
                }
            })
        },
        getDisplayName(item){
            if(item.type===TYPE_SINGER){
               return item.singername
            }else{
                return `${item.songname}-${fileSinger(item.singer)}`
            }
        },
        _getResult(data){
            let ret=[]
            if(data.zhida&&data.zhida.singerid){
                ret.push({...data.zhida,...{type:"TYPE_SINGER"}})
            }
            if(data.song){
                ret=ret.concat(data.song.list)
            }
            return ret
        }
    },
    watch:{
        query(){
           this.search() 
        }
    }

}
</script>

<style scoped>
ul{
        display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.mod_search_content li {
    position: relative;
    height: 55px;
    padding-left: 56px;
    overflow: hidden;
}
.mod_search_content .icon {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 22px;
    height: 20px;
    background-position: 0 0;
}
.mod_search_content .icon, .mod_search_content .icon.no_copyright::after {
    background-image: url("../../public/search_sprite.png");
    background-repeat: no-repeat;
    background-size: 22px 30px;
}
.mod_search_content .main_tit {
    margin: 10px 0 2px;
    line-height: 18px;
    font-size: 16px;
    font-weight: normal;
    color: #000;
}
.mod_search_content .sub_tit {
    color: #808080;
}
.mod_search_content li::after {
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    left: 0;
    right: 0;
    background: #e5e5e5;
}

</style>
