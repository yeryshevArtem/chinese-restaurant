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
    .state('categories', {
      url: '/categories',
      templateUrl: './src/main-menuapp.template.html',
      controller: 'MenuAppController as menuapp',
      resolve: {
        categoriesList: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categories.items', {
      url: '/{shortNameOfCategory}/items',
      templateUrl: './src/components/items/items.template.html',
      controller: 'MenuAppController as menuapp'
    });
  }
})();
