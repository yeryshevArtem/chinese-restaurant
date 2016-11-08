(function () {
  'use strict';
  angular.module('data')
  .controller('DataController', DataController);

  DataController.$inject = ['MenuDataService', 'categoriesList'];

  function DataController(MenuDataService, categoriesList) {
    var data = this;
    data.categoriesList = categoriesList;
  }
})();
