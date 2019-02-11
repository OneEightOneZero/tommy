<template>
  <div class="mod_twocol_list mod_twocol_list_special">
    <h2 class="list_title">热门歌单</h2>
    <ul id="songlist_wrapper" class="list_container">
      <li v-for="item in redatasong" data-tjname="recom_songlist" :key="item.id">
        <a
          class="list_main js_gotaoge"
          href="javascript:;"
          data-href="//y.qq.com/w/taoge.html?ADTAG=myqq&amp;from=myqq&amp;channel=10007100&amp;id=2646688496"
        >
          <div class="list_media">
            <img
              data-url="https://y.gtimg.cn/music/photo_new/T006R300x300M00000333So02drvak.jpg?max_age=2592000"
              :src="item.picUrl"
            >
            <span class="listen_count">
              <i class="icon icon_listen"></i>{{item.accessnum}}次
            </span>
            <span class="icon icon_play js_play_songlist" :data-id="item.id"></span>
          </div>
          <div class="list_info">
            <h3 class="list_tit">{{item.songListDesc}}</h3>
            <p class="list_text">{{item.songListAuthor}}</p>
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
      redatasong:[],
    }
  },

  created(){
      this._getRecommend()
  },
  methods:{
    _getRecommend(){
          getRecommend().then((res)=>{
              if(res.code==ERR_OK){
                  this.redatasong =res.data.songList;
              }
          })
      },
  }
};
</script>
<style scoped>
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
  background: #fff;
}
.mod_twocol_list li .list_media {
  position: relative;
  margin-bottom: 5px;
}
.mod_twocol_list li .list_media::before {
  content: "";
  display: block;
  padding-top: 100%;
}
.mod_twocol_list li .list_media img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 1;
}
.mod_twocol_list li .list_media .listen_count {
  left: 5px;
  bottom: 7px;
  display: block;
  line-height: 12px;
  color: #fff;
}
.mod_twocol_list li .list_media .icon_play,
.mod_twocol_list li .list_media .listen_count {
  position: absolute;
  display: block;
  z-index: 10;
}
.mod_twocol_list li .list_media .icon_listen {
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  background-position: 0 -50px;
  margin-right: 5px;
}
.mod_twocol_list li .list_media .icon_play,
.mod_twocol_list li .list_media .icon_listen {
  background-image: url(../assets/list_sprite.png);
  background-repeat: no-repeat;
  background-size: 24px 60px;
}
.mod_twocol_list_special li .list_media .icon_play {
    background-position: 0 0;
}
.mod_twocol_list li .list_media .icon_play {
    height: 24px;
    bottom: 5px;
    right: 5px;
    width: 24px;
    background-position: 0 0;
}
.mod_twocol_list li .list_media .icon_play, .mod_twocol_list li .list_media .icon_listen {
    background-image: url(../assets/list_sprite.png);
    background-repeat: no-repeat;
    background-size: 24px 60px;
}
.mod_twocol_list_special li .list_media::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 42px;
    z-index: 2;
    background-image: url(../assets/shadow_rp.png);
    background-size: 1px 42px;
    background-repeat: repeat-x;
}
/* little title */
.mod_twocol_list li .list_info {
    padding: 0 7px 5px;
    color: #000;
}
.mod_twocol_list li .list_tit, .mod_twocol_list li .list_text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
    font-size: 12px;
}
.mod_twocol_list .list_more {
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.mod_twocol_list .list_more a {
    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    color: rgba(0,0,0,.6);
}
</style>


