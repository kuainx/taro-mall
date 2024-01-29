<template>
  <nut-swiper
    :init-page="state.page"
    :pagination-visible="true"
    pagination-color="#426543"
    auto-play="5000"
    style="width: 100vw"
    :style="{ height: `${ratio * 100}vw` }"
  >
    <nut-swiper-item v-for="item in state.list" :key="item">
      <view>
        <image
          :src="item"
          style="width: 100vw"
          :style="{ height: `${ratio * 100}vw` }"
          mode="widthFit"
          :onLoad="imageLoadHandler"
        />
      </view>
    </nut-swiper-item>
  </nut-swiper>
</template>

<script setup>
const ratio = ref(0.5)
const state = reactive({
  page: 2,
  list: [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
})

const imageLoadHandler = e => {
  ratio.value = e.detail.height / e.detail.width
}
</script>
