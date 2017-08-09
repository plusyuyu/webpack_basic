var path = require('path');

module.exports = {
     entry: './app.js',
     output: {
         path: path.resolve(__dirname, './dist'),	//解析为绝对路径
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 };