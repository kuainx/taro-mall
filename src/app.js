import { createApp } from 'vue'
import axios from 'axios'
import './app.scss'

axios.defaults.baseURL = '//47.96.71.53:8080/'

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
