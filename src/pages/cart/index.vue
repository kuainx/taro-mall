<template>
  <div>
    <div v-for="item in cartData" :key="item.comId" class="cart-item-container">
      <nut-card
        :img-url="item.imageUrl"
        :title="item.comName"
        :price="item.price + 1"
        :vipPrice="item.price"
        :shopDesc="item.comColor"
      >
        <template #footer>
          <div class="customize">x{{ item.amount }}</div>
        </template>
      </nut-card>
    </div>
  </div>
</template>
<script setup>
import { get } from '../../utils/axios'
import { useDidShow, navigateTo } from '@tarojs/taro'

const cartData = ref([])
useDidShow(() => {
  get('/carts').then(res => {
    console.log(res)
    cartData.value = res.data.data
  })
})
</script>
<style>
.cart-item-container {
  margin: 10px;
}
</style>
