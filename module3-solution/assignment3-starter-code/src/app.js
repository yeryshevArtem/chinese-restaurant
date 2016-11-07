(function () {
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  MenuSearchService.$inject = ['$http', '$q'];

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: './src/foundItems.html',
      scope: {
        found: '<',
        statusOfSearch: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItems',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var foundItems = this;
    foundItems.checkFoundList = function () {
      if (foundItems.found !== undefined) {
        if (foundItems.found.length === 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  function NarrowItDownController(MenuSearchService) {
    var narrowList = this;

    narrowList.found;

    narrowList.search = function (terms) {
      var promise = MenuSearchService.getMatchedMenuItems(terms);
      promise.then(function (resultOfSearch) {
        narrowList.found = resultOfSearch;
      });
    }
    narrowList.removeItem = function (indexOfItem) {
      narrowList.found.splice(indexOfItem, 1);
    }
  }

  function MenuSearchService($http, $q) {
    var searchService = this;

    searchService.getMatchedMenuItems = function (searchTerm) {
      var config = {
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      };
      return $http(config).then(function (result) {
        var foundItems = [];
        if (searchTerm) {
          result.data.menu_items.forEach(function (item) {
            if (item.description.indexOf(searchTerm) !== -1) {
              foundItems.push(item);
            }
          });
        }
        return foundItems;
      });
    }
  }

})();
