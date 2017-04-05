import templateUrl from './hello.view.html';
import controller  from './hello.controller';

export default function config($urlRouterProvider, $stateProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('hello', {
        url: '/',
        controller: controller,
        controllerAs: 'vm',
        templateUrl: templateUrl
    });
}