<template>
  <div class="animated fadeInLeft">
    <p class="backbtn">《</p>
      <div class="info_box">
        
        <div class="info_box__bd">
          <div class="album">
            <div class="album__media">
              <img
                class="album__cover"
                :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${bgimg}.jpg?max_age=2592000`"
              >
            </div>
            <div class="album__bd">
              <h1 class="album__name">{{songname}}</h1>
            </div>
          </div>
          <div class="opt_box">
            <a class="btn_play_all" href="javascript:;">播放全部</a>
            <div class="play_bar" style="display:none">
              <a href="javascript:;">
                <div class="play_bar__aside">
                  <svg class="play_bar__icon icon_svg">
                    <use xlink:href="#icon_pause_thin"></use>
                  </svg>
                  <svg class="progress">
                    <circle class="progress__circle"></circle>
                  </svg>
                </div>
              </a>

              <div class="play_bar__bd">
                <h2 class="song_name">
                  <span class="song_name__txt"></span>
                  <img
                    class="icon_vip js_current_song_vip"
                    src="//y.gtimg.cn/mediastyle/mobile/app/share/img/icon_vip.png?max_age=2592000"
                    style="display:none"
                  >
                </h2>
                <div class="lyrics">
                  <div class="lyrics__bd"></div>
                </div>
              </div>
              <a class="download js_down_song" href="javascript:;">
                <svg class="download__icon icon_svg">
                  <use xlink:href="#icon_download"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap" style="touch-action: none;">
        <div class="main" style="transform: translate(0px, 0px) translateZ(0px);">
          <ul class="qui_list qui_list--rank">
            <li
             v-for="(top,index) in topsong.data.data.list"
              class="qui_list__item js_play_song"
            >
              <div class="qui_list__order">
                <span class="qui_list__decimal">{{index+1}}</span>
              </div>
              <div class="qui_list__bd">
                <div class="qui_list__box">
                  <h3 class="qui_list__tit">
                    <span class="qui_list__txt">{{top.songname}}</span>
                  </h3>
                  <p class="qui_list__desc">
                    <span class="qui_list__txt" v-for="tsinger in top.singer" :key="tsinger.id">{{tsinger.name}}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
          
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { ERR_OK } from "../configs/commparam.js";
import {createSong} from "../configs/songdata.js"
import {mapActions} from "vuex"
import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default {

  data() {
    return {
      topsong:[]
    };
  },
  computed: {
    songname(){
      return this.toplist.data.albumname
    },
    bgimg(){
      return this.toplist.data.albummid
    },
    ...mapGetters([
      "toplist"
    ])
  },
  created() {
  },
  methods: {
  
  },
    mounted: function () {
    var _this = this
    axios.get(API_PROXY + `https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=${this.toplist.data.albummid}`)
    .then(function (res) {
      _this.topsong=res
       console.log(_this.topsong.data.data.list)
    }, function (error) {
      console.log(error)
    })
  },


};
</script>

<style scoped>
.backbtn{
  font-size: 20px;
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 9999;
  height: 20px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 5px 10px;
  color: #ff400b;

}
.main {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding-top: 225px;
  /* padding-bottom: 50px; */
  overflow: hidden;
  will-change: transform;
  transform: translateZ(0);
}
.info_box__bd {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  background: #757575;
}
.album {
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 17px;
  padding: 0 16px;
  overflow: hidden;
}
.album__media {
  position: relative;
  width: 125px;
  margin-right: 10px;
  overflow: hidden;
}
.album__media::after {
  content: "";
  display: block;
  padding-top: 100%;
}
.album__cover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.album__bd {
  position: relative;
  box-flex: 1;
}
.album__name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 47px;
  line-height: 1.3;
  overflow: hidden;
  font-size: 18px;
  width:140px;
}
.album__desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 36px;
  overflow: hidden;
  margin-top: 8px;
}
.fans_number {
  margin-top: 8px;
  font-size: 14px;
}
.btn_fllow {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  padding: 1px 10px;
  color: #fff;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
}
.btn_fllow::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -25%;
  width: 150%;
  height: 200%;
}
.author {
  display: -webkit-box;
  -webkit-box-align: center;
  margin-top: 8px;
  overflow: hidden;
}
.author__avatar {
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 24px;
}
.author__bd {
  -webkit-box-flex: 1;
}
.author__name {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #fff;
}
.opt_box {
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  height: 84px;
  padding: 0 16px;
  transition: 1s ease-in-out;
}
.btn_play_all {
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  min-width: 130px;
  padding: 0 20px;
  height: 40px;
  overflow: hidden;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border-radius: 20px;
  background: #31c27c;
}
.btn_play_all::before {
  content: "";
  display: block;
  height: 0;
  width: 0;
  margin-right: -3px;
  border-color: transparent transparent transparent #fff;
  border-width: 7px 11px;
  border-style: solid;
  border-radius: 2px;
}
.play_bar {
  display: -webkit-box;
  -webkit-box-align: center;
  width: 100%;
}
.play_bar__aside {
  position: relative;
  margin-right: 8px;
}
.play_bar__icon {
  display: block;
  width: 46px;
  height: 46px;
  color: #31c27c;
}
.play_bar__bd {
  -webkit-box-flex: 1;
  height: 46px;
  overflow: hidden;
}
.download {
  display: block;
  padding: 10px;
  margin-right: -10px;
}
.download__icon {
  display: block;
  width: 26px;
  height: 26px;
  color: #31c27c;
}
.song_name {
  display: -webkit-box;
  -webkit-box-align: center;
}
.song_name__txt {
  display: block;
  max-width: 90%;
  margin-right: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
}
.lyrics {
  height: 18px;
  overflow: hidden;
}
.lyrics__item {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(255, 255, 255, 0.5);
}
.lyrics__item.current {
  color: #fff;
}
.progress {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 46px;
  height: 46px;
  transform: rotate(-90deg);
}
.progress__circle {
  fill: none;
  stroke: #31c27c;
  stroke-width: 2;
}

.count_box__desc {
  font-size: 14px;
}
.count_box__number {
  margin-left: 5px;
}
.collect {
  position: absolute;
  top: 0;
  right: 0;
  display: -webkit-box;
  -webkit-box-align: center;
  height: 55px;
  font-size: 14px;
  color: #31c27c;
}
.collect__icon {
  display: block;
  width: 26px;
  height: 26px;
  margin-left: 5px;
}
.popup_tips {
  position: absolute;
  right: 0;
  top: 51px;
  padding: 0 8px;
  height: 35px;
  line-height: 35px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 4px;
}
.popup_tips::before {
  content: "";
  position: absolute;
  right: 20px;
  top: -10px;
  display: block;
  width: 0;
  height: 0;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  border-bottom: 10px solid rgba(0, 0, 0, 0.8);
}
/* list */
.count_box {
  position: relative;
  display: -webkit-box;
  -webkit-box-align: center;
  height: 54px;
  margin: 0 16px -10px;
}
.qui_list {
  overflow: auto;
  height: 414px;

}
.qui_list__item {
  position: relative;
  display: -webkit-box;
}
.qui_list__order {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  width: 45px;
  margin-right: -16px;
}
.qui_list--rank .qui_list__item:nth-child(-n + 3) .qui_list__decimal {
  color: #ff400b;
}
.qui_list__decimal {
  font-size: 16px;
}
.qui_list__decimal {
  font-size: 16px;
}
.qui_list__bd {
  position: relative;
  -webkit-box-flex: 1;
  display: -webkit-box;
  -webkit-box-align: center;
  padding: 9px 15px;
  overflow: hidden;
}
.qui_list__box {
  -webkit-box-flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.qui_list__tit {
  font-size: 16px;
  color: #000;
}
.qui_list__desc,
.qui_list__tit {
  display: -webkit-box;
  -webkit-box-align: center;
  overflow: hidden;
}
.qui_list__txt {
  display: block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.qui_list__desc,
.qui_list__tit {
  display: -webkit-box;
  -webkit-box-align: center;
  overflow: hidden;
}
.qui_list__desc .icon_vip {
  margin-right: 5px;
}
.icon_vip {
  display: block;
  height: 10px;
}
</style>
