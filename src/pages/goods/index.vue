<template>
  <div>
    <GoodSwiper :data="goodColorData" />
    <GoodColorSelector v-model="currentColor" :data="goodColorData" />
    <div class="good-container">
      <div class="good-title">Redmi Note 13 Pro</div>
      <div class="good-desc">红米手机 8GB+GB</div>
      <div class="good-price">
        <nut-price :price="10010.01" symbol="¥" size="large" />
      </div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
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

const goodColorData = [
  '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/217853/18/36158/25157/650bf8c4F793f351b/9cc443043e5d2b2d.jpg',
  '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/190201/3/38776/36511/650c026bF9c13251c/0eb078537e63c72b.jpg',
  '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/194615/37/38048/28420/650c01f8F5f383ae8/fd5e61a84a052a27.jpg',
  '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/220870/27/36355/26377/650c02d6F39d48704/53f6f663f1da17aa.jpg'
]
const currentColor = ref(0)

const productId = getCurrentInstance().router.params.id
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
</style>
