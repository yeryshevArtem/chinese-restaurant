(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './src/home.template.html'
    })
    // .state('categories', {
    //   url: '/categories',
    //   templateUrl: './src/categories/categories.template.html',
    //   controller: 'MenudataController as categories',
    //   resolve: {
    //     categoriesList: ['MenuDataService', function (MenuDataService) {
    //       return MenuDataService.getAllCategories();
    //     }]
    //   }
    // });
  }
})();
