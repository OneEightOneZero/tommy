<template>
  <div class="view-wrapper">
    <div class="index-list-wrapper custom">
      <div class="cube-index-list">
        <ul>
          <li v-for="group in singers" class="cube-index-list-group" :key="group.title">
            <h2 class="cube-index-list-anchor">{{group.title}}</h2>
            <ul>
              <li
                @click="selectItem(item)"
                v-for="item in group.items"
                class="cube-index-list-item"
                :key="item.name"
              >
                <div class="custom-item">
                  <img class="avatar" :data-src="item.avatar" :src="item.avatar" lazy="loaded">
                  <span class="name">{{item.name}}</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="cube-index-list-nav">
        <ul class="cube-index-list-nav-list">
          <li data-index="0" class="cube-index-list-nav-item active">
            <span class="custom-nav-item"></span>
          </li>
          <li
            v-for="(group,index) in singers"
            :data-index="index"
            class="cube-index-list-nav-item"
            :key="index"
          >
            <span class="custom-nav-item">{{group.title[0]}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getSingerList } from "../configs/redata.js";
import { ERR_OK } from "../configs/commparam.js";
import Singer from "../configs/singer-new.js";
import { mapMutations } from "vuex";

const HOT_NAME = "热门";
const HOT_SINGER_LENGHT = 10;

export default {
  data() {
    return {
      singers: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    // selectSinger(singer) {
    //   this.$router.push({
    //     path: `/singerdetails/${singer.id}`
    //   });
    // },
    selectItem(item) {
      this.$emit("select", item);
      this.$router.push({
        path: `/singerdetails/${item.id}`
      });
      this.setSinger(item)
    },
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = this._chulisingerdata(res.data.list);
          console.log(this.singers);
        }
      });
    },
    _chulisingerdata(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGHT) {
          map.hot.items.push(
            new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            })
          );
        }
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        );
      });
      // 处理map为有序列表
      let hot = [];
      let ret = [];
      for (let key in map) {
        let val = map[key];
        if (val.title.match(/[a-zA-Z]/)) {
          // a-z
          ret.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(ret);
    },
    ...mapMutations({
      setSinger: "SET_SINGER"
    })
  }
};
</script>
<style scoped>
.view-wrapper .index-list-wrapper.custom .cube-index-list-group {
  padding-bottom: 30px;
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-anchor {
  background-color: #333;
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 20px;
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-anchor {
  background-color: #333;
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 20px;
}
.cube-index-list-anchor {
  padding: 16px 16px 10px;
  line-height: 1;
  font-size: 14px;
  color: #999;
  background: #f7f7f7;
}
.view-wrapper .index-list-wrapper.custom .custom-item .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.view-wrapper .index-list-wrapper.custom .custom-item .name {
  margin-left: 20px;
  color: #000;
  font-size: 12px;
}
.view-wrapper .index-list-wrapper.custom .custom-item {
  display: flex;
  box-align: center;
  align-items: center;
  padding: 20px 0 0 30px;
}
/* english */
.view-wrapper .index-list-wrapper.custom .cube-index-list-nav {
  padding: 20px 0;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
}
.cube-index-list-nav {
  position: absolute;
  z-index: 30;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: Helvetica;
}
.cube-index-list-nav > ul {
  padding: 0;
  margin: 0;
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-nav > ul > li {
  padding: 3px;
}
.cube-index-list-nav > ul > li.active {
  color: #fc9153;
}
.cube-index-list-nav > ul > li {
  padding: 6px 16px 0;
  line-height: 1;
  text-align: center;
  font-size: 12px;
  color: #666;
}
.view-wrapper
  .index-list-wrapper.custom
  .cube-index-list-nav
  > ul
  > li.active
  .custom-nav-item {
  color: #ffcd32;
}
.view-wrapper .index-list-wrapper.custom .custom-nav-item {
  font-size: 12px;
  color: #909090;
}
</style>
