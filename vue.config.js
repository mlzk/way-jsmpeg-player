// node路径模块

const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  transpileDependencies: true,
  runtimeCompiler: process.env.NODE_ENV === 'development',
  devServer: {
    hot: true,
    host: 'localhost',
    port: 10321,
    open: true
    // https: true,
  },
  configureWebpack: {
    resolve: {
      // externals: [ '.js', '.ts', '.vue', '.json' ],
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      libraryExport: 'default'
      // globalObject: 'this'
    }
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV === 'development', (config) => {
      config.devtool('cheap-module-source-map')
    })

    config.when(process.env.NODE_ENV === 'production', (config) => {
      config.optimization.minimizer('terser').tap((options) => {
        options[0].terserOptions.compress.drop_console = false
        options[0].terserOptions.compress.drop_debugger = true
        options[0].terserOptions.compress.pure_funcs = [
          'console.log',
          'console.dir',
          'console.time',
          'console.timeEnd'
        ]
        return options
      })
    })
  }
})
