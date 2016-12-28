(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('MenuAppController', MenuAppController);

  MenuAppController.$inject = ['MenuDataService', 'categoriesList'];

  function MenuAppController(MenuDataService, categoriesList) {
    var menuapp = this;
    menuapp.categoriesList = categoriesList;
  }
})();
