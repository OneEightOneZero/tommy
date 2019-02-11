<template>
  <div>
    <div class="u-height">
      <div class="m-newsong">
        <div class="m-song-bg">
          <img
            style="opacity: 1;"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1548743480&di=9514f8785b4e91a1e4b5fdd6a0dd0536&src=http://pic.58pic.com/58pic/14/33/72/73M58PICgZG_1024.jpg"
          >
        </div>
        <div>
          <div class="m-scroll_wrapper m-song_nor j-songsrl">
            <div
              class="m-scroll_scroller m-scroll_scroller_vertical"
              style="/* transform: translate(0px, 0px) translateZ(0px); *//* transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); *//* transition-duration: 0ms; */"
            >
              <div>
                <div class="m-song_newfst" style="height: 676px;">
                  <div>
                    <div>
                      <span class="m-logo">
                        <svg
                          class="u-svg u-svg-logosong"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 184 34"
                        >
                          <g fill="#fff"></g>
                        </svg>
                      </span>
                    </div>
                    <div class="m-song-wrap" style="padding-top:98px">
                      <div class="m-song-disc">
                        <div class="m-song-turn">
                          <div class="m-song-rollwrap" :style="cdturning">
                            <div class="m-song-img">
                              <img class="u-img" :src="getimg">
                            </div>
                          </div>
                          <div class="m-song-lgour">
                            <div
                              class="m-song-light"
                              style="width: 323px;height: 323px;top: 9px;left: 9px;"
                            ></div>
                          </div>
                        </div>
                        <span :class="playicon"></span>
                      </div>
                      <div class="m-song-clickarea" @click="toplaybtn">
                        <p class="backbtn" @click="backbtn">《</p>
                      </div>
                    </div>
                    <div class="m-song-info">
                      <h2 class="m-song-h2">
                        <span class="m-song-sname">{{getname}}</span>
                        <span class="m-song-gap">-</span>
                        <b class="m-song-autr">{{getsinger}}</b>
                      </h2>
                      <div class="m-song-lrc">
                        <div class="m-song-scroll" style="height: 56px;">
                          <div class="m-song-iner" style="transform: translateY(-32px);">
                            <p class="m-song-lritem"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottombtn">
          <p>
            <span @click="prevbtn" class="iconfont icon-houtui"></span>
            <span
              @click="toplaybtn"
              :class="playicon"
              style="position: absolute;top: 660px;left: 175px;font-size: 50px;background-size: cover;z-index: 10;color: #ffffff;"
            ></span>
            <span @click="nextbtn" class="iconfont icon-qianjin"></span>
          </p>
        </div>
      </div>
    </div>
    <audio ref="audio" @canplay="ready" @error="error" :src="getmusic"></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
    data(){
        return{
            songready:false
        }
    },
  created() {
    if(!this.currentSong.id){
        this.$router.push({
        path: `/geshou`
      });
    };
  },
  computed: {
    cdturning() {
      return this.playing
        ? "animation: turning 20s infinite linear"
        : "animation: turning 20s infinite linear;animation-play-state: paused;";
    },
    playicon() {
      return this.playing
        ? "iconfont icon-tablesuspend"
        : "iconfont icon-tableactivation";
    },
    getimg() {
      return this.currentSong.image;
    },
    getname() {
      return this.currentSong.name;
    },
    getsinger() {
      return this.singer.name;
    },
    getmusic() {
      return this.currentSong.url;
    },
    getlyric() {
      return this.currentSong.lyric;
    },
    ...mapGetters([
      "currentSong",
      "singer",
      "playing",
      "currentIndex",
      "playlist"
    ])
  },
  methods: {

      ready(){
          this.songready=true
      },
      error(){
          this.songready=true
      },
    nextbtn() {
            if(!this.songready){
            return
        }
      // console.log(this.currentIndex+1)
      let index = this.currentIndex + 1;
      if (index === this.playlist.length) {
        index = 0;
      }
      this.setCurrentIndex(index);
      if (!this.playing) {
        this.toplaybtn();
      }
      this.songready=false
    },
    prevbtn() {
        if(!this.songready){
            return
        }
      let index = this.currentIndex - 1;
      if (index === -1) {
        index = this.playlist.length - 1;
      }
      this.setCurrentIndex(index);
      if (!this.playing) {
        this.toplaybtn();
      }
      this.songready=false
    },

    backbtn() {
      this.$router.back();
    },
    toplaybtn() {
            if(!this.songready){
            return
        }
      this.setPlayingState(!this.playing);
    },
    ...mapMutations({
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX"
    })
  },
  watch: {
    getmusic() {
      this.$nextTick(() => {
        this.$refs.audio.play();
        this.currentSong.getlyric()
      });
    },
    playing(newPlaying) {
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        newPlaying ? audio.play() : audio.pause();
      });
    }
  }
};
</script>

<style scoped>
@import url("../../public/player.css");
@import url("../assets/musiciconfonts/iconfont.css");
* {
  padding-left: 0px;
  padding-right: 0px;
}
.backbtn {
  font-size: 20px;
  display: inline-block;
  position: absolute;
  top: 105px;
  left: 0;
  z-index: 10;
  height: 20px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 5px 10px;
  color: #ff400b;
}
.m-song-bg {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transform: scale(1.5);
  transform-origin: center top;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  transition: opacity 0.3s linear;
}
.song-header .songtitle {
  display: inline-block;
  float: none;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
}
.song-header .songtitle .name {
  padding: 0.5rem 17px 0;
  font-size: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5;
  vertical-align: middle;
  position: relative;
}
.song-header .songtitle .name img {
  width: 40px;
  height: 17px;
  position: relative;
  top: 1px;
}
.song-header .songtitle .author {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
  font-size: 1.2rem;
}
.song-header .songtitle .author a {
  color: #999;
}
.coverlrcBox {
  position: relative;
  z-index: 10;
  height: 240px;
  overflow: hidden;
}
.coverlrcBox .album-panel {
  position: relative;
  width: 100%;
  height: 0;
  font-size: 0;
  text-align: center;
  padding: 0;
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.coverlrcBox .album-panel img {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  height: 100%;
  width: auto;
  z-index: 1;
  -webkit-transition: height 0.3s;
  transition: height 0.3s;
}
.m-song-disc {
  width: 342px;
  height: 342px;
}
.m-song-turn {
  width: 100%;
  height: 100%;
  margin-top: 50px;
}
.m-song-turn:before {
  background-image: url("https://music.163.com/m/s/img/disc-plus.png?b700b62e1971b351dcb8b8ce1c9ceea3");
}
.m-song-rollwrap {
  position: absolute;
  width: 250px;
  height: 250px;
  left: 50%;
  top: 50%;
  z-index: 1;
  margin: -125px 0 0 -125px;
  animation: rotate 20s linear initial;
}
.m-song-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: url("https://music.163.com/m/s/img/disc_default.png?7c9b3adc16f5485c2bfbe8a540534188")
    no-repeat;
  background-size: contain;
}
.u-img {
  width: 100%;
  vertical-align: middle;
}
.m-song-lgour,
.m-song-light {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
}
.m-song-light {
  position: relative;
  background-image: url("https://music.163.com/m/s/img/disc_light-plus.png?4392c8c9a8a33d4b2b2c33d3995503c9");
  width: 220px;
  height: 220px;
}
/* 播放按钮 */
.icon-tableactivation {
  position: absolute;
  top: 133px;
  left: 150px;
  font-size: 50px;
  background-size: cover;
  z-index: 10;
  color: #ffffff;
}
.icon-tablesuspend {
  position: absolute;
  top: 133px;
  left: 150px;
  font-size: 50px;
  background-size: cover;
  z-index: 10;
  color: #ffffff;
}
.icon-houtui {
  position: absolute;
  bottom: 0px;
  left: 65px;
  font-size: 50px;
  background-size: cover;
  z-index: 10;
  color: #ffffff;
}
.icon-qianjin {
  position: absolute;
  bottom: 0px;
  left: 265px;
  font-size: 50px;
  background-size: cover;
  z-index: 10;
  color: #ffffff;
}
.icon-tingzhi {
  position: absolute;
  bottom: 0px;
  left: 205px;
  font-size: 50px;
  background-size: cover;
  z-index: 10;
  color: #ffffff;
}
/* 播放音乐那条东西 */
.m-song-disc:after {
  width: 120px;
  height: 157px;
  top: -55px;
  left: 155px;
  background-image: url("https://music.163.com/m/s/img/needle-plus.png?994aa910ce3e4d242eb7076620b0e502");
}
/* 大面积点击 */
.m-song-clickarea {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 52px;
  z-index: 10;
}
</style>
