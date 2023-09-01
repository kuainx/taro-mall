export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/address/index',
    'pages/orders/index',
    'pages/questions/index',
    'pages/gallery/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#333',
    backgroundColor: '#fafafa',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/gallery/index',
        text: '图片',
        iconPath: 'static/map.svg',
        selectedIconPath: 'static/map.svg'
      },
      {
        pagePath: 'pages/address/index',
        text: '视频',
        iconPath: 'static/send.svg',
        selectedIconPath: 'static/send.svg'
      },
      {
        pagePath: 'pages/index/index',
        text: '我的',
        iconPath: 'static/vip.svg',
        selectedIconPath: 'static/vip.svg'
      }
    ]
  }
})
