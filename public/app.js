(function(){
    'use strict';

     angular.module('crudDemo', ['ui.router'])
            .config (function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('/', {
                        url : '/',
                        controller : 'employeeController',
                        controllerAs: 'empCtrl',
                        templateUrl: 'public/employee-details/employeeDetails.html'
                    });
            });
})();
