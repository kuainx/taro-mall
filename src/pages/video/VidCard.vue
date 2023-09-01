<template>
  <view class="video-container">
    <view class="video-box"><video :src="videoSrc" :poster="videoPoster" controls
        style="border-radius: 12px 12px 0 0;overflow: hidden;"></video>
    </view>

    <view class="video-title">{{ videoTitle }}</view>
    <view class="video-title">{{ videoDesc }}</view>
  </view>
</template>
<script setup>
const videoSrc = ref('//cloud.video.taobao.com/play/u/39031574/p/1/e/6/t/1/53531734.mp4')
const videoPoster = ref('https://img.alicdn.com/tps/TB19pmpQpXXXXadXpXXXXXXXXXX-2048-1151.jpg')
const videoTitle = ref('科技的味道，充满乐趣')
const videoDesc = ref('阿里云计蒜')

</script>
<style lang="scss">
.video-container {
  width: 100%;
  background-color: white;
  border-radius: 24px;
  padding-bottom: 5px;
  margin: 30px 0;
  box-shadow: 0px 1px 7px 0px rgb(237, 238, 241);
}

.video-box {
  height: 400px;
  position: relative;
}

.video-title {
  margin: 10px;
}

.taro-video-video {
  object-fit: cover !important;
}
</style>
