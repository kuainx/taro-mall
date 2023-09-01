<template>
  <view id="main">
    <div>第一页</div>
    <div>第二页</div>
    <div>第三页</div>
  </view>
</template>

<script setup>
import { useDidShow } from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '画廊'
})
useDidShow(() => console.log('onShow'))

</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#main {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y proximity;
}

#main::-webkit-scrollbar {
  width: 0;
}

#main div {
  width: 100vw;
  height: 100vh;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  background-position: center;
}

#main div:nth-child(1) {
  background-image: url('http://47.96.71.53:8080/images/2');
  background-color: pink;
}

#main div:nth-child(2) {
  background-image: url('http://47.96.71.53:8080/images/3');
  background-color: blue;
}

#main div:nth-child(3) {
  background-image: url('http://47.96.71.53:8080/images/4');
  background-color: green;
}
</style>
