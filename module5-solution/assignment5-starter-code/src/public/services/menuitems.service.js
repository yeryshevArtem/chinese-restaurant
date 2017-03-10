(function() {
  'use strict';
  angular.module('public')
  .service('MenuItemsService', MenuItemsService);

  MenuItemsService.$inject = ['$http', 'ApiPath'];

  function MenuItemsService($http, ApiPath) {
    var menuItems = this;
    var menuItemInfo = {};

    menuItems.setMenuItem = function(categoryShortName) {
      var config = {
        method: 'GET',
        url: ApiPath + '/menu_items/' + categoryShortName + '.json'
      };
      return $http(config).then(function(result) {
        menuItemInfo = result.data;
        return true;
      }).catch(function(error) {
        return error.data;
      });
    }
    menuItems.getMenuItem = function() {
      return menuItemInfo;
    }

  }
})();
