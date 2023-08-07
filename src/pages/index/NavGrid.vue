<template>
  <nut-grid class="nav-grid" :gutter="10" :column-num="2">
    <nut-grid-item text="我的订单">
      <Order size="30" />
    </nut-grid-item>
    <nut-grid-item text="专属客服">
      <Service size="30" />
    </nut-grid-item>
    <nut-grid-item text="地址簿">
      <Location2 size="30" />
    </nut-grid-item>
    <nut-grid-item text="常见问题">
      <Ask size="30" />
    </nut-grid-item>
    <nut-grid-item text="预约">
      <Clock size="30" />
    </nut-grid-item>
    <nut-grid-item text="专属壁纸">
      <Star size="30" />
    </nut-grid-item>
  </nut-grid>
</template>

<script setup>
import { Order, Service, Location2, Ask, Clock, Star } from '@nutui/icons-vue-taro'

</script>

<style>
.nav-grid {
  --nut-grid-item-content-bg-color: #f2f2f2;
  --nut-grid-item-text-font-size: 30px;
}

.nav-grid .nut-icon {
  margin-bottom: 20px;
}
</style>
