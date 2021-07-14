module.exports = {
    css: {
        loaderOptions: {
            sass: {
            }
        }
    },
    devServer: {
      hot: true,
      port: 3188,
    },
    configureWebpack:{
        resolve:{
            alias:{
              'assets': '@/assets',
              'components': '@/components',
              'styles': '@/styles',
              'views': '@/views',
            }
        }
    }
}
