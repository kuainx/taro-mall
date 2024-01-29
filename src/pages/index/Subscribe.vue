<template>
  <view class="">
    <view class="subscribe-title">关注公众号</view>
    <nut-row :gutter="10">
      <nut-col :span="12">
        <image
          src="https://s1.ax1x.com/2023/08/08/pPVVooq.jpg"
          mode="widthFix"
          class="subscribe-img"
        />
      </nut-col>
      <nut-col :span="12">
        <image
          src="https://s1.ax1x.com/2023/08/08/pPVVIwn.jpg"
          mode="widthFix"
          class="subscribe-img"
        />
      </nut-col>
    </nut-row>
    <nut-row :gutter="10" class="flex-vertical-middle">
      <nut-col :span="12" class="flex-center" style="font-size: 20px">
        菊花航空
        <Right size="20" />
      </nut-col>
      <nut-col :span="12" class="flex-center" style="font-size: 10px">
        Chrysanthemum Air
        <Right size="20" />
      </nut-col>
    </nut-row>
  </view>
</template>
<script setup>
import { Right } from '@nutui/icons-vue-taro'
</script>
<style>
.subscribe-title {
  font-size: 40px;
  margin-top: 40px;
  text-align: left;
}

.subscribe-img {
  width: 100%;
}
</style>
