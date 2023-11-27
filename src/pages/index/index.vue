<template>
  <view class="index">
    <view>
      <Swiper></Swiper>
    </view>
    <view style="padding: 20px">
      <view class="index-welcome-text">
        <view style="font-size: 40px; font-weight: 100">欢迎</view>
        <view style="font-size: 20px; font-weight: 600" @click="login">
          您好，请登录账户
        </view>
      </view>
      <NavGrid />
      <Subscribe />
    </view>
  </view>
</template>

<script setup>
import Swiper from './Swiper.vue'
import NavGrid from './NavGrid.vue'
import Subscribe from './Subscribe.vue'
import { useDidShow, navigateTo } from '@tarojs/taro'

definePageConfig({
  navigationBarTitleText: '首页'
})

useDidShow(() => console.log('onShow'))

const login = () => {
  console.log(111)
  navigateTo({
    url: '/pages/login/index'
  })
}
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
