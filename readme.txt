
1. 使用命令行使用webpack
	全局安装webpack
	cnpm install webpack -g
2. 将webpack融入到npm项目中
	1) 创建目录结构
		$mkdir app
			项目结构
				app
					dist
					src
					app.js
					webpack.config.js
	2)初始化项目
		$cnpm init
	3)安装webpack
		$cnpm install --save-dev webpack

	4)添加配置文件webpack.config.js
		var path = require('path');
		module.exports = {
		    entry: './app.js',
		    output: {
		        path: path.resolve(__dirname, './dist'),	//解析为绝对路径
		        filename: 'app.bundle.js'
		    }
		};
	5) 执行，在项目根目录执行webpack命令
		webpack

3. 在webpack使用loaders
	webpack只支持本地js模块，但是很多人使用ES2015，可以使用loaders来打包这些代码。loaders是一种特殊的模块，用于加载其他语言编写的代码到js中。例如， babel-loader使用Babel加载ES2015文件.
	1) 安装Babe以及presets:
		$cnpm install --save-dev babel-core babel-preset-es2015
	2) 安装babel-loader:
 		$cnpm install --save-dev babel-loader
 	3) Configure Babel to use these presets by adding .babelrc
		{ "presets": [ "es2015" ] }
	4) 修改webpack.config.js配置使用babel-loader来处理所有的js
		module.exports = {
		    entry: './app.js',
		    output: {
		        path: path.resolve(__dirname, './dist'),	//解析为绝对路径
		        filename: 'app.bundle.js'
		    }
		    module: {
		         loaders: [{
		             test: /\.js$/,
		             exclude: /node_modules/,
		             loader: 'babel-loader'
		         }]
		    }
		 }
	5) 这时候就可以使用es2015的语法了。
		import cats from './src/components/cats.js'
		let a = 3;
		console.log(cats,a);
