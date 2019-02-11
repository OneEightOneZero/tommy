<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ author }}</h2>
    <ul v-for="music in musics">
      <li>
        {{ music.name }}
      </li><br>
      <li>
        <img :src="music.album.picUrl" style="width:200px;">
      </li>
    </ul>
  </div>
</template>

<script>
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'vue调用网易云接口',
      author: '泥猴啊',
      musics: []
    }
  },
  mounted: function () {
    var _this = this
    axios.get(API_PROXY + 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=003hzX7h4Flbcb')
    .then(function (res) {
       console.log(res)
    }, function (error) {
      console.log(error)
    })
  }
}
</script>
