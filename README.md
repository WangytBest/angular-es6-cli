# angular-es6-cli
通过webpack + gulp创建Angular项目 (使用ES6语法)

## 1. 创建项目

> * 在项目根目录创建package.json
> * 执行 `npm install` 安装依赖包

## 2. 配置 `gulp` + `webpack`

> 项目开发中我们需要区分开发环境和生产环境，因此我们需要不同的配置文件执行相应的开发或构建任务。
> 配置文件：
> * `gulpfile.babel.js` gulp入口文件 (如不使用ES6开发则不需要.babel后缀)
> * `.babelrc babel` 配置文件 (如不使用ES6开发则不需要该文件)
> * `build/config.js` 配置信息
> * `build/gulp.dev.js` 开发环境使用的gulp配置
> * `build/gulp.build.js` 生产环境使用的gulp配置
> * `build/webpack.config.js` 开发环境和生产环境共用的webpack配置
> * `build/webpack.dev.config.js` 开发环境使用的webpack配置
> * `build/webpack.build.config.js` 生产环境使用的webpack配置

## 3. 创建项目文件

## 4. 运行构建

> * 执行gulp serve启动http服务，访问http://localhost:5000进行预览
> * 执行gulp build构建生产环境代码，默认构建目录为dist
