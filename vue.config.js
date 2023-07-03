const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
    //proxy 요청을 보낼 api 시작 부분
      '^/api': {
        target: 'http://localhost:3000',
      }
    }
  }
})