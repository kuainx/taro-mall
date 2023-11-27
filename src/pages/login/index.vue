<template>
  <view class="login-container">
    <view style="margin-bottom: 10px">登录</view>
    <view>
      <nut-input placeholder="请输入手机号" v-model="phone" type="number" />
      <nut-input placeholder="请输入密码" v-model="password" type="password" />
    </view>
    <div class="login-button-group">
      <nut-button
        type="default"
        @click="navigateTo({ url: '/pages/login/register' })"
      >
        没有账号，去注册
      </nut-button>
      <nut-button type="primary">登录</nut-button>
    </div>
  </view>
</template>
<script setup>
import { navigateTo } from '@tarojs/taro'

const phone = ref('')
const password = ref('')
</script>
<style>
.login-container {
  text-align: center;
  margin-top: 40px;
}
.login-button-group {
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
}
</style>
