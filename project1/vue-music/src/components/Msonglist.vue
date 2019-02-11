<template>
<div>
    <ul class="qui_list" id="js_song_list">
<li class="js_play_song qui_list__item " data-songid="225584334">
    <div class="qui_list__bd">
        <div class="qui_list__box">
            <h3 class="qui_list__tit">
                <span class="qui_list__txt">
                    天份
                </span>
            </h3>
            <p class="qui_list__desc">
                
                <span class="qui_list__txt">
                    薛之谦
                    · 怪咖
                    
                </span>
            </p>
        </div>
    </div>
</li>
</ul>
<div class="check_more">点击加载更多歌曲</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.qui_list {
    overflow: hidden;
}
.qui_list__item {
    position: relative;
    display: -webkit-box;
}
.qui_list__bd {
    position: relative;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-align: center;
    padding: 10px 16px;
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
.qui_list__desc, .qui_list__tit {
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
.qui_list__desc .qui_list__txt {
    max-width: 94%;
}
.check_more {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 32px;
    margin-bottom: 15px;
    font-size: 14px;
}
</style>
