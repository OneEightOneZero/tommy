<template>
    <a href="javascript:;">
<slot></slot>
    </a>
</template>

<script>
export default {
    name:'Aui'

}
</script>

<style scoped>
.mint-grid {
    position: relative;
    float: left;
    padding: 20px 10px;
    width: 33.33333333%;
    box-sizing: border-box;
}
.mint-grid:before {
    content: " ";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    bottom: 0;
    border-right: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
}
</style>
