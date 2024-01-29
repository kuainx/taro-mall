<template>
  <nut-swiper
    :pagination-visible="true"
    pagination-color="#426543"
    auto-play="10000"
    style="width: 100vw"
    :style="{ height: `${ratio * 100}vw` }"
  >
    <nut-swiper-item
      v-for="(item, index) in data"
      :key="index"
      style="text-align: center"
    >
      <image
        :src="item"
        style="height: 100%"
        mode="widthFix"
        :onLoad="imageLoadHandler"
      />
    </nut-swiper-item>
  </nut-swiper>
</template>

<script setup>
const { data } = defineProps(['data'])
const ratio = ref(1)
const imageLoadHandler = e => {
  ratio.value = e.detail.height / e.detail.width
}
</script>
