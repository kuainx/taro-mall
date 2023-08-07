<template>
  <nut-swiper :init-page="state.page" :pagination-visible="true" pagination-color="#426543" auto-play="5000">
    <nut-swiper-item v-for="item in state.list" :key="item">
      <img :src="item" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>

<script setup>
const state = reactive({
  page: 2,
  list: [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
})
</script>

<style>
.nut-swiper-item {
  line-height: 300px;
}

.nut-swiper-item img {
  width: 100%;
  height: 100%;
}
</style>
