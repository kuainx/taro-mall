<template>
  <div>
    <GoodSwiper :data="[goodColorData[currentColor]]" />
    <GoodColorSelector
      v-model="currentColor"
      :data="goodColorData"
      style="margin-top: 10px"
    />
    <div class="good-container">
      <div class="good-title">{{ currentItem.name }}</div>
      <div class="good-desc">{{ currentItem.color }}</div>
      <div class="good-price">
        <nut-price :price="currentItem.price" symbol="¥" size="large" />
      </div>
      <div class="good-story">{{ currentItem.describe }}</div>
    </div>
    <div class="good-footer">
      <nut-button type="default">默认按钮</nut-button>
      <nut-button type="primary">主要按钮</nut-button>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance } from '@tarojs/taro'
import GoodColorSelector from './GoodColorSelector.vue'
import GoodSwiper from './GoodSwiper.vue'
import { get } from '../../utils/axios'

const currentColor = ref(0)
const itemList = ref([])
const goodColorData = computed(() => itemList.value.map(e => e.url))
const currentItem = computed(() => itemList.value[currentColor.value] || {})

const productId = getCurrentInstance().router.params.id

get('/imageurl/commoditydetile', { clothesnumber: productId }).then(res => {
  itemList.value = res.data
})
</script>
<style>
.good-container {
  margin: 10px 50px;
}
.good-title {
  font-size: x-large;
}
.good-desc {
  color: #444;
}
.good-price {
  margin-top: 10px;
}
.good-footer {
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  bottom: 40px;
}
.good-story {
  text-align: justify;
  line-height: 2;
  font-size: medium;
}
</style>
