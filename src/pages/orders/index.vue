<template>
  <view class="index">
    <view style="padding: 20px;">
      <view class="index-welcome-text flex-vertical-middle">
        <view style="font-size: 40px;font-weight: 100;">我的订单</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { useDidShow } from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '我的订单'
})
useDidShow(() => console.log('onShow'))

</script>

<style lang="scss">
.index {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.index-welcome-text {
  text-align: left;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
