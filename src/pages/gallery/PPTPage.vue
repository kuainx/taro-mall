<template>
  <div class="gallery-page" :style="{ 'background-image': `url(${pageData.imageList[currentBg]})` }">
    <div class="gallery-page-float">
      <div>
        {{ pageData.title }}
      </div>
      <div>
        {{ pageData.desc }}
      </div>
      <div>
        <nut-button type="default">{{ pageData.button }}</nut-button>
      </div>
    </div>
  </div>
  <div v-for="(item, index) in pageData.imageList" :key="index" class="preload"
    :style="{ 'background-image': `url(${item})` }"></div>
</template>
<script setup>

const { pageData } = defineProps(['pageData'])
const currentBg = ref(0)
const changeBg = () => {
  currentBg.value++
  if (currentBg.value >= pageData.imageList.length) {
    currentBg.value = 0
  }
  setTimeout(changeBg, 4000)
}
changeBg()
</script>
