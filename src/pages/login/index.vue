<template>
  <div class="login-background">
    <view class="login-container">
      <view style="margin-bottom: 10px; color: white">登录</view>
      <view>
        <nut-input placeholder="请输入手机号" v-model="phone" type="number" />
        <nut-input
          placeholder="请输入密码"
          v-model="password"
          type="password"
        />
      </view>
      <div class="login-button-group">
        <nut-button
          type="default"
          @click="navigateTo({ url: '/pages/login/register' })"
        >
          没有账号，去注册
        </nut-button>
        <nut-button type="primary" @click="login">登录</nut-button>
      </div>
    </view>
  </div>
</template>
<script setup>
import { navigateTo, navigateBack, showToast, setStorage } from '@tarojs/taro'
import { encryptPassword } from './utils'
import { post } from '../../utils/axios'

const phone = ref('')
const password = ref('')

async function login() {
  const encryptedPass = encryptPassword(password.value)
  try {
    const data = await post('/api/auth/login', {
      userName: phone.value,
      password: encryptedPass
    })
    console.log(data)
    setStorage({ key: 'token', data: data.data.token })
    showToast({ title: '注册成功' })
    navigateBack()
  } catch (error) {
    showToast({ title: error.toString(), icon: 'error' })
  }
}
</script>
<style>
.login-container {
  text-align: center;
}

.login-background {
  background-image: url('./background.png');
  background-size: cover;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 40px 0;
}

.login-button-group {
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
}
</style>
