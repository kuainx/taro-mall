<template>
  <view class="login-container">
    <view style="margin-bottom: 10px">登录</view>
    <view>
      <nut-input placeholder="请输入手机号" v-model="phone" type="number">
        <template #right>
          <nut-button type="primary" size="small" @click="sendSms">
            {{ sendSmsBtnText }}
          </nut-button>
        </template>
      </nut-input>
      <nut-input placeholder="请输入验证码" v-model="password" type="number" />
    </view>
    <view style="margin-top: 20px">
      <nut-button type="primary">登录</nut-button>
    </view>
  </view>
</template>
<script setup>
import { showToast } from '@tarojs/taro'

const phone = ref('')
const password = ref('')
const nextSend = ref(0)
const sendSmsBtnText = ref('获取验证码')
function sendSms() {
  if (Date.now() < nextSend.value) {
    showToast({ title: '请稍等一会再发送', icon: 'error' })
  } else {
    nextSend.value = Date.now() + 30 * 1000
    showToast({ title: '已发送验证码' })
    countDown()
  }
}

function countDown() {
  const time = Math.round((nextSend.value - Date.now()) / 1000)
  if (time > 0) {
    sendSmsBtnText.value = time + 's'
    setTimeout(countDown, 1000)
  } else {
    sendSmsBtnText.value = '获取验证码'
  }
}
</script>
<style>
.login-container {
  text-align: center;
}
</style>
