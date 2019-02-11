<template>

    <div>
        <slot></slot>
    </div>
    
</template>

<script>
export default {
    name:'Divui'

}
</script>

<style scoped>

.mint-grid__icon {
    width: 75px;
    height:75px;
    margin: 0 auto;
}
.mint-grid__icon img {
    display: block;
    width: 73px;
    height: 73px;
}
.mint-grid__icon + .mint-grid__label {
    margin-top: 5px;
}
.mint-grid__label {
    display: block;
    text-align: center;
    color: #000000;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.mint-grid:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
</style>
