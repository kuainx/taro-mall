export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/address/index',
    'pages/orders/index',
    'pages/questions/index',
    'pages/gallery/index',
    'pages/video/index',
    'pages/shop/index',
    'pages/goods/index',
    'pages/login/index',
    'pages/login/register',
    'pages/cart/index'
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
        iconPath: 'static/map.png',
        selectedIconPath: 'static/map.png'
      },
      {
        pagePath: 'pages/video/index',
        text: '视频',
        iconPath: 'static/send.png',
        selectedIconPath: 'static/send.png'
      },
      {
        pagePath: 'pages/shop/index',
        text: '商品',
        iconPath: 'static/shop.png',
        selectedIconPath: 'static/shop.png'
      },
      {
        pagePath: 'pages/cart/index',
        text: '购物车',
        iconPath: 'static/cart.png',
        selectedIconPath: 'static/cart.png'
      },
      {
        pagePath: 'pages/index/index',
        text: '我的',
        iconPath: 'static/vip.png',
        selectedIconPath: 'static/vip.png'
      }
    ]
  }
})
