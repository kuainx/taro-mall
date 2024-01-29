import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import './app.scss'
import { getStorageSync, navigateTo, showToast } from '@tarojs/taro'

if (process.env.TARO_ENV === 'weapp') {
  axios.defaults.baseURL = 'https://demo.ekuai.tech/taro/api/?url='
} else if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'api'
} else {
  axios.defaults.baseURL = './api/?url='
}

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = getStorageSync('token')
  return config
})
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.log(error)
    if (error.response.status === 401) {
      showToast({
        title: '登录失效，请重新登录',
        icon: 'none',
        duration: 2000,
        complete() {
          navigateTo({ url: '/pages/login/index' })
        }
      })
    }
    // axios请求服务器端发生错误的处理
    return Promise.reject(error)
  }
)

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

export default App
