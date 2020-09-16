// __dirname  代表当前文件所在目录的绝对路径
const path = require('path') //  用来解析路径相关信息的模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 模式: 生产环境
  mode: 'production',
  // 入口
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  // 出口(打包生成js)
  output: {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 模块加载器
  module: {
    rules: [
      // 处理ES6  ES6 ==>ES5
      {
        test: /\.js$/, // 用于匹配文件（对哪些文件进行处理）
        // exclude: /node_modules/,  //  排除
        include: [path.resolve(__dirname, 'src')], //  只针对哪些文件
        use: { // 配置loder
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // 预设包  包含多个常用插件的包
          }
        }
      },
      // 处理CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 处理图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
          }
        }]
      }

    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // 以哪个页面为模板（在根目录找）
      filename: 'index.html' // 生成页面，在output的path下
    })
  ],
  //  配置开发服务器
  devServer: {
    open: true, // 自动打开浏览器
    quiet: true, // 不做太多日志输出
  },
  // 配置开启source-map调试
  devtool: 'cheap-module-eval-source-map'
}