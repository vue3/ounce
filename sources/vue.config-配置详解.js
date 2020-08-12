let path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/ounce', //部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
    outputDir: 'dist3', //打包路径地址,Default: 'dist' ,代替 output.path
    assetsDir: 'assets1', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    indexPath: 'test.html', //静态模板文件输出的地址
    filenameHashing: true, //生成的静态文件是否需要带有hash
    //   // 多页面开发的时候需要
    //   pages:{
    //     index: {
    //         // page 的入口
    //         entry: 'src/index/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: 'Index Page',
    //         // 在这个页面中包含的块，默认情况下会包含
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //       },
    //       // 当使用只有入口的字符串格式时，
    //       // 模板会被推导为 `public/subpage.html`
    //       // 并且如果找不到的话，就回退到 `public/index.html`。
    //       // 输出文件名会被推导为 `subpage.html`。
    //       subpage: 'src/subpage/main.js'
    // },
    //   runtimeCompiler:false , // 将其设置为true将允许您在Vue组件中使用模板选项，但会为您的应用程序带来大约10 KB的额外负载。
    //   productionSourceMap:false,
    //   // configureWebpack: {
    //   //     plugins: [
    //   //       new MyAwesomeWebpackPlugin()
    //   //     ]
    //   //   }
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
    },
    css: {
        extract: true, //css抽出
        sourceMap: true, // source map
    },
    devServer: {
        host: '0.0.0.0',
        port: '8080',
        https: true,
        // 访问 ： http://localhost:8090/api/info
        // 代理到 http://localhost:8081/api/info
        // 真正的接口地址：http://localhost:8081/new/api/info
        proxy: {
            '^/api': {
                target: 'http://localhost:8081',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/new/api'
                }
                // pathRewrite: {'^/old/api' : '/new/api'}
            },
            '^/foo': {
                target: 'http://localhost:8081'
            }
        }
    },
    parallel: 4, //是否用多线程进行压缩
    //   // pwa://离线缓存配置,向PWA 插件传递选项。
    lintOnSave: false //不需要eslint校验
}

// 参考网站：
// https://cli.vuejs.org/config/
// https://cli.vuejs.org/zh/config/#vue-config-js