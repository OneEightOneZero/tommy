<template>
  <ul>
    <li v-for="group in data" class="cube-index-list-group" :key="group.title">
      <h2 class="cube-index-list-anchor">{{group.title}}</h2>
      <ul>
        <li v-for="item in group.items" class="cube-index-list-item" :key="item.name">
          <div class="custom-item">
            <img
              class="avatar"
              :data-src="item.avatar"
              :src="item.avatar"
              lazy="loaded"
            >
            <span class="name">{{item.name}}</span>
          </div>
        </li>
      </ul>
    </li>
    
  </ul>
</template>

<script>
export default {
props: {
      data: {
        type: Array,
        default: []
      }
    }
};
</script>

<style>
ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-group {
    padding-bottom: 30px;
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
.view-wrapper .index-list-wrapper.custom .custom-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 20px 0 0 30px;
}
.view-wrapper .index-list-wrapper.custom .custom-item .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.view-wrapper .index-list-wrapper.custom .custom-item .name {
    margin-left: 20px;
    color: #000;
    font-size: 14px;
}
</style>
