<template>
  <div class="mod_twocol_list mod_twocol_list_normal">
    <h2 class="list_title">电台</h2>
    <ul id="radio_wrapper" class="list_container">
      <li v-for="item in redataradio" data-tjname="recom_radio" class="js_play_radio" :data-id="item.radioid" :key="item.radioid">
        <a class="list_main" href="javascript:;">
          <div class="list_media">
            <img
              class="list_pic"
              :src="item.picUrl"
              alt
            >
            <span class="icon icon_play"></span>
          </div>
          <div class="list_info">
            <h3 class="list_tit tit_two_row">{{item.Ftitle}}</h3>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import {getRecommend} from '../configs/redata.js'
import {ERR_OK} from '../configs/commparam.js'

export default {
 
  data () {
    return {
      redataradio:[],
    }
  },

  created(){
      this._getRecommend()
  },
  methods:{
    _getRecommend(){
          getRecommend().then((res)=>{
              if(res.code==ERR_OK){
                  this.redataradio =res.data.radioList;
              }
          })
      },
  }
}
</script>



<style scoped>
.mod_twocol_list_normal {
  margin-bottom: 7px;
}
.mod_twocol_list {
  margin-left: 10px;
  margin-right: 10px;
}
.mod_twocol_list .list_title {
  font-size: 16px;
  color: #000;
  margin-bottom: 11px;
  font-weight: normal;
}
.mod_twocol_list .list_container {
  overflow: hidden;
  margin-right: -8px;
}
.mod_twocol_list li {
  float: left;
  width: 50%;
  box-sizing: border-box;
  padding-right: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}
.mod_twocol_list li .list_main {
  display: block;
  background: #f5fffa;
}
.mod_twocol_list li .list_media {
  position: relative;
  margin-bottom: 5px;
  height: 193px;
}
.mod_twocol_list li .list_media img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 1;
  height: 193px;
}
.mod_twocol_list li .list_media .icon_play {
  height: 24px;
  bottom: 5px;
  right: 5px;
  width: 24px;
  background-position: 0 0;
}
.mod_twocol_list li .list_media .icon_play,
.mod_twocol_list li .list_media .icon_listen {
  background-image: url(../assets/list_sprite.png);
  background-repeat: no-repeat;
  background-size: 24px 60px;
}
.mod_twocol_list li .list_media .icon_play,
.mod_twocol_list li .list_media .listen_count {
  position: absolute;
  display: block;
  z-index: 10;
}
.mod_twocol_list li .list_info {
  padding: 0 7px 5px;
  color: #000;
}
.mod_twocol_list_normal li .list_tit {
  height: 36px;
  line-height: 18px;
  white-space: normal;
  word-wrap: break-word;
}
.mod_twocol_list li .list_tit {
  font-size: 14px;
}
</style>