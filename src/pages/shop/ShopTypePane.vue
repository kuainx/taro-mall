<template>
  <nut-grid :column-num="2" :gutter="10">
    <nut-grid-item
      v-for="(item, index) in itemList"
      :key="index"
      class="product-grid"
    >
      <Product :url="item.url" :title="item.name" />
    </nut-grid-item>
  </nut-grid>
</template>
<script setup>
import { get } from '../../utils/axios'
import Product from './Product.vue'

const itemList = ref([])
const { subType } = defineProps(['subType'])
get('/imageurl/commodity', { clothesName: subType }).then(res => {
  itemList.value = res.data
})
</script>
<style>
.product-grid .nut-grid-item__content {
  padding: 0;
  text-align: center;
}
</style>
