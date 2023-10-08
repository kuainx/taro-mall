<template>
  <div class="product-fall-container">
    <div
      v-for="(item, index) in itemList"
      :key="index"
      class="product-grid"
      @click="directToGoods(index)"
    >
      <Product :url="item.url" :title="item.name" />
    </div>
  </div>
</template>
<script setup>
import { get } from '../../utils/axios'
import Product from './Product.vue'
import { navigateTo } from '@tarojs/taro'

const itemList = ref([])
const { subType } = defineProps(['subType'])
get('/imageurl/commodity', { clothesName: subType }).then(res => {
  itemList.value = res.data
})
const directToGoods = id => {
  navigateTo({ url: '/pages/goods/index?id=' + id })
}
</script>
<style>
.product-grid {
  break-inside: avoid;
  margin: 10px 0;
  text-align: center;
  background-color: #f7f7f7;
}
.product-fall-container {
  column-count: 2;
  column-gap: 5px;
}
</style>
