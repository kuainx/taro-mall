<template>
  <view class="vid-page">
    <VidCard />
    <VidCard />
    <VidCard />
  </view>
</template>

<script setup>
import { useDidShow } from '@tarojs/taro'
import VidCard from './VidCard.vue'

definePageConfig({
  navigationBarTitleText: '视频'
})
useDidShow(() => console.log('onShow'))

</script>

<style lang="scss">
.vid-page {
  background-color: #f7f8fa;
  overflow: scroll;
  // background-color: #66ccff;
  height: 100%;
  padding: 0 40px;
}
</style>
