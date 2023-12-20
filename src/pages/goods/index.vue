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
      <nut-button type="default" @click="show = true">加入购物车</nut-button>
      <nut-button type="primary">立即购买</nut-button>
    </div>
    <nut-popup position="bottom" style="height: 60%" v-model:visible="show">
      <div style="padding: 20px">
        <nut-card
          :img-url="goodColorData[currentColor]"
          :title="currentItem.name"
          :price="currentItem.price + 1"
          :vipPrice="currentItem.price"
          :shopName="currentItem.color"
        />
        <nut-cell title="数量">
          <template #link>
            <nut-input-number v-model="num" decimal-places="0" />
          </template>
        </nut-cell>
        <div style="margin-top: 20px; text-align: center">
          <nut-button type="primary" @click="addToCart">加入购物车</nut-button>
        </div>
      </div>
    </nut-popup>
  </div>
</template>
<script setup>
import { getCurrentInstance, showToast } from '@tarojs/taro'
import GoodColorSelector from './GoodColorSelector.vue'
import GoodSwiper from './GoodSwiper.vue'
import { get } from '../../utils/axios'

const currentColor = ref(0)
const itemList = ref([])
const show = ref(false)
const num = ref(1)
const goodColorData = computed(() => itemList.value.map(e => e.url))
const currentItem = computed(() => itemList.value[currentColor.value] || {})

const productId = getCurrentInstance().router.params.id

get('/imageurl/commoditydetile', { clothesnumber: productId }).then(res => {
  itemList.value = res.data
})

const addToCart = () => {
  get('/carts/addcart', { pid: currentItem.value.id, amount: num.value }).then(
    () => {
      show.value = false
      showToast({ title: '已加入购物车' })
    }
  )
}
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
