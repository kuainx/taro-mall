<template>
  <div>
    <div><image :src="url" alt="" style="width: 100%" mode="widthFix" /></div>
    <div>{{ title || 'title' }}</div>
    <div><nut-price :price="price" :decimal-digits="2" thousands /></div>
  </div>
</template>
<script setup>
const { url, title, price } = defineProps(['url', 'title', 'price'])
</script>
