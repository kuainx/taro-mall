<template>
  <div>
    <nut-noticebar
      text="《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。游戏发生在一个被称作「提瓦特」的幻想世界..."
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
      :closeMode="true"
    />
    <div class="cart-title-container">
      <div>
        <nut-checkbox v-model="selectAll" icon-size="25">全选</nut-checkbox>
      </div>
      <div>0件商品</div>
    </div>
    <div v-for="item in cartData" :key="item.comId" class="cart-item-container">
      <CartItem :data="item" />
    </div>
  </div>
</template>
<script setup>
import { get } from '../../utils/axios'
import { useDidShow, navigateTo } from '@tarojs/taro'
import CartItem from './CartItem.vue'

const selectAll = ref(false)
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
.cart-title-container {
  display: flex;
  align-content: flex-end;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
</style>
