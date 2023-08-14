<template>
  <view id="main">
    <div>第一页</div>
    <div>第二页</div>
    <div>最后一页</div>
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
  scroll-snap-type: y mandatory;
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
  background-image: url('https://api.r10086.com/%E6%A8%B1%E9%81%93%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api%E6%8E%A5%E5%8F%A3.php?%E5%9B%BE%E7%89%87%E7%B3%BB%E5%88%97=%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E7%B3%BB%E5%88%971&r=1');
  background-color: pink;
}

#main div:nth-child(2) {
  background-image: url('https://api.r10086.com/%E6%A8%B1%E9%81%93%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api%E6%8E%A5%E5%8F%A3.php?%E5%9B%BE%E7%89%87%E7%B3%BB%E5%88%97=%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E7%B3%BB%E5%88%971&r=2');
  background-color: blue;
}

#main div:nth-child(3) {
  background-image: url('https://api.r10086.com/%E6%A8%B1%E9%81%93%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api%E6%8E%A5%E5%8F%A3.php?%E5%9B%BE%E7%89%87%E7%B3%BB%E5%88%97=%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E7%B3%BB%E5%88%971&r=3');
  background-color: green;
}
</style>
