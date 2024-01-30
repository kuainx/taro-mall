<template>
  <nut-row>
    <nut-col :span="10" class="cart-item-left">
      <div class="cart-image-container">
        <image
          :src="data.imageUrl"
          mode="aspectFit"
          style="height: 100%; width: 100%"
        />
      </div>
      <nut-checkbox
        v-model="checked"
        icon-size="25"
        class="cart-item-selector"
      />
    </nut-col>
    <nut-col :span="14" class="cart-item-left">
      <div>
        <div class="cart-item-title">{{ data.comName }}</div>
        <div class="cart-item-color">颜色：{{ data.comColor }}</div>
        <div class="cart-item-num">
          <div><nut-input-number v-model="num" /></div>
          <div style="padding-right: 10px">
            <nut-price :price="data.price" />
          </div>
        </div>
      </div>
      <div class="cart-item-close-container"><CircleClose size="20" /></div>
    </nut-col>
  </nut-row>
</template>
<script setup>
import { CircleClose } from '@nutui/icons-vue-taro'

const { select, data } = defineProps(['select', 'data'])
const num = ref(1)
const checked = ref(false)
</script>
<style>
.cart-item-left {
  position: relative;
  height: 400px;
}
.cart-image-container {
  height: 400px;
  line-height: 400px;
  width: 100%;
  background: linear-gradient(
    45deg,
    rgba(121, 121, 121, 0.1) 0,
    rgba(121, 121, 121, 0.1) 25%,
    transparent 25%,
    transparent 50%,
    rgba(121, 121, 121, 0.1) 50%,
    rgba(121, 121, 121, 0.1) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
}
.cart-item-selector {
  position: absolute;
  top: 10px;
  left: 10px;
}
.cart-item-close-container {
  position: absolute;
  top: 15px;
  right: 15px;
}
.cart-item-title {
  padding: 15px;
}
.cart-item-color {
  padding: 15px;
  color: #3b3b3b;
}
.cart-item-num {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
}
</style>
