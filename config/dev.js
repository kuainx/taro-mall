module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false }
  },
  defineConstants: {},
  mini: {},
  h5: {
    publicPath: '/',
    devServer: {
      proxy: {
        '/api/': {
          target: 'http://106.14.157.17:5678',
          pathRewrite: {
            '^/api/': '/'
          },
          secure: false,
          changeOrigin: true
        }
      }
    }
  }
}
