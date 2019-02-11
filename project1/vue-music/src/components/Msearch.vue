<template>
  <div class="search_box current_page loaded">
    <div class="mod_search_bar">
      <div class="search_bar_cont">
        <input
        @query="onQueryChange"
          v-model="query"
          class="search_input"
          type="search"
          autocomplete="off"
          style="-webkit-appearance: textfield;"
          autocorrect="off"
          :placeholder="placeholder"
        >
        <span class="icon icon_search">搜索</span>
        <span class="icon icon_delete">删除</span>
      </div>
      <div class="search_bar_tip_text" style>取消</div>
    </div>
    <div id="hot_keys" class="mod_search_result">
      <h3 class="result_tit">热门搜索</h3>
      <div class="result_tags">
        <a href="https://y.qq.com/msa/dfb2018/index.html?ADTAG=myqq" class="tag_s tag_hot">巅峰榜年终榜单</a>
        <a
          @click="addQuery(item.k)"
          href="javascript:;"
          class="js_keyword tag_s"
          v-for="item in hotkey"
          :key="item.n"
        >{{item.k}}</a>
      </div>
    </div>

    <div id="focus_wrapper" style="display: none;">
      <div id="record_keys" class="mod_search_record">
        <li>
          <a href="javascript:;" class="js_keyword record_main">
            <span class="icon iocn_clock"></span>
            <span class="js_keyword record_con">知否</span>
            <span class="js_del_record icon icon_close"></span>
          </a>
        </li>
        <p id="record_clear_btn" class="record_handle">
          <a href="javascript:;">清除搜索记录</a>
        </p>
      </div>
      <div id="search_result" class="mod_search_content"></div>
      <div id="loading" class="mod_loading" style="display:none;">
        <i class="loading__icon"></i>
        <span class="loading__text">正在载入更多...</span>
      </div>
    </div>
    <p id="load_complete" class="load_complete" style="display:none;">已加载全部</p>
             <Mserarchlistbox :query="query"></Mserarchlistbox>   
  </div>
</template>

<script>
import { getHotKey } from "../configs/search.js";
import { ERR_OK } from "../configs/commparam.js";
import Mserarchlistbox from './Mserarchlistbox.vue';
export default {
  props: {
    placeholder: {
      type: String,
      default: "搜索歌曲、歌单、专辑"
    }
  },
  data() {
    return {
      query: "",
      hotkey: []
    };
  },
  created() {
    this.$watch("query", newquery => {
      this.$emit("query", newquery);
    });
    this._getHotKye();
  },
  methods: {
    addQuery(query) {
      this.query = query;
    },
    onQueryChange(query){
        this.query = query
    },
    _getHotKye() {
      getHotKey().then(res => {
        if (res.code === ERR_OK) {
          this.hotkey = res.data.hotkey.slice(0, 10);
        }
      });
    }
  },
  components:{
      Mserarchlistbox,
  }
};
</script>

<style scoped>
@import url("../../public/search.css");
</style>
