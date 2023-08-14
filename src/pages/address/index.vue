<template>
  <view class="index">
    <view style="padding: 20px;">
      <view class="index-welcome-text flex-vertical-middle">
        <view style="font-size: 40px;font-weight: 100;">地址簿</view>
        <nut-button shape="round" plain type="primary" style="margin-left:20px">
          <template #icon>
            <Add size="20" />
          </template>
        </nut-button>
      </view>
      <AddrList />
    </view>
  </view>
</template>

<script setup>
import { useDidShow } from '@tarojs/taro'
import { Add } from '@nutui/icons-vue-taro'
import AddrList from './AddrList.vue'

definePageConfig({
  navigationBarTitleText: '地址簿'
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
