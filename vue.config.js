const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
 
module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/skeleton.js')
        }
      },
      minimize: true,
      quiet: true,
      router: {
        mode: 'hash',
        routes: [
          { path: '/', skeletonId: 'listSkeleton' },
          { path: /^\/detail/, skeletonId: 'detailSkeleton' }
        ]
      }
    }))
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false
  },
  // 关闭eslint语法检查
  lintOnSave: false
}