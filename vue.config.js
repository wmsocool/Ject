const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
console.log(process.env.NODE_ENV, IS_PROD)
module.exports = {
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  publicPath: './', // 默认'/'，部署应用包时的基本 URL
  outputDir: 'dist', // 输出文件目录'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 静态资源(js、css、img、fonts)目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  devServer: {
    open: true, // 配置自动启动浏览器
    disableHostCheck: true, // webpack4.0 开启热更新
    host: 'localhost',
    port: 3300,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: false, // websockets代理
        // 将主机标头的原点更改为目标URL
        changeOrigin: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本
  parallel: require('os').cpus().length > 1,
  pwa: {},
  css: {
    extract: false, // 是否使用css分离插件 ExtractTextPlugin, 发包之前改成true, 影响css热更新效果
    sourceMap: false, // 开启 CSS source maps?
    // css预设器配置项
    loaderOptions: {
      stylus: {
        // import: "~@/assets/css/base.styl", // 全局注入stylus的变量、 stylus的工具类、  stylus的混合函数方法
        // globalVars: {
        //   primary: '#fff'
        // }
      },
      sass: {
        // prependData: `@import "~@/variables.sass"`
      },
      scss: {
        // prependData: `@import "~@/variables.scss";`
      },
      less: {
        globalVars: {
          primary: '#fff'
        }
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  chainWebpack(config) {
    // config.plugins.delete("preload")
    // config.plugins.delete("prefetch")
    // config.resolve.symlinks(true)// 修复HMR,热刷新功能
    config.resolve.alias.set('@', resolve('src')) // 添加别名
  }
}
