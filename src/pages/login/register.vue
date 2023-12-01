<template>
  <view class="login-container">
    <view style="margin-bottom: 10px">注册</view>
    <view>
      <nut-input placeholder="请输入手机号" v-model="phone" type="number">
        <template #right>
          <nut-button type="primary" size="small" @click="sendSms">
            {{ sendSmsBtnText }}
          </nut-button>
        </template>
      </nut-input>
      <nut-input placeholder="请输入验证码" v-model="smsCode" type="number" />
      <nut-input placeholder="请输入密码" v-model="password" />
    </view>
    <div class="login-button-group">
      <nut-button type="default" @click="navigateBack()">
        已有账号，去登录
      </nut-button>
      <nut-button type="primary" @click="register">注册</nut-button>
    </div>
  </view>
</template>
<script setup>
import { showToast, navigateBack } from '@tarojs/taro'
import { encryptPassword } from './utils'
import { post } from '../../utils/axios'

const phone = ref('')
const smsCode = ref('')
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

async function register() {
  const encryptedPass = encryptPassword(password.value)
  try {
    await post('/api/auth/register', {
      userName: phone.value,
      password: encryptedPass
    })
    showToast({ title: '注册成功' })
    navigateBack()
  } catch (error) {
    showToast({ title: error.toString(), icon: 'error' })
  }
}
</script>
