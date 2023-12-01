import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import './app.scss'

axios.defaults.baseURL = '//106.14.157.17:8000/'

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())

export default App
