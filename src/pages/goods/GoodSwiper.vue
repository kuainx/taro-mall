<template>
  <nut-swiper
    :pagination-visible="true"
    pagination-color="#426543"
    auto-play="10000"
    height="400"
  >
    <nut-swiper-item
      v-for="(item, index) in data"
      :key="index"
      style="text-align: center"
    >
      <img :src="item" style="height: 100%" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script setup>
const { data } = defineProps(['data'])
</script>
