(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var menuData = this;

    menuData.getAllCategories = function () {
      var config = {
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      };
      return $http(config).then(function (result) {
        var categories = result.data;
        return categories;
      });
    }
    menuData.getItemsForCategory = function (categoryShortName) {
      var config = {
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {
          category: categoryShortName
        }
      };
      return $http(config).then(function (result) {
        var items = result.data;
        return items;
      });
    }
  }
})();
