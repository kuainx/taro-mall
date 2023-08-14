<template>
  <nut-grid class="nav-grid" :gutter="10" :column-num="2">
    <nut-grid-item text="我的订单" @click="navigate('/pages/gallery/index')">
      <Order size="30" />
    </nut-grid-item>
    <nut-grid-item text="专属客服" @click="showService = true">
      <Service size="30" />
    </nut-grid-item>
    <nut-grid-item text="地址簿" @click="navigate('/pages/address/index')">
      <Location2 size="30" />
    </nut-grid-item>
    <nut-grid-item text="常见问题" @click="navigate('/pages/questions/index')">
      <Ask size="30" />
    </nut-grid-item>
    <nut-grid-item text="预约" @click="showJump = true">
      <Clock size="30" />
    </nut-grid-item>
    <nut-grid-item text="专属壁纸" @click="showJump = true">
      <Star size="30" />
    </nut-grid-item>
  </nut-grid>
  <nut-popup closeable :style="{ padding: '30px 20px', width: '80%' }" v-model:visible="showService">
    <ServiceC />
  </nut-popup>
  <nut-dialog content="即将跳转至---" v-model:visible="showJump" />
</template>

<script setup>
import { Order, Service, Location2, Ask, Clock, Star } from '@nutui/icons-vue-taro'
import { navigateTo } from '@tarojs/taro'
import ServiceC from './ServiceC.vue'

const showService = ref(false)
const showJump = ref(false)
const navigate = url => {
  navigateTo({
    url,
    events: {
      // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      acceptDataFromOpenedPage: function (data) {
        console.log(data)
      },
      someEvent: function (data) {
        console.log(data)
      }
    },
    success: function (res) {
      // 通过eventChannel向被打开页面传送数据
      res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
    }
  })
}
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
