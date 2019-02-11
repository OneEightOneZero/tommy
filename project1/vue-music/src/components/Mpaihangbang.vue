<template>
  <div class="mod_topic">
    <ul>
      <li class="topic_item" v-for="(item,index) in toplist" :key="index" @click="selectItem(item)">
        <div class="topic_main">
          <a href="javascript:;" class="topic_media">
            <img
              :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.data.albummid}.jpg?max_age=2592000`"
            >
            <span class="listen_count">
              <i class="icon icon_listen"></i>
            </span>
          </a>
          <div class="topic_info">
            <div class="topic_cont">
              <h3 class="topic_tit">{{item.data.albumname}}</h3>
               <p>
                <span class="text_name">{{item.data.singer[0].name}}</span>
              </p>

            </div>
            <i class="topic_arrow"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getTopList } from "../configs/toplist.js";
import { ERR_OK } from "../configs/commparam.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      toplist: []
    };
  },
  created() {
    this._getTopList();
  },
  methods: {
    selectItem(item){
      this.$router.push({
       path:`/paihangdetails/${item.data.albummid}`
      })
      this.setTopList(item)
    },
    _getTopList() {
      getTopList().then(res => {
        if (res.code === ERR_OK) {
          this.toplist = res.songlist;
          console.log(this.toplist);
        }
      });
    },
    ...mapMutations({
      setTopList: "SET_TOP_LIST"
    })
  }
};
</script>

<style scoped>
.mod_topic {
  margin: 10px;
}
.mod_topic li {
  margin-bottom: 10px;
  overflow: hidden;
}
.mod_topic li .topic_main {
  display: -webkit-box;
  background: #fff;
}
.mod_topic li .topic_media {
  position: relative;
  width: 100px;
  height: 100px;
  display: block;
}
.mod_topic li .topic_media img {
  display: block;
  width: 100px;
  height: 100px;
}
.mod_topic li .topic_media .listen_count {
  left: 5px;
  bottom: 7px;
  line-height: 12px;
  color: #fff;
  opacity: 0.6;
  font-size: 9px;
  z-index: 10;
}
.mod_topic li .topic_media .icon_listen {
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  background-position: 0 -50px;
  margin-right: 3px;
}
.mod_topic li .topic_media::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  background-image: url("../assets/shadow_rp_b.png");
  background-size: 1px 117px;
  background-repeat: repeat-x;
}
.mod_topic li .topic_info {
  position: relative;
  -webkit-box-flex: 1;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
}
.mod_topic li .topic_cont {
  -webkit-box-flex: 1;
  margin: 0 10px 0 15px;
}
.mod_topic li .topic_tit {
  font-size: 16px;
  color: #000;
  font-weight: normal;
  margin-bottom: 5px;
}
.mod_topic li .topic_cont p {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}
.mod_topic li .topic_tit,
.mod_topic li .topic_cont p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mod_topic li .topic_cont .text_name {
  color: #000;
  margin-left: 8px;
  margin-right: 5px;
}
</style>
