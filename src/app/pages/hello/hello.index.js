import router from './hello.router';

export default
angular.module('demo.hello', ['pasp.ui'])
       .config(router)
       .name;