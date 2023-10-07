<template>
  <div>
    <div><img :src="url" alt="" style="width: 100%" /></div>
    <div>{{ title || 'title' }}</div>
    <div><nut-price :price="15213.1221" :decimal-digits="2" thousands /></div>
  </div>
</template>
<script setup>
const { url, title, price } = defineProps(['url', 'title', 'price'])
</script>
