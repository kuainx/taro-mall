<template>
  <nut-row>
    <nut-col :span="24">
      <view style="font-size: 20px;padding-bottom: 5px;">客户服务</view>
      <view style="font-size: 15px;">周一到周日</view>
      <view style="font-size: 15px;">10:00 - 22:00</view>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="24">
      <view style="font-size: 15px;">&emsp;</view>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="12">
      <nut-button type="primary">
        <template #icon>
          <Service />
        </template>
        客服热线
      </nut-button>
    </nut-col>
    <nut-col :span="12">
      <nut-button type="primary">
        <template #icon>
          <Message />
        </template>
        在线客服
      </nut-button>
    </nut-col>
  </nut-row>
</template>

<script setup>
import { Service, Message } from '@nutui/icons-vue-taro'

</script>
