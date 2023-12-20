<template>
  <div v-for="item in cartData" :key="item.comId">
    <nut-card
      :img-url="item.imageUrl"
      :title="item.comName"
      :price="item.price + 1"
      :vipPrice="item.price"
      :shopDesc="'x' + item.amount"
      :shopName="item.comColor"
    />
  </div>
</template>
<script setup>
import { get } from '../../utils/axios'

const cartData = ref([])

get('/carts').then(res => {
  console.log(res)
  cartData.value = res.data
})
</script>
