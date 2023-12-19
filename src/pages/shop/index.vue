<template>
  <div class="shop-container">
    <nut-tabs
      id="shopTopTab"
      style="flex-shrink: 0"
      v-model="state.topTab"
      title-scroll
      title-gutter="10"
      name="topTab"
    >
      <nut-tab-pane
        v-for="item in state.topTabList"
        :key="item"
        :title="item"
      />
    </nut-tabs>
    <nut-tabs
      v-model="state.leftTab"
      title-scroll
      title-gutter="10"
      background="#f5f5f5"
      name="leftTab"
      direction="vertical"
      style="height: 100%"
    >
      <nut-tab-pane
        v-for="item in state.leftTabList[state.topTabList[state.topTab]]"
        :key="item.name"
        :title="item.name"
        style="padding: 0"
      >
        <ShopTypePane :subType="item.name" />
      </nut-tab-pane>
    </nut-tabs>
  </div>
</template>
<script setup>
import { get } from '../../utils/axios'
import ShopTypePane from './ShopTypePane.vue'

const state = reactive({
  topTab: '0',
  topTabList: Array.from(new Array(10).keys()),
  leftTab: '0',
  leftTabList: {}
})

get('/ColumnController/allColumn').then(res => {
  state.topTabList = Object.keys(res.data)
  state.leftTabList = res.data
})
</script>
<style>
.nut-tabs__titles-item__line {
  --nut-tabs-horizontal-titles-item-active-line-width: 1.8rem;
  --nut-tabs-vertical-tab-line-color: #2c68ff;
}

#shopTopTab .nut-tabs__content {
  display: none;
}

.shop-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
