<template>
  <view id="gallery">
    <nut-swiper :loop="true" auto-play="0" direction="vertical" :pagination-visible="true" style="height: 100%">
      <nut-swiper-item>
        <PPTPage :pageData="pageData" />
      </nut-swiper-item>
      <nut-swiper-item>
        <PPTPage :pageData="pageData" />
      </nut-swiper-item>
      <nut-swiper-item>
        <PPTPage :pageData="pageData" />
      </nut-swiper-item>
      <nut-swiper-item>
        <PPTPage :pageData="pageData" />
      </nut-swiper-item>
    </nut-swiper>
  </view>
</template>

<script setup>
import { useDidShow } from '@tarojs/taro'
import PPTPage from './PPTPage.vue'

definePageConfig({
  navigationBarTitleText: '画廊'
})
useDidShow(() => console.log('onShow'))

const pageData = {
  pageId: 100,
  imageList: [
    'https://t.mwm.moe/mp/?r=1',
    'https://t.mwm.moe/mp/?r=2',
    'https://t.mwm.moe/mp/?r=3'
  ],
  title: '测试页面',
  desc: 'Ut amet labore ut',
  button: 'laboris',
  href: 'Excepteur nisi'
}

</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#gallery {
  width: 100vw;
  height: 100%;
}

.gallery-page {
  width: 100vw;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.preload {
  width: 0;
  height: 0;
}

.gallery-page-float {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
}

.gallery-page-float div {
  padding: 0 40px 40px;
}
</style>
