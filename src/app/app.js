import 'framework_js';
import 'pasp_js';
import 'pasp_css';


/**
 * 自动页面加载
 */
let dependencies = [];
let pageModules = require.context('./pages/', true, /\.index.js$/);
pageModules.keys().forEach((key) => {
    dependencies.push(pageModules(key).default);
});


/**
 * 创建应用
 */
let app = angular.module('demo', dependencies);


/**
 * 注册应用
 */
angular.bootstrap(document.body, [app.name]);